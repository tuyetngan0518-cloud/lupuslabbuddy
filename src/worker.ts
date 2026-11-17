import { glossary, glossaryGroups } from "../config/glossary.ts";
import { glossaryDetails } from "../config/glossary-details.ts";
import { providers } from "../config/providers.ts";
import { usageMeter } from "./providers/cost.ts";
import { getEmbedder, getLlm } from "./providers/index.ts";
import type { ProviderEnv } from "./providers/types.ts";
import { ask, type Lang } from "./rag/ask.ts";
import { bindingStore, restStore, type VectorStore } from "./rag/vector-store.ts";

interface Env extends ProviderEnv {
  ASSETS: Fetcher;
  VECTORIZE?: Parameters<typeof bindingStore>[0];
  /** Storage for feedback. Added when the app is published. */
  FEEDBACK?: KVNamespace;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}

// What the Glossary screen loads: every term with its longer explanation attached.
const glossaryPayload = JSON.stringify({
  groups: glossaryGroups,
  terms: glossary.map((term) => ({ ...term, more: glossaryDetails[term.id] ?? null })),
});

// Errors are reported as a code; the page turns the code into words in the reader's language.
const error = (code: string, status: number) => json({ state: "error", code }, status);

async function handleAsk(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") return error("bad_request", 405);
  // Local testing uses the token from .env; the published app uses the built-in bindings.
  let store: VectorStore;
  if (env.CF_ACCOUNT_ID && env.CF_AI_TOKEN) store = restStore(env.CF_ACCOUNT_ID, env.CF_AI_TOKEN);
  else if (env.AI && env.VECTORIZE) store = bindingStore(env.VECTORIZE);
  else return error("not_configured", 503);

  let body: { question?: unknown; lang?: unknown };
  try {
    body = await request.json();
  } catch {
    return error("bad_request", 400);
  }
  const question = typeof body.question === "string" ? body.question.trim() : "";
  if (question.length < 3) return error("empty_question", 400);
  if (question.length > 500) return error("question_too_long", 400);
  const lang: Lang = body.lang === "vi" ? "vi" : "en";

  const meter = usageMeter();
  const metered = { ...env, onUsage: meter.onUsage };
  try {
    const result = await ask(
      { llm: getLlm(metered), embedder: getEmbedder(metered), store },
      question,
      lang,
    );
    // Cost log: numbers and outcome only, never the question or the answer.
    console.log(`ask: ${result.state}, about ${meter.neurons()} neurons`, meter.tokens());
    return json(result);
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    // Only the error text is logged, never the question.
    console.error("ask failed:", message);
    // Workers AI reports the used-up free daily allowance with code 4006 or status 429.
    if (/4006|429|daily|neurons|quota|capacity/i.test(message)) return error("daily_limit", 429);
    return error("service_problem", 502);
  }
}

const KINDS = ["wrong", "source", "unclear", "other"];

// Stores a thumbs up/down or a short comment. Never the question or the answer.
async function handleFeedback(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") return error("bad_request", 405);
  if (!env.FEEDBACK) return error("not_configured", 503);
  let body: { helpful?: unknown; kind?: unknown; comment?: unknown };
  try {
    body = await request.json();
  } catch {
    return error("bad_request", 400);
  }
  const record = {
    at: new Date().toISOString(),
    helpful: typeof body.helpful === "boolean" ? body.helpful : null,
    kind: typeof body.kind === "string" && KINDS.includes(body.kind) ? body.kind : null,
    comment: typeof body.comment === "string" ? body.comment.trim().slice(0, 1000) : "",
  };
  if (record.helpful === null && !record.kind && !record.comment) return error("bad_request", 400);
  await env.FEEDBACK.put(`fb:${record.at}:${crypto.randomUUID().slice(0, 8)}`, JSON.stringify(record));
  return json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return json({
        ok: true,
        llm: providers.llm.model,
        embedding: providers.embedding.model,
        aiConnected: Boolean(env.AI),
        indexConnected: Boolean(env.VECTORIZE),
      });
    }
    if (url.pathname === "/api/ask") return handleAsk(request, env);
    if (url.pathname === "/api/feedback") return handleFeedback(request, env);
    if (url.pathname === "/api/glossary") {
      return new Response(glossaryPayload, {
        headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=3600" },
      });
    }
    if (url.pathname.startsWith("/api/")) return error("not_found", 404);

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
