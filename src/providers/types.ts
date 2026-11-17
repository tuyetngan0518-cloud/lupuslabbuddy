// The two jobs the app needs from an AI service. Every provider adapter
// implements these, which is what makes providers swappable by config.

export interface ChatMessage {
  role: "system" | "user";
  content: string;
}

export interface LlmProvider {
  /** Write text in reply to the messages. `json: true` asks for a JSON reply. */
  generate(messages: ChatMessage[], opts?: { json?: boolean; maxTokens?: number }): Promise<string>;
}

export interface EmbeddingProvider {
  /** Turn each text into a list of numbers (one list per text, in the same order). */
  embed(texts: string[]): Promise<number[][]>;
}

/** Token counts for one model call, as reported by the service. */
export interface Usage {
  model: string;
  inputTokens: number;
  outputTokens: number;
}

/** What a provider needs from its surroundings (the Worker, or the ingest script). */
export interface ProviderEnv {
  /** Workers AI binding, available inside the Worker. */
  AI?: { run(model: string, input: unknown): Promise<unknown> };
  /** For calling Workers AI from outside a Worker (the ingest script). */
  CF_ACCOUNT_ID?: string;
  CF_AI_TOKEN?: string;
  GROQ_API_KEY?: string;
  /** Optional: told about each call's token counts, so cost can be logged. Numbers only. */
  onUsage?: (usage: Usage) => void;
}
