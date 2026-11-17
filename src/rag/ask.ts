// The whole answer flow: scope check, translate, search, answer, verify citations.
import { evidenceLevels, type EvidenceLevel } from "../../config/evidence.ts";
import { providers } from "../../config/providers.ts";
import type { EmbeddingProvider, LlmProvider } from "../providers/types.ts";
import { answerPrompt, scopePrompt } from "./prompts.ts";
import type { Match, VectorStore } from "./vector-store.ts";

export type Lang = "en" | "vi";
export type OutOfScopeReason = "personal_result" | "diagnosis_or_treatment" | "other_disease" | "not_lab";

export interface Source {
  pmcid: string;
  title: string;
  authors: string;
  year: string;
  journal: string;
  license: string;
  url: string;
  section: string;
  evidenceLevel: EvidenceLevel;
}

export interface Claim {
  text: string;
  /** True when the passages back the claim only weakly. Shown in amber. */
  limited: boolean;
  sources: Source[];
}

export type AskResult =
  | { state: "answer"; lang: Lang; claims: Claim[] }
  | { state: "refusal" }
  | { state: "out_of_scope"; reason: OutOfScopeReason };

export interface AskDeps {
  llm: LlmProvider;
  embedder: EmbeddingProvider;
  store: VectorStore;
  /** Optional: receives details of each step, for testing. */
  trace?: (step: string, detail: unknown) => void;
}

// A first, cheap check before any model is called: "my/tôi ..." together with a number.
const PERSONAL = /(^|[\s,.])(my|mine|i have|i got|i am|i'm|của tôi|tôi|của mình|của em|mẹ tôi|bố tôi|con tôi)([\s,.]|$)/i;
const HAS_NUMBER = /\d/;
// A lab value or cut-off: a number followed by a lab unit, e.g. "500 mg/24 hours", "3.5 g/dL", "60 mL/min".
// Ranges vary by laboratory, so claims quoting one are dropped. Percentages of patients are allowed.
// Also doses written in words ("five milligrams per kilogram") and counts "per microliter" or "/mm³".
const LAB_VALUE =
  /\d([.,\s]\d+)*\s*(mg|g\/|g\s?(per|mỗi)|mmol|[µμu]mol|mL|dL|IU|U\/|mm\/h|mm\s?(per|trong)|×?\s?10\^?\d+\s?\/L|\/L\b|\/\s?mm[3³]|\/\s?[µμu]L|per\s+(micro|cubic))|(milligram|mg)s?\s*(per|\/|mỗi)\s*(kilogram|kg)/i;

function parseJson(text: string): any {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) throw new Error("The model reply was not JSON.");
  return JSON.parse(text.slice(start, end + 1));
}

const SCOPES = ["in_scope", "personal_result", "diagnosis_or_treatment", "other_disease", "not_lab"];
// bge embedding models search better when the question carries this prefix.
const QUERY_PREFIX = "Represent this sentence for searching relevant passages: ";

export async function ask(deps: AskDeps, question: string, lang: Lang): Promise<AskResult> {
  const trace = deps.trace ?? (() => {});
  const q = question.trim().slice(0, 500);

  if (PERSONAL.test(q) && HAS_NUMBER.test(q)) {
    trace("scope", "rule: personal pronoun with a number");
    return { state: "out_of_scope", reason: "personal_result" };
  }

  // 1. Scope check and translation in one small model call.
  const scoped = parseJson(await deps.llm.generate(scopePrompt(q), { json: true, maxTokens: 600 }));
  trace("scope", scoped);
  if (!SCOPES.includes(scoped.scope) || typeof scoped.english_question !== "string") {
    throw new Error("The scope check gave an unexpected reply.");
  }
  if (scoped.scope !== "in_scope") return { state: "out_of_scope", reason: scoped.scope };

  // 2. Search the passages.
  const [vector] = await deps.embedder.embed([QUERY_PREFIX + scoped.english_question]);
  // Fetch extra, then keep the best few per article so one paper cannot crowd out the rest.
  const found = await deps.store.query(vector, 20);
  const perArticle = new Map<string, number>();
  const passages = found
    .filter((m) => m.score >= providers.retrieval.minScore)
    .filter((m) => {
      const n = (perArticle.get(m.metadata.pmcid) ?? 0) + 1;
      perArticle.set(m.metadata.pmcid, n);
      return n <= providers.retrieval.maxPerArticle;
    })
    .slice(0, providers.retrieval.topK);
  trace("passages", passages);
  trace("search", passages.map((m) => `${m.score.toFixed(3)} ${m.id} ${m.metadata.title.slice(0, 50)} | ${m.metadata.section}`));
  if (passages.length < providers.retrieval.minChunks) return { state: "refusal" };

  // 3. Write the answer from those passages only.
  const raw = parseJson(
    await deps.llm.generate(answerPrompt(scoped.english_question, passages, lang), { json: true, maxTokens: 1800 }),
  );
  trace("answer", raw);

  // 4. Keep only claims whose citations point at real passages.
  const claims: Claim[] = [];
  for (const c of Array.isArray(raw.claims) ? raw.claims : []) {
    if (typeof c?.text !== "string" || !c.text.trim() || !Array.isArray(c.sources)) continue;
    const sources = toSources(c.sources, passages);
    if (sources.length === 0) continue;
    if (LAB_VALUE.test(c.text)) {
      trace("dropped", `lab value: ${c.text}`);
      continue;
    }
    claims.push({ text: c.text.trim(), limited: c.limited === true, sources });
  }
  if (claims.length === 0) return { state: "refusal" };
  return { state: "answer", lang, claims };
}

function toSources(labels: unknown[], passages: Match[]): Source[] {
  const byArticle = new Map<string, Source>();
  for (const label of labels) {
    const n = typeof label === "string" ? Number(label.replace(/^S/i, "")) : NaN;
    const p = Number.isInteger(n) ? passages[n - 1] : undefined;
    if (!p || byArticle.has(p.metadata.pmcid)) continue;
    const m = p.metadata;
    // The evidence level comes from the stored article record, never from the model.
    const level = evidenceLevels.includes(m.evidenceLevel as EvidenceLevel)
      ? (m.evidenceLevel as EvidenceLevel)
      : "review or expert opinion";
    byArticle.set(m.pmcid, {
      pmcid: m.pmcid, title: m.title, authors: m.authors, year: m.year, journal: m.journal,
      license: m.license, url: m.url, section: m.section, evidenceLevel: level,
    });
  }
  return [...byArticle.values()];
}
