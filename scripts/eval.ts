// Runs the test questions in eval/questions.json through the real answer flow
// and reports how the app did.
//
//   npm run eval              run what is not done yet, then print the report
//   npm run eval -- --report  print the report from saved results, no model calls
//   npm run eval -- --fresh   forget saved results and start again
//
// Each result is saved as it finishes, so the run can stop when the daily
// allowance is used up and carry on another day.
import { appendFileSync, existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { usageMeter } from "../src/providers/cost.ts";
import { getEmbedder, getLlm } from "../src/providers/index.ts";
import { ask, type AskResult, type Lang } from "../src/rag/ask.ts";
import { restStore, type Match } from "../src/rag/vector-store.ts";

interface Question {
  id: string;
  expect: "answer" | "out_of_scope" | "refusal";
  reason?: string;
  en?: string;
  vi?: string;
  sources?: string[];
}

interface Result {
  key: string; // question id + language
  id: string;
  lang: Lang;
  question: string;
  expect: Question["expect"];
  expectReason?: string;
  state: AskResult["state"];
  reason?: string;
  retrieved: string[]; // article IDs of the passages given to the model, best first
  scores: number[];
  claims: { text: string; limited: boolean; cited: { pmcid: string; section: string; text: string }[] }[];
  neurons: number;
}

const RESULTS = "eval/results.jsonl";
const REVIEW = "eval/review.md";
const flag = (name: string) => process.argv.includes(name);

const questions = JSON.parse(readFileSync("eval/questions.json", "utf8")) as Question[];
if (flag("--fresh") && existsSync(RESULTS)) rmSync(RESULTS);

const results = new Map<string, Result>();
if (existsSync(RESULTS)) {
  for (const line of readFileSync(RESULTS, "utf8").split("\n")) {
    if (line) {
      const r = JSON.parse(line) as Result;
      results.set(r.key, r);
    }
  }
}

// One run per language a question is written in.
const runs = questions.flatMap((q) =>
  (["en", "vi"] as Lang[]).filter((l) => q[l]).map((lang) => ({ q, lang, key: `${q.id}-${lang}`, text: q[lang]! })),
);

async function runAll(): Promise<void> {
  const accountId = process.env.CF_ACCOUNT_ID;
  const token = process.env.CF_AI_TOKEN;
  if (!accountId || !token) throw new Error("Fill in the .env file first.");
  const store = restStore(accountId, token);

  for (const run of runs) {
    if (results.has(run.key)) continue;
    const meter = usageMeter();
    const env = { CF_ACCOUNT_ID: accountId, CF_AI_TOKEN: token, onUsage: meter.onUsage };
    let passages: Match[] = [];
    let raw: any = null;
    let outcome: AskResult;
    try {
      outcome = await ask(
        {
          llm: getLlm(env),
          embedder: getEmbedder(env),
          store,
          trace: (step, detail) => {
            if (step === "passages") passages = detail as Match[];
            if (step === "answer") raw = detail;
          },
        },
        run.text,
        run.lang,
      );
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      if (/4006|429/.test(message)) {
        console.log(`\nStopped: the daily allowance is used up. ${results.size} of ${runs.length} done. Run "npm run eval" again later to continue.`);
        return;
      }
      console.log(`\n${run.key}: failed (${message.slice(0, 120)}). Skipped for now.`);
      continue;
    }

    // Match each kept claim back to the passages the model said it used.
    const claims: Result["claims"] = [];
    if (outcome.state === "answer") {
      const rawClaims: any[] = Array.isArray(raw?.claims) ? raw.claims : [];
      for (const c of outcome.claims) {
        const source = rawClaims.find((r) => typeof r?.text === "string" && r.text.trim() === c.text);
        const cited = (Array.isArray(source?.sources) ? source.sources : [])
          .map((label: unknown) => passages[Number(String(label).replace(/^S/i, "")) - 1])
          .filter(Boolean)
          .map((p: Match) => ({ pmcid: p.metadata.pmcid, section: p.metadata.section, text: p.metadata.text }));
        claims.push({ text: c.text, limited: c.limited, cited });
      }
    }

    const result: Result = {
      key: run.key, id: run.q.id, lang: run.lang, question: run.text,
      expect: run.q.expect, expectReason: run.q.reason,
      state: outcome.state,
      reason: outcome.state === "out_of_scope" ? outcome.reason : undefined,
      retrieved: passages.map((p) => p.metadata.pmcid),
      scores: passages.map((p) => Math.round(p.score * 1000) / 1000),
      claims,
      neurons: meter.neurons(),
    };
    results.set(run.key, result);
    appendFileSync(RESULTS, JSON.stringify(result) + "\n");
    console.log(`${run.key.padEnd(16)} ${result.state.padEnd(13)} ${String(result.neurons).padStart(4)} neurons`);
  }
}

// A claim that quotes a measurement, e.g. "more than 1 g per day". The prompt forbids these.
const NUMBER_WITH_UNIT = /\d+([.,]\d+)?\s*(%|mg|g\b|g\/|mL|dL|mmol|µmol|IU|U\/|\/\s?day|per day|ngày)|1\s?:\s?\d{2,}/i;

function report(): void {
  const done = [...results.values()];
  const pct = (n: number, d: number) => (d ? `${n} of ${d} (${Math.round((100 * n) / d)}%)` : "none run yet");
  const sourcesOf = new Map(questions.map((q) => [q.id, q.sources ?? []]));

  const inScope = done.filter((r) => r.expect === "answer");
  const answered = inScope.filter((r) => r.state === "answer");
  const hit = inScope.filter((r) => r.retrieved.slice(0, 5).some((id) => sourcesOf.get(r.id)!.includes(id)));

  const outScope = done.filter((r) => r.expect === "out_of_scope");
  const caught = outScope.filter((r) => r.state === "out_of_scope");
  const rightReason = caught.filter((r) => r.reason === r.expectReason);

  const uncovered = done.filter((r) => r.expect === "refusal");
  const refused = uncovered.filter((r) => r.state === "refusal");

  // Same question in English and Vietnamese: how many of the English run's articles did the Vietnamese run also find?
  const overlaps: number[] = [];
  for (const q of questions.filter((x) => x.en && x.vi)) {
    const en = results.get(`${q.id}-en`);
    const vi = results.get(`${q.id}-vi`);
    if (!en || !vi || en.retrieved.length === 0) continue;
    const a = new Set(en.retrieved);
    const b = new Set(vi.retrieved);
    overlaps.push([...a].filter((x) => b.has(x)).length / a.size);
  }
  const overlap = overlaps.length ? `${Math.round((100 * overlaps.reduce((s, x) => s + x, 0)) / overlaps.length)}% across ${overlaps.length} pairs` : "none run yet";

  const allClaims = done.flatMap((r) => r.claims);
  const numeric = allClaims.filter((c) => NUMBER_WITH_UNIT.test(c.text));
  const uncited = allClaims.filter((c) => c.cited.length === 0);
  const full = done.filter((r) => r.state === "answer");
  const avg = full.length ? Math.round(full.reduce((s, r) => s + r.neurons, 0) / full.length) : 0;

  console.log(`\nEvaluation report: ${done.length} of ${runs.length} runs done\n`);
  console.log(`In-scope questions answered        ${pct(answered.length, inScope.length)}`);
  console.log(`Expected article in top 5 passages ${pct(hit.length, inScope.length)}   pass mark 85%`);
  console.log(`Out-of-scope questions caught      ${pct(caught.length, outScope.length)}   pass mark 100%`);
  console.log(`  with the expected reason         ${pct(rightReason.length, caught.length)}`);
  console.log(`Uncovered questions refused        ${pct(refused.length, uncovered.length)}   pass mark 100%`);
  console.log(`English/Vietnamese source overlap  ${overlap}   pass mark 80%`);
  console.log(`Claims quoting a number with unit  ${pct(numeric.length, allClaims.length)}   aim for 0`);
  console.log(`Claims with no matched passage     ${pct(uncited.length, allClaims.length)}   must be 0`);
  console.log(`Average cost of an answered run    ${avg} neurons`);
  console.log(`Total cost so far                  ${done.reduce((s, r) => s + r.neurons, 0)} neurons`);

  const wrong = done.filter((r) => r.state !== r.expect);
  if (wrong.length) {
    console.log("\nNot as expected:");
    for (const r of wrong) console.log(`  ${r.key}: expected ${r.expect}, got ${r.state}${r.reason ? ` (${r.reason})` : ""} | ${r.question}`);
  }

  // A reading sheet: each claim beside the passage it cites, for checking by hand.
  const lines = ["# Claims to check by hand", "", "For each claim, read the passage under it. Does the passage really say this? Mark yes or no.", ""];
  for (const r of full) {
    lines.push(`## ${r.key}: ${r.question}`, "");
    for (const c of r.claims) {
      lines.push(`**Claim${c.limited ? " (evidence is limited)" : ""}:** ${c.text}`, "");
      for (const p of c.cited) lines.push(`> ${p.pmcid}, ${p.section}: ${p.text}`, "");
      lines.push("Supported: [ ] yes  [ ] no", "");
    }
  }
  writeFileSync(REVIEW, lines.join("\n"));
  if (full.length) console.log(`\nReading sheet written to ${REVIEW} (${allClaims.length} claims).`);
}

if (!flag("--report")) await runAll();
report();
