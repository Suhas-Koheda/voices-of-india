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

export type Place = {
  name: string;
  description: string;
};

export type Region = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  language: string;
  languageFamily: string;
  capital: string;
  cities: Place[];
  geography: string;
  history: string;
  food: Place[];
  landmarks: Place[];
  traditions: string;
  phrases: Phrase[];
  expressions: Expression[];
  songs: Song[];
  relatedSlugs?: string[];
};

export type SearchResult = {
  type: "state" | "language" | "city" | "phrase" | "expression";
  regionSlug: string;
  regionName: string;
  label: string;
  sublabel?: string;
};
