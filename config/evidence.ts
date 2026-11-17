// Evidence level: a plain label for what kind of study a source is.
// It is set from the article's publication type, never by the AI model.
// It describes study design only. It is not a quality grade.

export const evidenceLevels = [
  "guideline or systematic review",
  "clinical trial",
  "observational study",
  "review or expert opinion",
] as const;

export type EvidenceLevel = (typeof evidenceLevels)[number];

export function evidenceLevelFor(pubTypes: string[], title: string): EvidenceLevel {
  const types = pubTypes.join("|").toLowerCase();
  if (
    /guideline|systematic review|meta-analysis|consensus development/.test(types) ||
    /\b(guidelines?|recommendations|systematic review|meta-analysis|consensus statement)\b/i.test(title)
  ) {
    return "guideline or systematic review";
  }
  if (/clinical trial|randomized controlled trial/.test(types)) return "clinical trial";
  if (/review|editorial|comment|letter|case report/.test(types)) return "review or expert opinion";
  return "observational study";
}
