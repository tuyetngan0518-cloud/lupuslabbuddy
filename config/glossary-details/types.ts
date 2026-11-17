// The sub-headings an explanation may use. The words shown for each one live in
// public/ui.js, so the text cannot invent headings of its own.
//   what   = "What it is" ("What it means" for general ideas)
//   why    = "Why it is checked in lupus" ("Why it is used in lupus" for medicines)
//   report = "On a lab report"
//   labs   = "Labs checked while taking it" (medicines only)
//   know   = "Good to know"
export type BlockKind = "what" | "why" | "report" | "labs" | "know";

/** One sub-heading and the paragraph under it. */
export type Block = [BlockKind, string];

export interface TermDetail {
  en: Block[];
  vi: Block[];
}
