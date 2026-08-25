"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
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

export default function ExplorePage() {
  const [selectedSlug, setSelectedSlug] = useState<string | undefined>();
  const selectedRegion = selectedSlug ? getRegionBySlug(selectedSlug) : undefined;

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
        {/* Map */}
        <div className="lg:w-[60%] h-72 lg:h-auto flex-shrink-0 p-3 lg:p-4">
          <IndiaMap
            selectedSlug={selectedSlug}
            onSelectRegion={setSelectedSlug}
            className="w-full h-full"
          />
        </div>

        {/* Panel */}
        <div className="lg:w-[40%] border-t lg:border-t-0 lg:border-l border-stone-100 overflow-y-auto">
          <div className="p-4 sm:p-6">
            {selectedRegion ? (
              <RegionPanel region={selectedRegion} />
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <svg
                  className="w-12 h-12 text-stone-200 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-stone-400">
                  Select a state
                </h2>
                <p className="text-sm text-stone-300 mt-1">
                  Click on a highlighted state to explore its language and culture
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
