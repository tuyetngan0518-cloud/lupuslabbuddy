// Ask one question from the command line, to test the answer flow without the web page.
//
//   npm run ask -- "What does complement C3 measure?"
//   npm run ask -- --vi "Bổ thể C3 là gì?"
//   add --trace to see each step
import { ask } from "../src/rag/ask.ts";
import { usageMeter } from "../src/providers/cost.ts";
import { getEmbedder, getLlm } from "../src/providers/index.ts";
import { restStore } from "../src/rag/vector-store.ts";

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith("--")));
const question = args.filter((a) => !a.startsWith("--")).join(" ");
if (!question) throw new Error('Give a question, e.g. npm run ask -- "What is ANA?"');

const meter = usageMeter();
const env = {
  onUsage: meter.onUsage,
  CF_ACCOUNT_ID: process.env.CF_ACCOUNT_ID,
  CF_AI_TOKEN: process.env.CF_AI_TOKEN,
  GROQ_API_KEY: process.env.GROQ_API_KEY,
};
if (!env.CF_ACCOUNT_ID || !env.CF_AI_TOKEN) throw new Error("Fill in the .env file first.");

const result = await ask(
  {
    llm: getLlm(env),
    embedder: getEmbedder(env),
    store: restStore(env.CF_ACCOUNT_ID, env.CF_AI_TOKEN),
    trace: flags.has("--trace") ? (step, detail) => step !== "passages" && console.log(`[${step}]`, detail) : undefined,
  },
  question,
  flags.has("--vi") ? "vi" : "en",
);

if (result.state !== "answer") {
  console.log(result);
} else {
  for (const c of result.claims) {
    console.log(`\n${c.limited ? "(evidence is limited) " : ""}${c.text}`);
    for (const s of c.sources) {
      console.log(`    ${s.authors}, ${s.year}, ${s.license.toUpperCase()} | Evidence level: ${s.evidenceLevel}`);
    }
  }
}

const used = meter.tokens();
console.log(`
Cost: about ${meter.neurons()} neurons (${used.input} tokens in, ${used.output} out).`);
