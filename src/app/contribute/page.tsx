"use client";

import dynamic from "next/dynamic";

const ContributeForm = dynamic(() => import("@/components/contribute/ContributeForm"), {
  ssr: false,
  loading: () => (
    <div className="space-y-4">
      <div className="h-8 bg-stone-100 rounded-lg w-48 animate-pulse" />
      <div className="h-4 bg-stone-100 rounded-lg w-96 animate-pulse" />
      <div className="h-64 bg-stone-100 rounded-xl animate-pulse" />
    </div>
  ),
});

export default function ContributePage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-800">Contribute</h1>
          <p className="mt-2 text-stone-500 leading-relaxed">
            Help build the most comprehensive guide to India&apos;s voices.
            Record audio, add phrases, expressions, or cultural notes from your region.
            Your contributions stay in your browser and can be exported.
          </p>
        </div>
        <ContributeForm />
      </div>
    </div>
  );
}
