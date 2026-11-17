// The one place that decides which AI services the app uses.
// To switch provider or model, change the values here. No other file needs editing.
// Changing the embedding model means re-running ingestion, because numbers
// from different embedding models cannot be compared with each other.

export type LlmProviderName = "workers-ai" | "groq";
export type EmbeddingProviderName = "workers-ai";

export const providers = {
  llm: {
    provider: "workers-ai" as LlmProviderName,
    model: "@cf/openai/gpt-oss-120b",
    // How hard the model "thinks" before answering. Thinking is billed as output, so low is cheaper.
    reasoningEffort: "low" as "low" | "medium" | "high",
    // Cloudflare's price for this model, in neurons per million tokens (checked 16 Nov 2026).
    neuronsPerMillion: { input: 31818, output: 68182 },
  },
  // Used only if the main LLM fails and `enabled` is true.
  // Stays off until Groq's data policy is confirmed on its official page.
  llmFallback: {
    enabled: false,
    provider: "groq" as LlmProviderName,
    model: "openai/gpt-oss-120b",
  },
  embedding: {
    provider: "workers-ai" as EmbeddingProviderName,
    model: "@cf/baai/bge-base-en-v1.5",
    dimensions: 768,
    // Measured on 16 Nov 2026: 1.46M tokens cost 8,850 neurons.
    neuronsPerMillion: 6060,
  },
  retrieval: {
    topK: 8, // how many passages to fetch per question
    maxPerArticle: 3, // at most this many passages from one article
    minScore: 0.7, // similarity threshold, set from the 17 Nov 2026 eval: good answers used passages scoring 0.73 or more; uncovered questions topped out at 0.61 to 0.72
    minChunks: 2, // fewer passing passages than this means we refuse
    maxChunks: 6000, // hard cap so the index stays inside the free tier
  },
} as const;
