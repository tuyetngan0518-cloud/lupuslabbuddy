import { providers } from "../../config/providers.ts";
import type { ChatMessage, LlmProvider, ProviderEnv } from "./types.ts";

// Fallback LLM. Off by default in config/providers.ts.
export function groqLlm(env: ProviderEnv, model: string): LlmProvider {
  return {
    async generate(messages: ChatMessage[], opts = {}) {
      if (!env.GROQ_API_KEY) throw new Error("Groq is not set up: add GROQ_API_KEY.");
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages,
          max_tokens: opts.maxTokens ?? 900,
          temperature: 0.1,
          reasoning_effort: providers.llm.reasoningEffort,
          ...(opts.json ? { response_format: { type: "json_object" } } : {}),
        }),
      });
      if (!res.ok) throw new Error(`Groq returned ${res.status}: ${await res.text()}`);
      const body = (await res.json()) as any;
      const text = body?.choices?.[0]?.message?.content;
      if (typeof text !== "string") throw new Error("Groq reply had no text.");
      env.onUsage?.({
        model,
        inputTokens: Number(body?.usage?.prompt_tokens ?? 0),
        outputTokens: Number(body?.usage?.completion_tokens ?? 0),
      });
      return text;
    },
  };
}
