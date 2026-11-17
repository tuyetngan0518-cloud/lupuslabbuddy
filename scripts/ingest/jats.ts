// Reads an article's XML (the "JATS" format journals use) and pulls out
// the paragraphs of running text, each tagged with the section it came from.

export interface Paragraph {
  /** Top-level section, e.g. "Results". */
  top: string;
  /** Full label, e.g. "Results > Antibody profiles". */
  section: string;
  text: string;
}

// Content inside these is not prose (tables, figures, formulas, reference lists).
const SKIP = new Set([
  "table-wrap", "table-wrap-foot", "fig", "fig-group", "supplementary-material", "ref-list",
  "fn-group", "ack", "disp-formula", "inline-formula", "tex-math", "mml:math", "media", "graphic",
]);

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

function decode(s: string): string {
  return s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e: string) => {
    if (e[0] === "#") {
      const code = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    return ENTITIES[e] ?? m;
  });
}

function tidy(s: string): string {
  return s
    .replace(/\[[\s,;–-]*\]/g, "") // empty [ ] left behind by removed citation numbers
    .replace(/\([\s,;–-]*\)/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:])/g, "$1")
    .replace(/([.,;:])[,;–-]+(?=\s|$)/g, "$1") // "SLE., Its" -> "SLE. Its"
    .trim();
}

const cleanTitle = (s: string) => tidy(s).replace(/^\d+(\.\d+)*\.?\s+/, "").replace(/[.:]$/, "");

export function extractParagraphs(xml: string): Paragraph[] {
  const out: Paragraph[] = [];
  const tokens = xml.match(/<!--[\s\S]*?-->|<\?[\s\S]*?\?>|<!\[CDATA\[[\s\S]*?\]\]>|<[^>]+>|[^<]+/g) ?? [];

  const stack: { name: string; skips: boolean }[] = [];
  const secTitles: string[] = [];
  let region = 0; // > 0 while inside <body> or the first <abstract>
  let skip = 0; // > 0 while inside a skipped element
  let pDepth = 0;
  let buf = "";
  let titleBuf: string | null = null;
  let abstractSeen = false;
  let skippingAbstract = 0;

  for (const tok of tokens) {
    if (tok[0] !== "<") {
      if (region && !skip) {
        if (titleBuf !== null) titleBuf += decode(tok);
        else if (pDepth) buf += decode(tok);
      }
      continue;
    }
    if (tok[1] === "!" || tok[1] === "?") continue;

    const closing = tok[1] === "/";
    const name = (tok.match(/^<\/?([^\s/>]+)/)?.[1] ?? "").toLowerCase();
    const selfClosing = tok.endsWith("/>");

    if (!closing) {
      if (selfClosing) continue;
      const parent = stack[stack.length - 1]?.name;
      const entry = { name, skips: false };
      stack.push(entry);

      if (name === "abstract") {
        if (abstractSeen) skippingAbstract++;
        else {
          abstractSeen = true;
          region++;
          secTitles.push("Abstract");
        }
      } else if (name === "body") region++;

      if (!region) continue;
      if (SKIP.has(name) || (name === "xref" && /ref-type="bibr"/.test(tok))) {
        entry.skips = true;
        skip++;
      }
      else if (skip) continue;
      else if (name === "sec") secTitles.push("");
      else if (name === "title" && parent === "sec" && !pDepth) titleBuf = "";
      else if (name === "p") pDepth++;
    } else {
      // Close tags until we find the matching one (tolerates sloppy XML).
      let endedSkip = false;
      while (stack.length) {
        const popped = stack.pop()!;
        if (popped.skips) {
          skip--;
          endedSkip = true;
        }
        if (popped.name === name) break;
      }

      if (name === "abstract") {
        if (skippingAbstract) skippingAbstract--;
        else {
          region--;
          secTitles.pop();
        }
        continue;
      }
      if (name === "body") {
        region--;
        continue;
      }
      if (!region) continue;

      if (endedSkip || skip) continue;
      else if (name === "sec") secTitles.pop();
      else if (name === "title" && titleBuf !== null) {
        secTitles[secTitles.length - 1] = cleanTitle(titleBuf);
        titleBuf = null;
      } else if (name === "p" && pDepth) {
        pDepth--;
        if (pDepth === 0) {
          const text = tidy(buf);
          buf = "";
          if (text.split(" ").length >= 5) {
            const titles = secTitles.filter(Boolean);
            const top = titles[0] ?? "Main text";
            const last = titles[titles.length - 1];
            out.push({ top, section: last && last !== top ? `${top} > ${last}` : top, text });
          }
        } else buf += " ";
      }
    }
  }
  return out;
}
