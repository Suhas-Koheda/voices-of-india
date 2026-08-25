"use client";

import dynamic from "next/dynamic";
import type { Region } from "@/types/region";
import PhraseCard from "@/components/region/PhraseCard";
import ExpressionCard from "@/components/region/ExpressionCard";
import SongCard from "@/components/region/SongCard";
import Link from "next/link";
import { getRegionBySlug } from "@/lib/region-utils";

const RegionMap = dynamic(() => import("@/components/map/RegionMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-stone-100 rounded-2xl flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
    </div>
  ),
});

type RegionDetailClientProps = {
  region: Region;
};

export default function RegionDetailClient({ region }: RegionDetailClientProps) {
  const relatedRegions = (region.relatedSlugs || [])
    .map((slug) => getRegionBySlug(slug))
    .filter(Boolean) as Region[];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
          <Link href="/explore" className="hover:text-orange-500 transition-colors">
            Explore
          </Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-stone-700">{region.name}</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-800">
            {region.name}
          </h1>
          <p className="text-orange-500 font-medium mt-1">{region.tagline}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full">
              {region.language}
            </span>
            <span className="text-sm text-stone-400">{region.languageFamily} family</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                Location
              </h2>
              <RegionMap targetSlug={region.slug} className="h-64 sm:h-80" />
            </section>

            <section>
              <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                About
              </h2>
              <p className="text-stone-600 leading-relaxed">{region.description}</p>
            </section>

            <section>
              <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                Geography
              </h2>
              <p className="text-stone-600 leading-relaxed">{region.geography}</p>
            </section>

            <section>
              <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                History
              </h2>
              <p className="text-stone-600 leading-relaxed">{region.history}</p>
            </section>

            {region.food.length > 0 && (
              <section>
                <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                  Food &amp; cuisine
                </h2>
                <div className="space-y-3">
                  {region.food.map((item) => (
                    <div key={item.name} className="bg-stone-50 border border-stone-100 rounded-xl p-4">
                      <p className="text-base font-bold text-stone-800">{item.name}</p>
                      <p className="text-sm text-stone-600 mt-0.5">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {region.landmarks.length > 0 && (
              <section>
                <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                  Landmarks
                </h2>
                <div className="space-y-3">
                  {region.landmarks.map((lm) => (
                    <div key={lm.name} className="bg-stone-50 border border-stone-100 rounded-xl p-4">
                      <p className="text-base font-bold text-stone-800">{lm.name}</p>
                      <p className="text-sm text-stone-600 mt-0.5">{lm.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                Traditions
              </h2>
              <p className="text-stone-600 leading-relaxed">{region.traditions}</p>
            </section>

            <section>
              <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                Common phrases
              </h2>
              <div className="space-y-3">
                {region.phrases.map((phrase) => (
                  <PhraseCard key={phrase.id} phrase={phrase} />
                ))}
              </div>
            </section>

            {region.expressions.length > 0 && (
              <section>
                <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                  Local expressions
                </h2>
                <div className="space-y-3">
                  {region.expressions.map((expr) => (
                    <ExpressionCard key={expr.id} expression={expr} />
                  ))}
                </div>
              </section>
            )}

            {region.songs.length > 0 && (
              <section>
                <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                  Songs &amp; folk traditions
                </h2>
                <div className="space-y-3">
                  {region.songs.map((song) => (
                    <SongCard key={song.id} song={song} />
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-stone-50 border border-stone-100 rounded-2xl p-5">
              <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                Quick facts
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">Capital</span>
                  <span className="text-sm font-medium text-stone-700">{region.capital}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">Language</span>
                  <span className="text-sm font-medium text-stone-700">{region.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-stone-500">Family</span>
                  <span className="text-sm font-medium text-stone-700">{region.languageFamily}</span>
                </div>
              </div>
            </div>

            {region.cities.length > 0 && (
              <div className="bg-stone-50 border border-stone-100 rounded-2xl p-5">
                <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                  Cities
                </h3>
                <div className="space-y-2">
                  {region.cities.map((city) => (
                    <div key={city.name} className="p-3 bg-white border border-stone-100 rounded-xl">
                      <p className="text-sm font-semibold text-stone-800">{city.name}</p>
                      <p className="text-xs text-stone-400 mt-0.5">{city.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {relatedRegions.length > 0 && (
              <div className="bg-stone-50 border border-stone-100 rounded-2xl p-5">
                <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                  Nearby regions
                </h3>
                <div className="space-y-2">
                  {relatedRegions.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/region/${rel.slug}`}
                      className="block p-3 bg-white border border-stone-100 rounded-xl hover:border-orange-300 transition-colors"
                    >
                      <p className="text-sm font-semibold text-stone-800">{rel.name}</p>
                      <p className="text-xs text-stone-400">{rel.language} · {rel.capital}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
