# Lupus Lab Buddy

A web app where a person with lupus (SLE) asks about lab indicators and monitoring and gets an answer in which every claim carries a source and an evidence level. Full approved plan: `C:\Users\MSI\.claude\plans\after-i-approve-plan-mellow-platypus.md`.

## Working with the owner

- The owner has a non-technical background and is learning by doing. Explain each technical choice in one or two plain sentences. Be brief and stay on topic.
- Explain a technical term in one line the first time it appears.
- Ask before adding a new service, account, dependency, or anything that could cost money.

## Scope rules (never break these)

- In scope: what SLE lab tests measure and how to read a lab report in general (ANA, anti-dsDNA, complement C3/C4, CBC, creatinine, urine protein, ESR/CRP, drug-safety labs, follow-up frequency).
- Out of scope, and the UI says so: interpreting a person's own results, diagnosis, treatment advice, other diseases. Not for doctors.
- Every claim in an answer must cite at least one retrieved chunk. Claims without a valid citation are dropped in code.
- Refuse with "Not enough evidence to answer this" when fewer than 2 chunks pass the similarity threshold, or when no cited claim survives.
- Evidence level is set in code from the article's publication type, never by the model.
- The disclaimer is rendered by the page, never by the model. No expert review is claimed anywhere.
- Reference ranges vary by lab. The range bar uses example values only, never a user's results.
- The optional range check runs in the browser only and says "above / below / within the range you typed in", nothing more.
- Question text is not stored.

## Sources and licenses

- Ingest only open-access full text: Europe PMC REST API first, then PMC BioC or the PMC Cloud Service (`pmc-oa-opendata` over HTTPS). The PMC FTP service and `oa.fcgi` were retired in Aug 2026; do not use them.
- Allowed licenses: CC0, CC BY, CC BY-SA, CC BY-NC, CC BY-NC-SA. All "no derivatives" (ND) licenses and non-open-access articles are link-only, never ingested.
- Store for every article: title, authors, journal, year, PMCID, DOI, license, attribution line.
- Hard cap: 6,000 chunks. Request rate to source APIs: 1 to 2 per second.

## Stack

- Cloudflare only: one Worker (TypeScript) serves the static pages and `/api/ask`; Workers AI for the LLM (`gpt-oss-120b`) and embeddings (`bge-base-en-v1.5`, 768 dimensions); Vectorize for the vector index.
- Ingestion runs as a script outside the Worker (locally or in a weekly GitHub Actions job) and also writes `chunks.jsonl` so the index can be rebuilt elsewhere.
- Providers are swappable by config only: `config/providers.ts` plus one adapter file per provider behind `generate()` and `embed()`. Changing the embedding model means re-running ingestion.
- Groq is the fallback LLM, wired but switched off until its data policy is confirmed.
- Free limits change often. Before relying on any limit or data policy, check the provider's official page. Known at 16 Nov 2026: 10,000 neurons per day, 5M stored vector dimensions, 100,000 requests per day, 10 ms CPU per request.
- The neuron allowance does not reliably reset at 00:00 UTC (seen 17 Nov 2026: still blocked an hour after; other users report the same). Never promise users a reset time. Embedding costs about 6,060 neurons per million tokens, so a full library reload uses about 7,500 neurons; a fully answered question uses about 180.
- Prefer providers that do not train on prompts. Keep the demo free; never add a paid plan without asking.

## Answer flow

Scope check, translate Vietnamese to English with the glossary pinned, embed, top 8 chunks, threshold, structured claims with chunk IDs, citation check in code, attach evidence level, translate claims to Vietnamese if the toggle asks for it.

Evidence level tiers: guideline or systematic review; clinical trial; observational study; review or expert opinion.

## Design tokens

| Name | Hex | Use |
|---|---|---|
| Report paper | `#F3F6F8` | page background |
| Sheet | `#FFFFFF` | answer surface |
| Slide ink | `#1F2A44` | body text |
| Graphite | `#55607A` | margin notes, secondary text |
| Butterfly violet | `#6B4FA0` | links, buttons, focus ring, logo only |
| Limit amber | `#8A5A00` on `#F6E7C1` | only "evidence is limited" and refusal |

- Type: Literata for answer text (18px, line height 1.65, max 68 characters per line, set as `--measure: 34rem`, never in `ch`); Be Vietnam Pro for interface, margin notes, labels. Both self-hosted with the Vietnamese subset.
- Vietnamese: headings use line height 1.3 (stacked marks need the room); paragraphs use `text-wrap: pretty` so no short word is left alone on the last line; `public/lang.js` sets the page language and preloads the Vietnamese font files before the page is drawn. The language switch reads "English" and "Tiếng Việt", not codes.
- Layout: left-aligned. Desktop has claims in the main column and each claim's sources in the margin on the same row. Mobile collapses sources under each claim.
- Motion: one moment only, margin notes settling in when an answer arrives. Respect reduced motion. Visible keyboard focus.
- Do not use: pill badges, citation numbers, identical rounded cards, shadows, gradients, all-caps labels, middle-dot meta strings, arrows on buttons, monospace for data.
- Required states: empty, loading, answer, refusal, error (what happened and how to fix it), out of scope.

## Vocabulary (use exactly, in sentence case)

"Sources", "Evidence level", "Ask", "Glossary", "About and limits", "Not enough evidence to answer this".

Vietnamese equivalents (in `public/ui.js`, used the same way everywhere): "Nguồn tham khảo", "Mức độ bằng chứng", "Hỏi" (button) and "Đặt câu hỏi" (menu), "Bảng thuật ngữ", "Giới thiệu và phạm vi", "Chưa đủ bằng chứng để trả lời câu hỏi này".

Vietnamese style: write the way a Vietnamese health writer would, not word for word. Say "bệnh lupus" or "người bệnh lupus", not "trong lupus"; name the thing again instead of opening a sentence with "Nó"; a safety check is "xét nghiệm theo dõi độ an toàn của thuốc", never "xét nghiệm an toàn".

## Glossary

- Terms and one-line definitions live in `config/glossary.ts`; the longer explanations live in `config/glossary-details/`, one file per group. A term's `id` is its page address (`/glossary.html#creatinine`), so never change one.
- Explanations are hand-written, not produced from the article library, and the page and About say so. No expert review is claimed.
- Medicines are labs focus only: what it is, why it is used in lupus, which labs are checked while taking it. No doses, no side-effect lists, no advice to start, stop or change a medicine.
- No numbers for cut-offs or ranges. Sub-headings come from a fixed set in `public/ui.js`.
- Only the glossary pairs a question mentions are pinned into the prompts (`pinnedTerms` in `src/rag/prompts.ts`), to save neurons.

## Commands

- `npm run dev`: run the app locally at http://localhost:8787
- `npm run ingest -- --limit 20`: fetch and chunk a small sample of articles into `data/` (omit the limit for the full run)
- `npm run embed`: embed only passages not yet saved in `data/embeddings.jsonl`, then load them into the Vectorize index (`-- --rebuild` reloads the whole index from the saved file; `-- --save-from-index` copies embeddings from the index into the file). Never delete `data/embeddings.jsonl`: re-creating it costs about 7,500 neurons
- `npm run eval`: run the 40 test runs in `eval/questions.json`; resumable, stops when the allowance runs out (`-- --report` prints saved results without model calls; `-- --fresh` starts over). A full run costs most of a day's allowance, so ask the owner first
- `npm run ask -- "question"`: test the answer flow from the command line (`--vi` for Vietnamese, `--trace` to see each step)
- `npm run typecheck`: check the code for type errors
- `npm run deploy`: publish to Cloudflare (needs `npx wrangler login` once)

Secrets live in `.env` (ignored by git) as `CF_ACCOUNT_ID` and `CF_AI_TOKEN`. They are deliberately not named `CLOUDFLARE_*`, because Cloudflare's own tool would then use this narrow token for publishing and fail. Never print or commit them.

## Build order

1. Project skeleton and provider config
2. Ingest script (20 articles, then full run)
3. Answer flow with guardrails
4. UI: tokens, Answer screen, other screens and states
5. Glossary (about 80 terms in 8 groups, EN and VI, each with a longer explanation)
6. Eval run, fixes, deploy, weekly refresh job
