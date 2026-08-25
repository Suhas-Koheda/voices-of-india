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
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
          <Link href="/explore" className="hover:text-orange-500 transition-colors">
            Explore
          </Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-stone-700">{region.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-800">
            {region.name}
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full">
              {region.language}
            </span>
            <span className="text-sm text-stone-400">{region.languageFamily} family</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map */}
            <section>
              <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                Location
              </h2>
              <RegionMap targetSlug={region.slug} className="h-64 sm:h-80" />
            </section>

            {/* About */}
            <section>
              <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                About
              </h2>
              <p className="text-stone-600 leading-relaxed">{region.description}</p>
            </section>

            {/* Phrases */}
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

            {/* Expressions */}
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

            {/* Songs */}
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

            {/* Cultural Notes */}
            {region.culturalNotes.length > 0 && (
              <section>
                <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                  Cultural notes
                </h2>
                <div className="space-y-4">
                  {region.culturalNotes.map((note) => (
                    <div
                      key={note.id}
                      className="bg-stone-50 border border-stone-100 rounded-xl p-5"
                    >
                      <h3 className="text-base font-bold text-stone-800 mb-1">
                        {note.title}
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {note.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right sidebar */}
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
                  Major cities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1.5 bg-white text-stone-600 text-sm font-medium rounded-full border border-stone-200"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {relatedRegions.length > 0 && (
              <div className="bg-stone-50 border border-stone-100 rounded-2xl p-5">
                <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                  Related regions
                </h3>
                <div className="space-y-2">
                  {relatedRegions.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/region/${rel.slug}`}
                      className="block p-3 bg-white border border-stone-100 rounded-xl hover:border-orange-300 transition-colors"
                    >
                      <p className="text-sm font-semibold text-stone-800">{rel.name}</p>
                      <p className="text-xs text-stone-400">{rel.language}</p>
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
