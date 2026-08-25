import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl font-bold text-orange-500">404</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-800 mb-2">Region not found</h1>
        <p className="text-stone-500 mb-6">
          We couldn&apos;t find the region you&apos;re looking for. It may not have content yet.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/explore"
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
          >
            Explore the map
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-lg transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
