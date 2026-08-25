"use client";

import type { Region } from "@/types/region";
import PhraseCard from "./PhraseCard";
import ExpressionCard from "./ExpressionCard";
import SongCard from "./SongCard";
import Link from "next/link";

type RegionPanelProps = {
  region: Region;
};

export default function RegionPanel({ region }: RegionPanelProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-stone-800">{region.name}</h2>
        <div className="flex items-center gap-2 mt-1">
          <span className="inline-block px-2.5 py-0.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
            {region.language}
          </span>
          <span className="text-xs text-stone-400">
            {region.languageFamily}
          </span>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        {region.description}
      </p>

      <div>
        <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
          How locals speak
        </h3>
        <div className="space-y-3">
          {region.phrases.map((phrase) => (
            <PhraseCard key={phrase.id} phrase={phrase} />
          ))}
        </div>
      </div>

      {region.expressions.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
            Local expressions
          </h3>
          <div className="space-y-3">
            {region.expressions.map((expr) => (
              <ExpressionCard key={expr.id} expression={expr} />
            ))}
          </div>
        </div>
      )}

      {region.songs.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
            Songs &amp; folk traditions
          </h3>
          <div className="space-y-3">
            {region.songs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
          About this region
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-stone-50 rounded-lg p-3">
            <p className="text-xs text-stone-400 mb-0.5">Capital</p>
            <p className="text-sm font-medium text-stone-700">
              {region.capital}
            </p>
          </div>
          <div className="bg-stone-50 rounded-lg p-3">
            <p className="text-xs text-stone-400 mb-0.5">Language</p>
            <p className="text-sm font-medium text-stone-700">
              {region.language}
            </p>
          </div>
        </div>
      </div>

      {region.cities.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
            Major cities
          </h3>
          <div className="flex flex-wrap gap-2">
            {region.cities.map((city) => (
              <span
                key={city}
                className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      )}

      <Link
        href={`/region/${region.slug}`}
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
      >
        Explore {region.name}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
}
