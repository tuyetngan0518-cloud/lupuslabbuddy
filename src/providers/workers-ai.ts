import { providers } from "../../config/providers.ts";
import type { ChatMessage, EmbeddingProvider, LlmProvider, ProviderEnv } from "./types.ts";

// Runs a Workers AI model. Inside the Worker it uses the built-in binding;
// from the ingest script it calls Cloudflare's web API with an account token.
async function run(env: ProviderEnv, model: string, input: unknown): Promise<any> {
  // A token in the environment (scripts and local testing) wins; the published app has none and uses the binding.
  if (!env.CF_ACCOUNT_ID || !env.CF_AI_TOKEN) {
    if (env.AI) return env.AI.run(model, input);
    throw new Error("Workers AI is not set up: add CF_ACCOUNT_ID and CF_AI_TOKEN.");
  }
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/ai/run/${model}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.CF_AI_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    },
  );
  if (!res.ok) throw new Error(`Workers AI returned ${res.status}: ${await res.text()}`);
  const body = (await res.json()) as { result: unknown };
  return body.result;
}

// Models answer in slightly different shapes; this pulls the text out of each known one.
function extractText(out: any): string {
  if (typeof out?.response === "string") return out.response;
  if (typeof out?.output_text === "string") return out.output_text;
  const chat = out?.choices?.[0]?.message?.content;
  if (typeof chat === "string") return chat;
  if (Array.isArray(out?.output)) {
    const parts = out.output
      .flatMap((item: any) => item?.content ?? [])
      .map((c: any) => c?.text)
      .filter((t: unknown) => typeof t === "string");
    if (parts.length) return parts.join("");
  }
  throw new Error("Workers AI reply had no text in a shape this app knows.");
}

// Passes the token counts to whoever is measuring cost. Different models name the fields differently.
function report(env: ProviderEnv, model: string, out: any): void {
  const u = out?.usage;
  if (!env.onUsage || !u) return;
  env.onUsage({
    model,
    inputTokens: Number(u.prompt_tokens ?? u.input_tokens ?? u.total_tokens ?? 0),
    outputTokens: Number(u.completion_tokens ?? u.output_tokens ?? 0),
  });
}

export function workersAiLlm(env: ProviderEnv, model: string): LlmProvider {
  return {
    async generate(messages: ChatMessage[], opts = {}) {
      const out = await run(env, model, {
        messages,
        max_tokens: opts.maxTokens ?? 900,
        temperature: 0.1,
        ...(opts.json ? { response_format: { type: "json_object" } } : {}),
        ...(model === providers.llm.model ? { reasoning_effort: providers.llm.reasoningEffort } : {}),
      });
      report(env, model, out);
      return extractText(out);
    },
  };
}

export function workersAiEmbedding(env: ProviderEnv, model: string): EmbeddingProvider {
  return {
    async embed(texts: string[]) {
      const out = await run(env, model, { text: texts });
      if (!Array.isArray(out?.data)) throw new Error("Workers AI embedding reply had no data.");
      report(env, model, out);
      return out.data as number[][];
    },
  };
}
