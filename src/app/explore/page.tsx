"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Search from "@/components/ui/Search";
import RegionPanel from "@/components/region/RegionPanel";
import { getRegionBySlug } from "@/lib/region-utils";

const IndiaMap = dynamic(() => import("@/components/map/IndiaMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-stone-100 rounded-2xl flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
    </div>
  ),
});

const ALL_STATES: Record<string, { name: string; language: string }> = {
  "andhra-pradesh": { name: "Andhra Pradesh", language: "Telugu" },
  "telangana": { name: "Telangana", language: "Telugu" },
  "tamil-nadu": { name: "Tamil Nadu", language: "Tamil" },
  "karnataka": { name: "Karnataka", language: "Kannada" },
  "kerala": { name: "Kerala", language: "Malayalam" },
  "maharashtra": { name: "Maharashtra", language: "Marathi" },
  "west-bengal": { name: "West Bengal", language: "Bengali" },
  "punjab": { name: "Punjab", language: "Punjabi" },
  "rajasthan": { name: "Rajasthan", language: "Rajasthani" },
  "gujarat": { name: "Gujarat", language: "Gujarati" },
  "arunachal-pradesh": { name: "Arunachal Pradesh", language: "Various" },
  "assam": { name: "Assam", language: "Assamese" },
  "bihar": { name: "Bihar", language: "Hindi / Bhojpuri" },
  "chhattisgarh": { name: "Chhattisgarh", language: "Hindi" },
  "goa": { name: "Goa", language: "Konkani" },
  "haryana": { name: "Haryana", language: "Hindi" },
  "himachal-pradesh": { name: "Himachal Pradesh", language: "Hindi" },
  "jammu-and-kashmir": { name: "Jammu and Kashmir", language: "Kashmiri" },
  "jharkhand": { name: "Jharkhand", language: "Hindi" },
  "ladakh": { name: "Ladakh", language: "Ladakhi" },
  "madhya-pradesh": { name: "Madhya Pradesh", language: "Hindi" },
  "manipur": { name: "Manipur", language: "Meitei" },
  "meghalaya": { name: "Meghalaya", language: "Khasi" },
  "mizoram": { name: "Mizoram", language: "Mizo" },
  "nagaland": { name: "Nagaland", language: "Naga" },
  "odisha": { name: "Odisha", language: "Odia" },
  "sikkim": { name: "Sikkim", language: "Nepali" },
  "tripura": { name: "Tripura", language: "Bengali" },
  "uttar-pradesh": { name: "Uttar Pradesh", language: "Hindi" },
  "uttarakhand": { name: "Uttarakhand", language: "Hindi" },
  "delhi": { name: "Delhi", language: "Hindi" },
};

export default function ExplorePage() {
  const [selectedSlug, setSelectedSlug] = useState<string | undefined>();
  const selectedRegion = selectedSlug ? getRegionBySlug(selectedSlug) : undefined;
  const router = useRouter();

  const handleSelect = (slug: string) => {
    const hasData = getRegionBySlug(slug);
    if (hasData) {
      setSelectedSlug(slug);
    } else {
      router.push(`/region/${slug}`);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)]">
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <h1 className="text-xl font-bold text-stone-800">Explore</h1>
            <Search />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-64px-73px)]">
        <div className="lg:w-[60%] h-72 lg:h-auto flex-shrink-0 p-3 lg:p-4">
          <IndiaMap
            selectedSlug={selectedSlug}
            onSelectRegion={handleSelect}
            className="w-full h-full"
          />
        </div>

        <div className="lg:w-[40%] border-t lg:border-t-0 lg:border-l border-stone-100 overflow-y-auto">
          <div className="p-4 sm:p-6">
            {selectedRegion ? (
              <RegionPanel region={selectedRegion} />
            ) : selectedSlug ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <h2 className="text-lg font-bold text-stone-800 mb-1">
                  {ALL_STATES[selectedSlug]?.name || selectedSlug}
                </h2>
                <p className="text-sm text-stone-400 mb-4">
                  {ALL_STATES[selectedSlug]?.language}
                </p>
                <p className="text-sm text-stone-500 mb-4">
                  Full content is coming soon for this state.
                </p>
                <button
                  onClick={() => router.push(`/region/${selectedSlug}`)}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  View state page
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <svg className="w-12 h-12 text-stone-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2 className="text-lg font-semibold text-stone-400">Select a state</h2>
                <p className="text-sm text-stone-300 mt-1">
                  Click any state on the map to explore its place, language, and culture
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
