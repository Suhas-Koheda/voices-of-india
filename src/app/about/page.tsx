import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Voices of India is an experimental language and culture explorer designed to help people discover India's linguistic diversity.",
};

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-stone-800 mb-6">
          About Voices of India
        </h1>

        <div className="prose prose-stone max-w-none space-y-6 text-stone-600 leading-relaxed">
          <p className="text-lg">
            Voices of India is an experimental language and culture explorer
            designed to help people discover India&apos;s linguistic diversity through
            place, sound, and everyday speech.
          </p>

          <p>
            India is home to 22 officially recognized languages and hundreds of
            dialects. Each language carries its own literature, music, and
            cultural identity. Voices of India brings these diverse voices
            together in one place, making it easy to explore and appreciate the
            rich tapestry of Indian languages.
          </p>

          <h2 className="text-xl font-bold text-stone-800 mt-8">What you can do</h2>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
              <span>
                <strong>Explore the interactive map</strong> — click on any
                highlighted state to discover its language and culture
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
              <span>
                <strong>Listen to phrases</strong> — hear how common expressions
                sound in different languages
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
              <span>
                <strong>Discover local expressions</strong> — learn slang and
                idioms that give each language its unique character
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
              <span>
                <strong>Explore folk traditions</strong> — discover songs, music,
                and cultural practices from each region
              </span>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-stone-800 mt-8">Our mission</h2>
          <p>
            The goal is to create a respectful, educational resource that
            celebrates India&apos;s linguistic heritage. Every language in India is a
            window into a unique worldview, and Voices of India aims to make
            these windows accessible to everyone.
          </p>

          <h2 className="text-xl font-bold text-stone-800 mt-8">Technology</h2>
          <p>
            Voices of India is built with Next.js, TypeScript, Tailwind CSS, and
            Leaflet for the interactive map. It is designed to be fast, accessible,
            and deployable anywhere. All content is curated with care and respect
            for the cultures represented.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-100">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
          >
            Start exploring
            <svg
              className="w-5 h-5"
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
      </div>
    </div>
  );
}
