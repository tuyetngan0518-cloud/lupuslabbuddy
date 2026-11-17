// Turns every passage in data/chunks.jsonl into numbers (embeddings) and loads
// them into the Vectorize search index, together with the source details the
// app needs to show next to each claim.
//
// Embeddings cost neurons, so each one is saved in data/embeddings.jsonl and
// reused. Only passages that are new or changed are sent to the model.
//
//   npm run embed                        embed what is missing, then load the index
//   npm run embed -- --rebuild           delete the index and reload it (free if all embeddings are saved)
//   npm run embed -- --save-from-index   copy embeddings already in the index into the file (no neurons)
import { createHash } from "node:crypto";
import { appendFileSync, existsSync, readFileSync } from "node:fs";
import { providers } from "../../config/providers.ts";
import { getEmbedder } from "../../src/providers/index.ts";
import { neuronsFor } from "../../src/providers/cost.ts";

const INDEX_NAME = "lupus-chunks";
const CACHE = "data/embeddings.jsonl";
const BATCH = 50;
const flag = (name: string) => process.argv.includes(name);

const accountId = process.env.CF_ACCOUNT_ID;
const token = process.env.CF_AI_TOKEN;
if (!accountId || !token) throw new Error("Add CF_ACCOUNT_ID and CF_AI_TOKEN to the .env file first.");

const api = `https://api.cloudflare.com/client/v4/accounts/${accountId}/vectorize/v2/indexes`;
const auth = { Authorization: `Bearer ${token}` };

async function call(path: string, init: RequestInit = {}): Promise<any> {
  const res = await fetch(`${api}${path}`, { ...init, headers: { ...auth, ...(init.headers ?? {}) } });
  const body = (await res.json().catch(() => ({}))) as any;
  if (!res.ok) throw new Error(`Vectorize ${init.method ?? "GET"} ${path || "/"} failed (${res.status}): ${JSON.stringify(body.errors ?? body)}`);
  return body.result;
}
const post = (path: string, data: unknown) =>
  call(path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });

/** "Bertsias GK, Tektonidou M, ..." becomes "Bertsias et al." */
function shortAuthors(authors: string): string {
  const list = authors.split(",").map((a) => a.trim()).filter(Boolean);
  const surname = (a: string) => a.replace(/\s+[A-Z]{1,3}$/, "");
  if (list.length === 0) return "Authors not listed";
  if (list.length === 1) return surname(list[0]);
  if (list.length === 2) return `${surname(list[0])} and ${surname(list[1])}`;
  return `${surname(list[0])} et al.`;
}

const articles = new Map<string, any>(
  (JSON.parse(readFileSync("data/articles.json", "utf8")) as any[]).map((a) => [a.pmcid, a]),
);
const chunks = readFileSync("data/chunks.jsonl", "utf8").trim().split("\n").map((l) => JSON.parse(l));
if (chunks.length > providers.retrieval.maxChunks) throw new Error(`Too many passages (${chunks.length}) for the free tier.`);

// The article title and section are embedded with the text so a passage keeps its context.
const embedText = (c: any) => `${articles.get(c.pmcid).title}. ${c.section}. ${c.text}`;
// A fingerprint of the exact text and model. If either changes, the saved embedding is not reused.
const fingerprint = (c: any) =>
  createHash("sha256").update(`${providers.embedding.model}\n${embedText(c)}`).digest("hex").slice(0, 20);

// ---- the saved embeddings ----
const saved = new Map<string, number[]>();
if (existsSync(CACHE)) {
  for (const line of readFileSync(CACHE, "utf8").split("\n")) {
    if (!line) continue;
    const row = JSON.parse(line) as { fp: string; values: number[] };
    saved.set(row.fp, row.values);
  }
}
function save(c: any, values: number[]): void {
  const rounded = values.map((v) => Math.round(v * 1e6) / 1e6);
  saved.set(fingerprint(c), rounded);
  appendFileSync(CACHE, JSON.stringify({ id: c.id, fp: fingerprint(c), values: rounded }) + "\n");
}

// ---- one-time rescue: copy what the index already holds into the file ----
if (flag("--save-from-index")) {
  const todo = chunks.filter((c) => !saved.has(fingerprint(c)));
  let copied = 0;
  let mismatched = 0;
  const SIZE = 20;
  for (let i = 0; i < todo.length; i += SIZE) {
    const batch = todo.slice(i, i + SIZE);
    const rows = (await post(`/${INDEX_NAME}/get_by_ids`, { ids: batch.map((c) => c.id) })) as any[];
    const byId = new Map(rows.map((r) => [r.id, r]));
    for (const c of batch) {
      const row = byId.get(c.id);
      // Only trust a stored embedding if it was made from the same passage text we have now.
      if (row?.values?.length === providers.embedding.dimensions && row.metadata?.text === c.text && row.metadata?.section === c.section) {
        save(c, row.values);
        copied++;
      } else mismatched++;
    }
    process.stdout.write(`\rCopied ${copied} of ${todo.length} from the index`);
  }
  console.log(`\nSaved embeddings: ${saved.size} of ${chunks.length} passages. Not copied (missing or changed): ${mismatched}.`);
  process.exit(0);
}

// ---- embed only what is missing ----
const missing = chunks.filter((c) => !saved.has(fingerprint(c)));
console.log(`${chunks.length} passages; ${chunks.length - missing.length} already saved; ${missing.length} passages to embed.`);

let spent = 0;
const embedder = getEmbedder({
  CF_ACCOUNT_ID: accountId,
  CF_AI_TOKEN: token,
  onUsage: (u) => (spent += neuronsFor(u)),
});
for (let i = 0; i < missing.length; i += BATCH) {
  const batch = missing.slice(i, i + BATCH);
  const vectors = await embedder.embed(batch.map(embedText));
  batch.forEach((c, n) => save(c, vectors[n]));
  process.stdout.write(`\rEmbedded ${Math.min(i + BATCH, missing.length)} of ${missing.length}`);
}
if (missing.length) console.log(spent ? `\nAbout ${Math.round(spent)} neurons used.` : "\n(The service did not report token counts.)");

// ---- load the index ----
const existing = ((await call("")) as any[]).some((i) => i.name === INDEX_NAME);
const rebuild = flag("--rebuild");
if (existing && rebuild) {
  await call(`/${INDEX_NAME}`, { method: "DELETE" });
  console.log("Deleted the old index.");
}
if (!existing || rebuild) {
  await post("", {
    name: INDEX_NAME,
    description: "SLE lab education passages",
    config: { dimensions: providers.embedding.dimensions, metric: "cosine" },
  });
  console.log(`Created index "${INDEX_NAME}" (${providers.embedding.dimensions} dimensions).`);
}

// Without --rebuild, only newly embedded passages need loading.
const toLoad = !existing || rebuild ? chunks : missing;
for (let i = 0; i < toLoad.length; i += BATCH) {
  const lines = toLoad.slice(i, i + BATCH).map((c) => {
    const a = articles.get(c.pmcid);
    return JSON.stringify({
      id: c.id,
      values: saved.get(fingerprint(c)),
      metadata: {
        text: c.text,
        section: c.section,
        pmcid: c.pmcid,
        title: a.title,
        authors: shortAuthors(a.authors),
        year: a.year,
        journal: a.journal,
        license: a.license,
        url: a.url,
        evidenceLevel: a.evidenceLevel,
      },
    });
  });
  await call(`/${INDEX_NAME}/upsert`, {
    method: "POST",
    headers: { "Content-Type": "application/x-ndjson" },
    body: lines.join("\n"),
  });
  process.stdout.write(`\rLoaded ${Math.min(i + BATCH, toLoad.length)} of ${toLoad.length} passages`);
}
console.log(toLoad.length ? "\nDone. The index can take a minute or two to finish updating." : "Nothing new to load. The index is up to date.");
