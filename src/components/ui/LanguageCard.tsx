"use client";

import Link from "next/link";

type LanguageCardProps = {
  language: string;
  languageFamily: string;
  regionSlug: string;
  regionName: string;
};

export default function LanguageCard({
  language,
  languageFamily,
  regionSlug,
  regionName,
}: LanguageCardProps) {
  return (
    <Link
      href={`/region/${regionSlug}`}
      className="group block bg-white border border-stone-200 rounded-2xl p-5 hover:border-orange-300 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-stone-800 group-hover:text-orange-500 transition-colors">
            {language}
          </h3>
          <p className="text-xs text-stone-400 mt-0.5">{languageFamily}</p>
        </div>
        <svg
          className="w-5 h-5 text-stone-300 group-hover:text-orange-400 transition-colors mt-1"
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
      </div>
      <p className="text-sm text-stone-500">{regionName}</p>
    </Link>
  );
}
