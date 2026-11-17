// Builds the library: search Europe PMC, keep open-licensed articles,
// cut them into passages, and save everything under data/.
//
//   npm run ingest -- --limit 20     a small sample
//   npm run ingest                   the full run
import { mkdirSync, writeFileSync } from "node:fs";
import { evidenceLevelFor, type EvidenceLevel } from "../../config/evidence.ts";
import { providers } from "../../config/providers.ts";
import { ingestSettings, topics } from "../../config/topics.ts";
import { chunkArticle, type Chunk } from "./chunk.ts";
import { buildQuery, fetchFullText, search, type EpmcResult } from "./epmc.ts";
import { extractParagraphs } from "./jats.ts";

interface Article {
  pmcid: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string | null;
  url: string;
  license: string;
  attribution: string;
  evidenceLevel: EvidenceLevel;
  topic: string;
  chunks: number;
}

const args = process.argv.slice(2);
const limitIdx = args.indexOf("--limit");
const limit = limitIdx >= 0 ? Number(args[limitIdx + 1]) : Infinity;
if (Number.isNaN(limit) || limit < 1) throw new Error("--limit needs a number, e.g. --limit 20");

const DATA = "data";
mkdirSync(DATA, { recursive: true });

const articles: Article[] = [];
const chunks: Chunk[] = [];
const linkOnly: { pmcid: string; title: string; url: string; license: string; reason: string }[] = [];
const seen = new Set<string>();
const maxChunks = providers.retrieval.maxChunks;

const normaliseLicense = (l?: string) => (l ?? "").toLowerCase().replace(/\s+/g, " ").trim();
const articleUrl = (pmcid: string) => `https://europepmc.org/article/PMC/${pmcid}`;

function toArticle(r: EpmcResult, topic: string, chunkCount: number): Article {
  const pmcid = r.pmcid!;
  const title = (r.title ?? "").replace(/<[^>]+>/g, "").replace(/\.$/, "");
  const authors = r.authorString?.replace(/\.$/, "") ?? "Authors not listed";
  const journal = r.journalInfo?.journal?.title ?? "";
  const year = r.pubYear ?? "";
  const license = normaliseLicense(r.license);
  const url = r.doi ? `https://doi.org/${r.doi}` : articleUrl(pmcid);
  return {
    pmcid, title, authors, journal, year,
    doi: r.doi ?? null,
    url, license,
    attribution: `${authors}. ${title}. ${journal}${year ? ` (${year})` : ""}. ${url}. Licensed under ${license.toUpperCase()}.`,
    evidenceLevel: evidenceLevelFor(r.pubTypeList?.pubType ?? [], title),
    topic,
    chunks: chunkCount,
  };
}

async function collect(topicId: string, query: string, quota: number): Promise<void> {
  if (quota <= 0) return;
  const results = await search(query, Math.min(100, quota * 4));
  let taken = 0;
  for (const r of results) {
    if (taken >= quota || articles.length >= limit || chunks.length >= maxChunks) return;
    if (!r.pmcid || seen.has(r.pmcid)) continue;
    seen.add(r.pmcid);

    const title = (r.title ?? "").replace(/<[^>]+>/g, "");
    const license = normaliseLicense(r.license);
    if (!ingestSettings.allowedLicenses.includes(license)) {
      linkOnly.push({
        pmcid: r.pmcid, title, url: articleUrl(r.pmcid),
        license: license || "not stated",
        reason: "License does not allow copying or translating the text.",
      });
      continue;
    }

    const xml = await fetchFullText(r.pmcid, `${DATA}/raw`);
    if (!xml) continue;
    const room = Math.min(ingestSettings.maxChunksPerArticle, maxChunks - chunks.length);
    const made = chunkArticle(r.pmcid, extractParagraphs(xml), {
      maxWords: ingestSettings.maxWordsPerChunk,
      minWords: ingestSettings.minWordsPerChunk,
      maxChunks: room,
    });
    if (made.length < 4) continue; // abstract only, or no usable text

    articles.push(toArticle(r, topicId, made.length));
    chunks.push(...made);
    taken++;
    console.log(`  ${r.pmcid}  ${String(made.length).padStart(2)} chunks  ${license.padEnd(11)} ${title.slice(0, 70)}`);
  }
}

// With --limit, spread the sample across topics instead of filling the first one.
const perTopic = Number.isFinite(limit) ? Math.max(1, Math.floor(limit / topics.length)) : Infinity;

for (const topic of topics) {
  if (articles.length >= limit || chunks.length >= maxChunks) break;
  console.log(`\n${topic.label}`);
  const summaryQuota = Math.min(ingestSettings.summaryArticlesPerTopic, perTopic);
  const before = articles.length;
  await collect(topic.id, buildQuery(topic, true), summaryQuota);
  const left = perTopic - (articles.length - before);
  await collect(topic.id, buildQuery(topic, false), Math.min(ingestSettings.studyArticlesPerTopic, left));
}

writeFileSync(`${DATA}/articles.json`, JSON.stringify(articles, null, 2));
writeFileSync(`${DATA}/chunks.jsonl`, chunks.map((c) => JSON.stringify(c)).join("\n") + "\n");
writeFileSync(`${DATA}/link-only.json`, JSON.stringify(linkOnly, null, 2));

const tally = (values: string[]) =>
  Object.entries(values.reduce<Record<string, number>>((m, v) => ((m[v] = (m[v] ?? 0) + 1), m), {}))
    .map(([k, n]) => `${k}: ${n}`)
    .join(", ");

const words = chunks.map((c) => c.words);
console.log(`\nArticles kept: ${articles.length}   Chunks: ${chunks.length} (cap ${maxChunks})   Link-only: ${linkOnly.length}`);
console.log(`Licenses: ${tally(articles.map((a) => a.license))}`);
console.log(`Evidence levels: ${tally(articles.map((a) => a.evidenceLevel))}`);
console.log(`Topics: ${tally(articles.map((a) => a.topic))}`);
if (words.length) {
  console.log(`Words per chunk: average ${Math.round(words.reduce((a, b) => a + b, 0) / words.length)}, longest ${Math.max(...words)}`);
}
const missing = articles.filter((a) => !a.license || !a.attribution || !a.title);
console.log(missing.length ? `PROBLEM: ${missing.length} articles lack license or attribution.` : "Every article has a license and an attribution line.");
