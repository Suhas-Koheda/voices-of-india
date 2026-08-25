export type Phrase = {
  id: string;
  text: string;
  transliteration?: string;
  meaning: string;
  audio?: string;
};

export type Expression = {
  id: string;
  text: string;
  meaning: string;
  context: string;
  audio?: string;
};

export type Song = {
  id: string;
  title: string;
  description: string;
  audio?: string;
};

export type CulturalNote = {
  id: string;
  title: string;
  content: string;
};

export type Region = {
  id: string;
  name: string;
  slug: string;
  language: string;
  languageFamily: string;
  description: string;
  capital: string;
  cities: string[];
  phrases: Phrase[];
  expressions: Expression[];
  songs: Song[];
  culturalNotes: CulturalNote[];
  relatedSlugs?: string[];
};

export type SearchResult = {
  type: "state" | "language" | "phrase" | "city" | "expression";
  regionSlug: string;
  regionName: string;
  label: string;
  sublabel?: string;
};
