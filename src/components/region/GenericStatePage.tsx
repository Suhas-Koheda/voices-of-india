"use client";

import { useRouter } from "next/navigation";
import { getRegionBySlug } from "@/lib/region-utils";

const ALL_STATES: Record<string, { name: string; language: string; capital: string }> = {
  "arunachal-pradesh": { name: "Arunachal Pradesh", language: "Various tribal languages", capital: "Itanagar" },
  "assam": { name: "Assam", language: "Assamese", capital: "Dispur" },
  "bihar": { name: "Bihar", language: "Hindi / Bhojpuri", capital: "Patna" },
  "chhattisgarh": { name: "Chhattisgarh", language: "Hindi", capital: "Raipur" },
  "goa": { name: "Goa", language: "Konkani", capital: "Panaji" },
  "haryana": { name: "Haryana", language: "Hindi", capital: "Chandigarh" },
  "himachal-pradesh": { name: "Himachal Pradesh", language: "Hindi / Pahari", capital: "Shimla" },
  "jammu-and-kashmir": { name: "Jammu and Kashmir", language: "Kashmiri / Dogri", capital: "Srinagar" },
  "jharkhand": { name: "Jharkhand", language: "Hindi / Santhali", capital: "Ranchi" },
  "ladakh": { name: "Ladakh", language: "Ladakhi / Balti", capital: "Leh" },
  "madhya-pradesh": { name: "Madhya Pradesh", language: "Hindi", capital: "Bhopal" },
  "manipur": { name: "Manipur", language: "Meitei", capital: "Imphal" },
  "meghalaya": { name: "Meghalaya", language: "Khasi / Garo", capital: "Shillong" },
  "mizoram": { name: "Mizoram", language: "Mizo", capital: "Aizawl" },
  "nagaland": { name: "Nagaland", language: "Naga languages", capital: "Kohima" },
  "odisha": { name: "Odisha", language: "Odia", capital: "Bhubaneswar" },
  "sikkim": { name: "Sikkim", language: "Nepali / Lepcha", capital: "Gangtok" },
  "tripura": { name: "Tripura", language: "Bengali / Kokborok", capital: "Agartala" },
  "uttar-pradesh": { name: "Uttar Pradesh", language: "Hindi / Awadhi", capital: "Lucknow" },
  "uttarakhand": { name: "Uttarakhand", language: "Hindi / Garhwali", capital: "Dehradun" },
  "delhi": { name: "Delhi", language: "Hindi / Urdu", capital: "New Delhi" },
};

export default function GenericStatePage({ slug }: { slug: string }) {
  const router = useRouter();
  const existingRegion = getRegionBySlug(slug);
  if (existingRegion) return null;

  const state = ALL_STATES[slug];
  if (!state) return null;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-stone-400 mb-6">
          <button onClick={() => router.back()} className="hover:text-orange-500 transition-colors">
            Back
          </button>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-stone-700">{state.name}</span>
        </nav>

        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-800">{state.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-sm font-semibold rounded-full">
              {state.language}
            </span>
          </div>
          <p className="mt-6 text-stone-500 leading-relaxed">
            Full content for {state.name} is coming soon. We are building detailed pages
            with geography, history, food, landmarks, traditions, phrases, and audio for every state.
          </p>
          <div className="mt-8 p-6 bg-orange-50 border border-orange-100 rounded-2xl">
            <h2 className="text-base font-bold text-stone-800 mb-2">Want to help?</h2>
            <p className="text-sm text-stone-500 mb-4">
              Add phrases, expressions, or cultural notes for {state.name}.
            </p>
            <button
              onClick={() => router.push("/contribute")}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Contribute content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
