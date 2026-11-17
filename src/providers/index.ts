import { providers, type LlmProviderName } from "../../config/providers.ts";
import { groqLlm } from "./groq.ts";
import type { ChatMessage, EmbeddingProvider, LlmProvider, ProviderEnv } from "./types.ts";
import { workersAiEmbedding, workersAiLlm } from "./workers-ai.ts";

function buildLlm(env: ProviderEnv, name: LlmProviderName, model: string): LlmProvider {
  switch (name) {
    case "workers-ai":
      return workersAiLlm(env, model);
    case "groq":
      return groqLlm(env, model);
  }
}

/** The LLM named in config, with the fallback tried once if it is switched on. */
export function getLlm(env: ProviderEnv): LlmProvider {
  const main = buildLlm(env, providers.llm.provider, providers.llm.model);
  if (!providers.llmFallback.enabled) return main;

  const fallback = buildLlm(env, providers.llmFallback.provider, providers.llmFallback.model);
  return {
    async generate(messages: ChatMessage[], opts) {
      try {
        return await main.generate(messages, opts);
      } catch {
        return fallback.generate(messages, opts);
      }
    },
  };
}

/** The embedding model named in config. */
export function getEmbedder(env: ProviderEnv): EmbeddingProvider {
  switch (providers.embedding.provider) {
    case "workers-ai":
      return workersAiEmbedding(env, providers.embedding.model);
  }
}
