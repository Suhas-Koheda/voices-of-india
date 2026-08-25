import { regions } from "@/data/regions";
import type { Region, SearchResult } from "@/types/region";

const ALL_STATES: Record<string, { name: string; language: string; capital: string }> = {
  "andhra-pradesh": { name: "Andhra Pradesh", language: "Telugu", capital: "Amaravati" },
  "telangana": { name: "Telangana", language: "Telugu", capital: "Hyderabad" },
  "tamil-nadu": { name: "Tamil Nadu", language: "Tamil", capital: "Chennai" },
  "karnataka": { name: "Karnataka", language: "Kannada", capital: "Bengaluru" },
  "kerala": { name: "Kerala", language: "Malayalam", capital: "Thiruvananthapuram" },
  "maharashtra": { name: "Maharashtra", language: "Marathi", capital: "Mumbai" },
  "west-bengal": { name: "West Bengal", language: "Bengali", capital: "Kolkata" },
  "punjab": { name: "Punjab", language: "Punjabi", capital: "Chandigarh" },
  "rajasthan": { name: "Rajasthan", language: "Rajasthani", capital: "Jaipur" },
  "gujarat": { name: "Gujarat", language: "Gujarati", capital: "Gandhinagar" },
  "arunachal-pradesh": { name: "Arunachal Pradesh", language: "Various", capital: "Itanagar" },
  "assam": { name: "Assam", language: "Assamese", capital: "Dispur" },
  "bihar": { name: "Bihar", language: "Hindi", capital: "Patna" },
  "chhattisgarh": { name: "Chhattisgarh", language: "Hindi", capital: "Raipur" },
  "goa": { name: "Goa", language: "Konkani", capital: "Panaji" },
  "haryana": { name: "Haryana", language: "Hindi", capital: "Chandigarh" },
  "himachal-pradesh": { name: "Himachal Pradesh", language: "Hindi", capital: "Shimla" },
  "jammu-and-kashmir": { name: "Jammu and Kashmir", language: "Kashmiri", capital: "Srinagar" },
  "jharkhand": { name: "Jharkhand", language: "Hindi", capital: "Ranchi" },
  "ladakh": { name: "Ladakh", language: "Ladakhi", capital: "Leh" },
  "madhya-pradesh": { name: "Madhya Pradesh", language: "Hindi", capital: "Bhopal" },
  "manipur": { name: "Manipur", language: "Meitei", capital: "Imphal" },
  "meghalaya": { name: "Meghalaya", language: "Khasi", capital: "Shillong" },
  "mizoram": { name: "Mizoram", language: "Mizo", capital: "Aizawl" },
  "nagaland": { name: "Nagaland", language: "Naga", capital: "Kohima" },
  "odisha": { name: "Odisha", language: "Odia", capital: "Bhubaneswar" },
  "sikkim": { name: "Sikkim", language: "Nepali", capital: "Gangtok" },
  "tripura": { name: "Tripura", language: "Bengali", capital: "Agartala" },
  "uttar-pradesh": { name: "Uttar Pradesh", language: "Hindi", capital: "Lucknow" },
  "uttarakhand": { name: "Uttarakhand", language: "Hindi", capital: "Dehradun" },
  "delhi": { name: "Delhi", language: "Hindi", capital: "New Delhi" },
};

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getAllRegions(): Region[] {
  return regions;
}

export function getAllSlugs(): string[] {
  return regions.map((r) => r.slug);
}

export function getAllStateSlugs(): string[] {
  return Object.keys(ALL_STATES);
}

export function getStateInfo(slug: string) {
  return ALL_STATES[slug];
}

export function searchAll(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];

  // Search all states (full data + placeholder)
  for (const [slug, state] of Object.entries(ALL_STATES)) {
    if (state.name.toLowerCase().includes(q)) {
      results.push({
        type: "state",
        regionSlug: slug,
        regionName: state.name,
        label: state.name,
        sublabel: state.language,
      });
    }
  }

  // Search languages
  for (const region of regions) {
    if (region.language.toLowerCase().includes(q)) {
      results.push({
        type: "language",
        regionSlug: region.slug,
        regionName: region.name,
        label: region.language,
        sublabel: `Language of ${region.name}`,
      });
    }
  }

  // Search cities (only for full-data regions)
  for (const region of regions) {
    for (const city of region.cities) {
      if (city.name.toLowerCase().includes(q)) {
        results.push({
          type: "city",
          regionSlug: region.slug,
          regionName: region.name,
          label: city.name,
          sublabel: region.name,
        });
      }
    }
  }

  // Search phrases
  for (const region of regions) {
    for (const phrase of region.phrases) {
      if (
        phrase.text.toLowerCase().includes(q) ||
        phrase.meaning.toLowerCase().includes(q) ||
        (phrase.transliteration && phrase.transliteration.toLowerCase().includes(q))
      ) {
        results.push({
          type: "phrase",
          regionSlug: region.slug,
          regionName: region.name,
          label: phrase.text,
          sublabel: phrase.meaning,
        });
      }
    }
  }

  // Search expressions
  for (const region of regions) {
    for (const expr of region.expressions) {
      if (
        expr.text.toLowerCase().includes(q) ||
        expr.meaning.toLowerCase().includes(q)
      ) {
        results.push({
          type: "expression",
          regionSlug: region.slug,
          regionName: region.name,
          label: expr.text,
          sublabel: expr.meaning,
        });
      }
    }
  }

  // Deduplicate
  const seen = new Set<string>();
  return results.filter((r) => {
    const key = `${r.type}-${r.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function getLanguageGroups() {
  const langMap = new Map<string, Region[]>();
  for (const region of regions) {
    const existing = langMap.get(region.language) || [];
    existing.push(region);
    langMap.set(region.language, existing);
  }
  return Array.from(langMap.entries()).map(([language, regions]) => ({
    language,
    regions,
    languageFamily: regions[0].languageFamily,
  }));
}
