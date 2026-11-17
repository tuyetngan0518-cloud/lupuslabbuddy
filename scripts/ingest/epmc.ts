// Talks to Europe PMC, the free library of open-access medical papers.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { ingestSettings, type Topic } from "../../config/topics.ts";

const BASE = "https://www.ebi.ac.uk/europepmc/webservices/rest";

export interface EpmcResult {
  pmcid?: string;
  title?: string;
  authorString?: string;
  pubYear?: string;
  doi?: string;
  license?: string;
  isOpenAccess?: string;
  journalInfo?: { journal?: { title?: string } };
  pubTypeList?: { pubType?: string[] };
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
let lastRequest = 0;

async function politeFetch(url: string): Promise<Response> {
  const wait = lastRequest + ingestSettings.requestDelayMs - Date.now();
  if (wait > 0) await sleep(wait);
  for (let attempt = 1; ; attempt++) {
    lastRequest = Date.now();
    const res = await fetch(url, { headers: { "User-Agent": "sle-lab-education-demo/0.1" } });
    if (res.status !== 429 && res.status < 500) return res;
    if (attempt === 3) return res;
    await sleep(3000 * attempt);
  }
}

const SUMMARY_TYPES = ["Review", "Systematic Review", "Meta-Analysis", "Practice Guideline", "Guideline"];

/** Builds the search text for one topic. `summary` = guidelines and reviews only. */
export function buildQuery(topic: Topic, summary: boolean): string {
  const terms = topic.terms.map((t) => `TITLE:"${t}"`).join(" OR ");
  const types = SUMMARY_TYPES.map((t) => `PUB_TYPE:"${t}"`).join(" OR ");
  return [
    `(TITLE:"lupus" OR TITLE:"SLE")`,
    `(${terms})`,
    `OPEN_ACCESS:Y`,
    `HAS_FT:Y`,
    `LANG:eng`,
    `PUB_YEAR:[${ingestSettings.fromYear} TO 2100]`,
    summary ? `(${types})` : `NOT (${types})`,
  ].join(" AND ")
    + ` NOT PUB_TYPE:"Case Reports"`
    + ingestSettings.excludeTitleTerms.map((t) => ` NOT TITLE:"${t}"`).join("");
}

/** One page of search results, most-cited first. */
export async function search(query: string, pageSize: number): Promise<EpmcResult[]> {
  const url =
    `${BASE}/search?query=${encodeURIComponent(query)}` +
    `&format=json&resultType=core&pageSize=${pageSize}&sort=${encodeURIComponent("CITED desc")}`;
  const res = await politeFetch(url);
  if (!res.ok) throw new Error(`Europe PMC search failed (${res.status}).`);
  const body = (await res.json()) as { resultList?: { result?: EpmcResult[] } };
  return body.resultList?.result ?? [];
}

/** Full text of one article as XML. Saved to disk so re-runs do not download it again. */
export async function fetchFullText(pmcid: string, cacheDir: string): Promise<string | null> {
  mkdirSync(cacheDir, { recursive: true });
  const file = `${cacheDir}/${pmcid}.xml`;
  if (existsSync(file)) return readFileSync(file, "utf8");
  const res = await politeFetch(`${BASE}/${pmcid}/fullTextXML`);
  if (!res.ok) return null;
  const xml = await res.text();
  writeFileSync(file, xml);
  return xml;
}
