// What the ingest script looks for. Each topic is one area of lab testing in lupus.
// `terms` must appear in the article title, alongside "lupus" or "SLE".
// To widen or narrow the library, edit the terms or the quotas here.

export interface Topic {
  id: string;
  label: string;
  terms: string[];
}

export const topics: Topic[] = [
  {
    id: "monitoring",
    label: "Monitoring and follow-up",
    terms: ["monitoring", "recommendations", "guideline", "guidelines", "management", "treat-to-target", "follow-up"],
  },
  {
    id: "ana",
    label: "ANA",
    terms: ["antinuclear antibody", "antinuclear antibodies", "ANA", "autoantibodies", "autoantibody"],
  },
  {
    id: "dsdna",
    label: "Anti-dsDNA",
    terms: ["anti-dsDNA", "anti-double-stranded DNA", "anti-DNA", "dsDNA"],
  },
  {
    id: "complement",
    label: "Complement C3 and C4",
    terms: ["complement", "C3", "C4", "hypocomplementemia"],
  },
  {
    id: "cbc",
    label: "Blood count (CBC)",
    terms: ["cytopenia", "leukopenia", "lymphopenia", "neutropenia", "thrombocytopenia", "anemia", "anaemia", "hematological", "haematological"],
  },
  {
    id: "kidney",
    label: "Creatinine and urine protein",
    terms: ["proteinuria", "creatinine", "urinary", "urine", "renal function", "nephritis"],
  },
  {
    id: "inflammation",
    label: "ESR and CRP",
    terms: ["C-reactive protein", "CRP", "erythrocyte sedimentation rate", "ESR", "inflammatory markers"],
  },
  {
    id: "drug-safety",
    label: "Drug-safety labs",
    terms: ["hydroxychloroquine", "methotrexate", "azathioprine", "mycophenolate", "cyclophosphamide", "glucocorticoid", "glucocorticoids", "drug monitoring", "toxicity"],
  },
  {
    id: "biomarkers",
    label: "Biomarkers and disease activity",
    terms: ["biomarker", "biomarkers", "disease activity", "flare", "laboratory"],
  },
];

export const ingestSettings = {
  // Per topic: how many summary-type articles (guidelines, reviews) and how many original studies.
  summaryArticlesPerTopic: 12,
  studyArticlesPerTopic: 5,
  fromYear: 2012,
  // Articles with these words in the title are about disease mechanisms or other
  // organs, not about reading lab tests, so they are left out.
  excludeTitleTerms: [
    "mice", "mouse", "murine", "rats", "canine", "pathogenesis", "mechanism", "mechanisms",
    "neuropsychiatric", "microarray", "B cell", "B cells", "T cell", "T cells", "genetic",
    "genetics", "MHC", "cutaneous", "microbiome", "COVID-19",
    "belimumab", "rituximab", "anifrolumab", "atacicept", "voclosporin", "trial", "therapy", "therapies",
    "therapeutic", "toll-like", "interleukin", "cytokine", "cytokines", "chemokines", "interferon", "IFN-I",
    "IL-17", "IL-37", "lncRNA", "variant", "variants", "admixture", "microbiota", "inflammasome", "mimicry",
    "histone", "DNASE1L3", "polymorphism", "polymorphisms", "gene", "genes", "expression", "pregnancy",
    "pregnancies", "osteonecrosis", "atherosclerosis", "cognitive", "social determinants", "quality of life",
  ],
  maxChunksPerArticle: 45,
  maxWordsPerChunk: 240, // keeps each passage inside the embedding model's 512-token window
  minWordsPerChunk: 40,
  requestDelayMs: 600, // stay under 2 requests per second
  // Licenses we may copy and translate. "No derivatives" (ND) licenses are link-only.
  allowedLicenses: ["cc0", "cc by", "cc by-sa", "cc by-nc", "cc by-nc-sa"],
};
