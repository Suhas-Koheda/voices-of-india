"use client";

import type { Phrase } from "@/types/region";

type PhraseCardProps = {
  phrase: Phrase;
};

export default function PhraseCard({ phrase }: PhraseCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-4 hover:border-orange-300 transition-colors">
      <p className="text-lg font-semibold text-stone-800 leading-relaxed mb-1">
        {phrase.text}
      </p>
      {phrase.transliteration && (
        <p className="text-sm text-stone-500 italic mb-1">
          {phrase.transliteration}
        </p>
      )}
      <p className="text-sm text-teal-600 font-medium">{phrase.meaning}</p>
    </div>
  );
}
