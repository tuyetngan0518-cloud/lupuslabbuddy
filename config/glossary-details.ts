// The longer explanation shown when a reader selects a term on the Glossary screen.
// Keyed by the term's `id` in glossary.ts. The text itself lives in one file per
// group in the glossary-details folder, so each stays short enough to review.
//
// Rules for every explanation:
// - Say what a term is. Never say what a result means for one person.
// - No numbers for cut-offs or ranges, because ranges differ between laboratories.
// - Medicines: what it is, why it is used, which labs are checked. No doses,
//   no side-effect lists, no advice to start, stop or change a medicine.
// - These are hand-written and not expert reviewed. The page says so.
// DRAFT: Vietnamese wording to be reviewed by the owner.

import { antibodies } from "./glossary-details/antibodies.ts";
import { basics } from "./glossary-details/basics.ts";
import { blood } from "./glossary-details/blood.ts";
import { inflammation } from "./glossary-details/inflammation.ts";
import { kidney } from "./glossary-details/kidney.ts";
import { medicines } from "./glossary-details/medicines.ts";
import { report } from "./glossary-details/report.ts";
import { safety } from "./glossary-details/safety.ts";
import type { TermDetail } from "./glossary-details/types.ts";

export type { Block, BlockKind, TermDetail } from "./glossary-details/types.ts";

export const glossaryDetails: Record<string, TermDetail> = {
  ...basics,
  ...antibodies,
  ...blood,
  ...kidney,
  ...inflammation,
  ...medicines,
  ...safety,
  ...report,
};
