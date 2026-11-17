// Cuts an article's paragraphs into passages ("chunks") small enough to embed
// and search, keeping each passage inside one section.
import type { Paragraph } from "./jats.ts";

export interface Chunk {
  id: string;
  pmcid: string;
  section: string;
  text: string;
  words: number;
}

// Sections that do not help a patient understand a lab test.
const SKIP_SECTION =
  /^(materials?|methods?|patients and methods|study design|statistic|ethic|compliance|funding|conflict|competing|acknowledg|author|abbreviation|supplement|data availab|declaration|consent|disclosure|search strategy|limitations of)/i;

const skipSection = (p: Paragraph) =>
  SKIP_SECTION.test(p.top) || SKIP_SECTION.test(p.section.split(" > ").pop() ?? "");

const countWords = (s: string) => (s ? s.split(" ").length : 0);

function sentences(text: string): string[] {
  return text.split(/(?<=[.!?])\s+(?=[A-Z(\[])/).filter(Boolean);
}

export function chunkArticle(
  pmcid: string,
  paragraphs: Paragraph[],
  opts: { maxWords: number; minWords: number; maxChunks: number },
): Chunk[] {
  // Group neighbouring paragraphs that share a section.
  const groups: { section: string; sentences: string[] }[] = [];
  for (const p of paragraphs) {
    if (skipSection(p)) continue;
    const last = groups[groups.length - 1];
    const parts = sentences(p.text).flatMap((s) => splitLong(s, opts.maxWords));
    if (last && last.section === p.section) last.sentences.push(...parts);
    else groups.push({ section: p.section, sentences: parts });
  }

  const chunks: Chunk[] = [];
  for (const g of groups) {
    const pieces: string[][] = [];
    let current: string[] = [];
    let size = 0;
    for (const s of g.sentences) {
      const w = countWords(s);
      if (size + w > opts.maxWords && current.length) {
        pieces.push(current);
        // Start the next passage with the previous sentence so context carries over.
        const carry = current[current.length - 1];
        current = countWords(carry) <= 50 ? [carry] : [];
        size = current.length ? countWords(carry) : 0;
      }
      current.push(s);
      size += w;
    }
    if (current.length) {
      // A short tail joins the previous passage instead of standing alone.
      if (size < opts.minWords && pieces.length) pieces[pieces.length - 1].push(...current.slice(1));
      else pieces.push(current);
    }
    for (const piece of pieces) {
      const text = piece.join(" ");
      const words = countWords(text);
      if (words < 20) continue;
      if (chunks.length >= opts.maxChunks) return chunks;
      chunks.push({ id: `${pmcid}-${chunks.length + 1}`, pmcid, section: g.section, text, words });
    }
  }
  return chunks;
}

function splitLong(sentence: string, maxWords: number): string[] {
  const words = sentence.split(" ");
  if (words.length <= maxWords) return [sentence];
  const out: string[] = [];
  for (let i = 0; i < words.length; i += maxWords) out.push(words.slice(i, i + maxWords).join(" "));
  return out;
}
