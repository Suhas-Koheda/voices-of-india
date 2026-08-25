import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <span className="text-base font-bold text-stone-800">
                Voices of India
              </span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              An experimental language and culture explorer designed to help
              people discover India&apos;s linguistic diversity through place, sound,
              and everyday speech.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/explore"
                  className="text-sm text-stone-500 hover:text-orange-500 transition-colors"
                >
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link
                  href="/languages"
                  className="text-sm text-stone-500 hover:text-orange-500 transition-colors"
                >
                  Languages
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-stone-500 hover:text-orange-500 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
              Featured Languages
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/region/tamil-nadu"
                  className="text-sm text-stone-500 hover:text-orange-500 transition-colors"
                >
                  Tamil
                </Link>
              </li>
              <li>
                <Link
                  href="/region/andhra-pradesh"
                  className="text-sm text-stone-500 hover:text-orange-500 transition-colors"
                >
                  Telugu
                </Link>
              </li>
              <li>
                <Link
                  href="/region/karnataka"
                  className="text-sm text-stone-500 hover:text-orange-500 transition-colors"
                >
                  Kannada
                </Link>
              </li>
              <li>
                <Link
                  href="/region/kerala"
                  className="text-sm text-stone-500 hover:text-orange-500 transition-colors"
                >
                  Malayalam
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-100 text-center">
          <p className="text-xs text-stone-400">
            Built with care to celebrate India&apos;s incredible linguistic diversity.
          </p>
        </div>
      </div>
    </footer>
  );
}
