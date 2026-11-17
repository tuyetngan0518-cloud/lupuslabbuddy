// Search over the stored passages. Two ways in: the built-in binding inside
// the Worker, and Cloudflare's web API for scripts run on a PC.

export interface PassageMeta {
  text: string;
  section: string;
  pmcid: string;
  title: string;
  authors: string;
  year: string;
  journal: string;
  license: string;
  url: string;
  evidenceLevel: string;
}

export interface Match {
  id: string;
  score: number;
  metadata: PassageMeta;
}

export interface VectorStore {
  query(vector: number[], topK: number): Promise<Match[]>;
}

export const INDEX_NAME = "lupus-chunks";

/** Inside the Worker. `index` is the Vectorize binding. */
export function bindingStore(index: {
  query(vector: number[], opts: object): Promise<{ matches: any[] }>;
}): VectorStore {
  return {
    async query(vector, topK) {
      const res = await index.query(vector, { topK, returnMetadata: "all" });
      return res.matches.map((m) => ({ id: m.id, score: m.score, metadata: m.metadata as PassageMeta }));
    },
  };
}

/** From a script, using an account token. */
export function restStore(accountId: string, token: string): VectorStore {
  return {
    async query(vector, topK) {
      const res = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${accountId}/vectorize/v2/indexes/${INDEX_NAME}/query`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify({ vector, topK, returnMetadata: "all" }),
        },
      );
      if (!res.ok) throw new Error(`Vectorize search failed (${res.status}): ${await res.text()}`);
      const body = (await res.json()) as { result: { matches: any[] } };
      return body.result.matches.map((m) => ({ id: m.id, score: m.score, metadata: m.metadata as PassageMeta }));
    },
  };
}
