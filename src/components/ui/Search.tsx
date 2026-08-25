"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { searchAll } from "@/lib/region-utils";
import type { SearchResult } from "@/types/region";

export default function Search() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  const results: SearchResult[] = query.length > 0 ? searchAll(query) : [];
  const isOpen = query.length > 0 && results.length > 0;
  const [activeIndex, setActiveIndex] = useState(-1);

  const navigateTo = useCallback(
    (result: SearchResult) => {
      setQuery("");
      setActiveIndex(-1);
      router.push(`/region/${result.regionSlug}`);
    },
    [router]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      navigateTo(results[activeIndex]);
    } else if (e.key === "Escape") {
      setQuery("");
      inputRef.current?.blur();
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.length > 0 && results.length > 0) {
              setActiveIndex(-1);
            }
          }}
          placeholder="Search states, languages, phrases, cities..."
          className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
          aria-label="Search regions, languages, and phrases"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls="search-results"
          role="combobox"
        />
      </div>

      {isOpen && (
        <ul
          ref={listRef}
          id="search-results"
          role="listbox"
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-200 rounded-xl shadow-lg max-h-80 overflow-y-auto z-50"
        >
          {results.slice(0, 8).map((result, i) => (
            <li
              key={`${result.type}-${result.label}-${result.regionSlug}`}
              role="option"
              aria-selected={i === activeIndex}
              className={`px-4 py-3 cursor-pointer border-b border-stone-50 last:border-0 ${
                i === activeIndex ? "bg-orange-50" : "hover:bg-stone-50"
              }`}
              onMouseDown={() => navigateTo(result)}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-stone-800">
                    {result.label}
                  </p>
                  <p className="text-xs text-stone-400">{result.sublabel}</p>
                </div>
                <span className="text-[10px] font-semibold uppercase text-stone-300 bg-stone-100 px-2 py-0.5 rounded-full">
                  {result.type}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
