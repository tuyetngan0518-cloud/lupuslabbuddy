// Works out what a model call cost in neurons (Cloudflare's usage unit),
// from the token counts the service reports and the rates in config/providers.ts.
import { providers } from "../../config/providers.ts";
import type { Usage } from "./types.ts";

export function neuronsFor(u: Usage): number {
  if (u.model === providers.llm.model) {
    const r = providers.llm.neuronsPerMillion;
    return (u.inputTokens * r.input + u.outputTokens * r.output) / 1e6;
  }
  if (u.model === providers.embedding.model) {
    return (u.inputTokens * providers.embedding.neuronsPerMillion) / 1e6;
  }
  return 0; // other providers (e.g. Groq) do not use neurons
}

/** Collects usage across the calls of one question. */
export function usageMeter() {
  const calls: Usage[] = [];
  return {
    onUsage: (u: Usage) => void calls.push(u),
    neurons: () => Math.round(calls.reduce((sum, u) => sum + neuronsFor(u), 0)),
    tokens: () => ({
      input: calls.reduce((s, u) => s + u.inputTokens, 0),
      output: calls.reduce((s, u) => s + u.outputTokens, 0),
    }),
  };
}
