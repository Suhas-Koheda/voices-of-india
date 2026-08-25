import { regions } from "@/data/regions";
import type { Region, SearchResult } from "@/types/region";

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getAllRegions(): Region[] {
  return regions;
}

export function getAllSlugs(): string[] {
  return regions.map((r) => r.slug);
}

export function searchAll(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const region of regions) {
    // Match state name
    if (region.name.toLowerCase().includes(q)) {
      results.push({
        type: "state",
        regionSlug: region.slug,
        regionName: region.name,
        label: region.name,
        sublabel: region.language,
      });
    }

    // Match language
    if (region.language.toLowerCase().includes(q)) {
      results.push({
        type: "language",
        regionSlug: region.slug,
        regionName: region.name,
        label: region.language,
        sublabel: `Language of ${region.name}`,
      });
    }

    // Match cities
    for (const city of region.cities) {
      if (city.toLowerCase().includes(q)) {
        results.push({
          type: "city",
          regionSlug: region.slug,
          regionName: region.name,
          label: city,
          sublabel: region.name,
        });
      }
    }

    // Match phrases
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

    // Match expressions
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

  // Deduplicate by type+label
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
