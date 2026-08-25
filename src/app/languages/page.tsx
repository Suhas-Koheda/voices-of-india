import type { Metadata } from "next";
import { getAllRegions } from "@/lib/region-utils";
import LanguageCard from "@/components/ui/LanguageCard";

export const metadata: Metadata = {
  title: "Languages",
  description:
    "Browse the diverse languages of India, from Dravidian to Indo-Aryan language families.",
};

export default function LanguagesPage() {
  const regions = getAllRegions();

  // Group by unique language
  const languageMap = new Map<
    string,
    { language: string; languageFamily: string; regions: typeof regions }
  >();
  for (const region of regions) {
    const existing = languageMap.get(region.language);
    if (existing) {
      existing.regions.push(region);
    } else {
      languageMap.set(region.language, {
        language: region.language,
        languageFamily: region.languageFamily,
        regions: [region],
      });
    }
  }

  const languages = Array.from(languageMap.values());

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl font-bold text-stone-800">Languages</h1>
          <p className="mt-2 text-stone-500 leading-relaxed">
            India is home to over 22 officially recognized languages and hundreds
            of dialects. Explore the major languages and the regions where
            they thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((lang) => (
            <LanguageCard
              key={lang.language}
              language={lang.language}
              languageFamily={lang.languageFamily}
              regionSlug={lang.regions[0].slug}
              regionName={
                lang.regions.length === 1
                  ? lang.regions[0].name
                  : `${lang.regions.map((r) => r.name).join(", ")}`
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
