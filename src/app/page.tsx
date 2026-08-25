import Link from "next/link";
import { getAllRegions } from "@/lib/region-utils";

export default function HomePage() {
  const regions = getAllRegions();
  const featured = regions.slice(0, 6);

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-orange-600">
                10 states, dozens of cities
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Explore India through its{" "}
              <span className="text-orange-500">voices</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto">
              Discover how people speak, sing, and eat across India&apos;s regions.
              Place, sound, and everyday speech — all on one map.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/explore"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Explore the map
              </Link>
              <Link
                href="/languages"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
              >
                Browse languages
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 left-0 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">
              Featured places
            </h2>
            <p className="mt-2 text-stone-500">
              Start your journey with these diverse regions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((region) => (
              <Link
                key={region.id}
                href={`/region/${region.slug}`}
                className="group bg-stone-50 border border-stone-100 rounded-2xl p-5 hover:border-orange-300 hover:bg-orange-50/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    {region.capital}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-800 group-hover:text-orange-500 transition-colors">
                  {region.name}
                </h3>
                <p className="text-xs text-orange-500 font-medium mt-0.5">
                  {region.tagline}
                </p>
                <p className="mt-2 text-sm text-stone-500 line-clamp-2 leading-relaxed">
                  {region.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {region.cities.slice(0, 2).map((c) => (
                    <span key={c.name} className="text-[10px] px-2 py-0.5 bg-white border border-stone-100 rounded-full text-stone-400">
                      {c.name}
                    </span>
                  ))}
                  <span className="text-[10px] px-2 py-0.5 bg-orange-50 text-orange-600 rounded-full font-medium">
                    {region.language}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-orange-500 text-sm font-semibold">
                  Explore
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/explore" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
              View all regions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-stone-800 mb-1">Pick a place</h3>
              <p className="text-sm text-stone-500">Click any highlighted state on the interactive map.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-stone-800 mb-1">Explore the place</h3>
              <p className="text-sm text-stone-500">Geography, history, food, landmarks, and traditions.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-stone-800 mb-1">Hear the voices</h3>
              <p className="text-sm text-stone-500">Listen to phrases, expressions, and folk songs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-4">
            Ready to explore?
          </h2>
          <p className="text-stone-500 mb-8 max-w-xl mx-auto">
            Choose a region and discover its food, landmarks, language, and cultural traditions.
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Start exploring
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
