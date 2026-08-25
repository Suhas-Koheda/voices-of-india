# Voices of India

> Explore India through its voices.

An interactive map-based regional language and culture explorer. Discover how people speak, sing, and express themselves across India's regions through place, sound, and everyday speech.

## Features

- **Interactive India Map** — Real geographic boundaries using Leaflet with clickable states
- **Regional Language Explorer** — Phrases, expressions, and cultural notes for 10 Indian states
- **Audio Experience** — Play/pause controls for pronunciation and folk music
- **Search** — Search across states, languages, phrases, cities, and expressions
- **Responsive Design** — Works beautifully on desktop and mobile
- **SEO Optimized** — Dynamic metadata for every region page
- **Accessible** — Semantic HTML, keyboard navigation, ARIA labels

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Leaflet + react-leaflet** (interactive map)
- **GeoJSON** (Indian state boundaries)

## Local Setup

```bash
# Clone the repository
git clone <repo-url>
cd voices-of-india

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Production Build

```bash
pnpm build
pnpm start
```

## Vercel Deployment

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js and configure the build
4. Click **Deploy**
5. Your site will be live at `https://your-project.vercel.app`

No environment variables or databases required. The project is fully static after build.

## Project Structure

```
voices-of-india/
├── public/
│   ├── geo/
│   │   └── india-states.geojson    # Indian state boundaries
│   └── audio/                       # Audio files (add your own)
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Landing page
│   │   ├── layout.tsx               # Root layout with header/footer
│   │   ├── globals.css              # Global styles + Leaflet fixes
│   │   ├── not-found.tsx            # 404 page
│   │   ├── explore/page.tsx         # Interactive map page
│   │   ├── languages/page.tsx       # Language browser
│   │   ├── about/page.tsx           # About page
│   │   └── region/
│   │       └── [slug]/
│   │           ├── page.tsx         # Dynamic region page (server)
│   │           └── RegionDetailClient.tsx  # Client interactivity
│   ├── components/
│   │   ├── map/
│   │   │   ├── IndiaMap.tsx         # Main interactive map
│   │   │   └── RegionMap.tsx        # Single-state map
│   │   ├── audio/
│   │   │   └── AudioPlayer.tsx      # Play/pause/progress controls
│   │   ├── region/
│   │   │   ├── RegionPanel.tsx      # Region info sidebar
│   │   │   ├── PhraseCard.tsx       # Phrase display
│   │   │   ├── ExpressionCard.tsx   # Expression display
│   │   │   └── SongCard.tsx         # Song/folk tradition display
│   │   └── ui/
│   │       ├── Header.tsx           # Navigation header
│   │       ├── Footer.tsx           # Site footer
│   │       ├── Search.tsx           # Search with autocomplete
│   │       └── LanguageCard.tsx     # Language browse card
│   ├── data/
│   │   └── regions.ts               # All region/language data
│   ├── lib/
│   │   └── region-utils.ts          # Search, lookup, helpers
│   └── types/
│       └── region.ts                # TypeScript types
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## How to Add a New Region

1. Open `src/data/regions.ts`
2. Add a new `Region` object to the `regions` array:

```typescript
{
  id: "your-state",
  name: "Your State",
  slug: "your-state",
  language: "Language Name",
  languageFamily: "Dravidian", // or "Indo-Aryan"
  description: "Brief cultural description.",
  capital: "Capital City",
  cities: ["City 1", "City 2", "City 3"],
  phrases: [
    {
      id: "ys-1",
      text: "Phrase in native script",
      transliteration: "Romanized version",
      meaning: "English meaning",
    },
  ],
  expressions: [
    {
      id: "ys-expr-1",
      text: "Expression",
      meaning: "Meaning",
      context: "When it's used",
    },
  ],
  songs: [
    {
      id: "ys-song-1",
      title: "Song/Folk tradition name",
      description: "Brief description",
    },
  ],
  culturalNotes: [
    {
      id: "ys-cn-1",
      title: "Note title",
      content: "Cultural note content",
    },
  ],
  relatedSlugs: ["neighboring-state-1"],
}
```

3. Add the state name to the `STATE_NAME_TO_SLUG` mapping in `src/components/map/IndiaMap.tsx`
4. The state must exist in the GeoJSON file (`public/geo/india-states.geojson`)

## How to Add New Audio

1. Place audio files in `public/audio/`
2. Reference them in the region data:

```typescript
phrases: [
  {
    id: "ap-1",
    text: "Phrase text",
    meaning: "Meaning",
    audio: "/audio/filename.mp3", // Add this
  },
]
```

Audio formats supported: MP3, WAV, OGG, WebM.

## How to Replace/Update GeoJSON

The map boundaries come from `public/geo/india-states.geojson`.

To update:
1. Download a new GeoJSON from a reliable source (e.g., [geojson.io](https://geojson.io) or [GitHub](https://github.com/geohacker/india))
2. Ensure features have a `NAME_1` property with the state name
3. Simplify coordinates to reduce file size (target < 500KB)
4. Replace `public/geo/india-states.geojson`

## Coverage

Currently covers 10 Indian states:
- Andhra Pradesh (Telugu)
- Telangana (Telugu)
- Tamil Nadu (Tamil)
- Karnataka (Kannada)
- Kerala (Malayalam)
- Maharashtra (Marathi)
- West Bengal (Bengali)
- Punjab (Punjabi)
- Rajasthan (Rajasthani)
- Gujarat (Gujarati)

## License

Built with care to celebrate India's incredible linguistic diversity.
