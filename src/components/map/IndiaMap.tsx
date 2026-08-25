"use client";

import { useEffect, useState, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const STATE_NAME_TO_SLUG: Record<string, string> = {
  "Andhra Pradesh": "andhra-pradesh",
  Telangana: "telangana",
  "Tamil Nadu": "tamil-nadu",
  Karnataka: "karnataka",
  Kerala: "kerala",
  Maharashtra: "maharashtra",
  "West Bengal": "west-bengal",
  Punjab: "punjab",
  Rajasthan: "rajasthan",
  Gujarat: "gujarat",
  "Arunachal Pradesh": "arunachal-pradesh",
  Assam: "assam",
  Bihar: "bihar",
  Chhattisgarh: "chhattisgarh",
  Goa: "goa",
  Haryana: "haryana",
  "Himachal Pradesh": "himachal-pradesh",
  "Jammu and Kashmir": "jammu-and-kashmir",
  Jharkhand: "jharkhand",
  "Madhya Pradesh": "madhya-pradesh",
  Manipur: "manipur",
  Meghalaya: "meghalaya",
  Mizoram: "mizoram",
  Nagaland: "nagaland",
  Odisha: "odisha",
  Sikkim: "sikkim",
  Tripura: "tripura",
  "Uttar Pradesh": "uttar-pradesh",
  Uttarakhand: "uttarakhand",
  Delhi: "delhi",
  Ladakh: "ladakh",
};

const FULL_DATA_SLUGS = [
  "andhra-pradesh", "telangana", "tamil-nadu", "karnataka",
  "kerala", "maharashtra", "west-bengal", "punjab", "rajasthan", "gujarat",
];

function hasFullData(slug: string): boolean {
  return FULL_DATA_SLUGS.includes(slug);
}

type GeoJSONData = {
  type: "FeatureCollection";
  features: Array<{
    type: "Feature";
    properties: Record<string, unknown>;
    geometry: { type: string; coordinates: unknown[] };
  }>;
};

type IndiaMapProps = {
  selectedSlug?: string;
  onSelectRegion: (slug: string) => void;
  className?: string;
};

function FitBounds({ geojson }: { geojson: GeoJSONData | null }) {
  const map = useMap();
  useEffect(() => {
    if (geojson && map) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const L = (window as any).L;
        if (L) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const geoJsonLayer = L.geoJSON(geojson as any);
          const bounds = geoJsonLayer.getBounds();
          if (bounds.isValid()) {
            map.fitBounds(bounds, { padding: [20, 20] });
          }
        }
      } catch { /* fallback */ }
    }
  }, [geojson, map]);
  return null;
}

export default function IndiaMap({ selectedSlug, onSelectRegion, className = "" }: IndiaMapProps) {
  const [geojson, setGeojson] = useState<GeoJSONData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/geo/india-states.geojson")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load map data");
        return res.json();
      })
      .then((data: GeoJSONData) => { setGeojson(data); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const style = useCallback((feature?: any) => {
    const name = feature?.properties?.NAME_1 as string | undefined;
    const slug = name ? STATE_NAME_TO_SLUG[name] : null;
    const selected = slug !== null && slug === selectedSlug;
    const hasData = slug !== null && hasFullData(slug);

    return {
      fillColor: selected ? "#EA580C" : hasData ? "#FFF7ED" : "#E7E5E4",
      weight: selected ? 2.5 : 1,
      opacity: 1,
      color: selected ? "#EA580C" : "#A8A29E",
      fillOpacity: selected ? 0.7 : hasData ? 0.55 : 0.25,
      cursor: slug ? "pointer" : "default",
    };
  }, [selectedSlug]);

  const handleStateClick = useCallback((slug: string) => {
    onSelectRegion(slug);
  }, [onSelectRegion]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEachFeature = useCallback((feature: any, layer: any) => {
    const name = feature.properties?.NAME_1 as string;
    if (name) {
      const slug = STATE_NAME_TO_SLUG[name];
      const hasData = slug ? hasFullData(slug) : false;
      layer.bindTooltip(
        hasData ? `${name} — Explore` : name,
        {
          permanent: false,
          direction: "top",
          offset: [0, -5],
          className: "bg-white px-3 py-1.5 text-xs font-medium text-stone-700 rounded-lg shadow-md border border-stone-100",
        }
      );
    }
    const slug = name ? STATE_NAME_TO_SLUG[name] : null;
    if (slug) {
      const hasData = hasFullData(slug);
      layer.on({
        click: () => handleStateClick(slug),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mouseover: function (this: any) {
          this.setStyle({
            weight: 2.5,
            color: "#EA580C",
            fillOpacity: hasData ? 0.75 : 0.45,
          });
          this.bringToFront();
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mouseout: function (this: any) {
          const isSel = slug === selectedSlug;
          this.setStyle({
            fillColor: isSel ? "#EA580C" : hasData ? "#FFF7ED" : "#E7E5E4",
            weight: isSel ? 2.5 : 1,
            opacity: 1,
            color: isSel ? "#EA580C" : "#A8A29E",
            fillOpacity: isSel ? 0.7 : hasData ? 0.55 : 0.25,
          });
        },
      });
    }
  }, [handleStateClick, selectedSlug]);

  if (loading) {
    return (
      <div className={`bg-stone-100 rounded-2xl flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-stone-400">Loading map...</p>
        </div>
      </div>
    );
  }

  if (error || !geojson) {
    return (
      <div className={`bg-stone-100 rounded-2xl flex items-center justify-center ${className}`}>
        <div className="text-center px-6">
          <svg className="w-10 h-10 text-stone-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p className="text-sm text-stone-500 mb-1">Could not load map data</p>
          <p className="text-xs text-stone-400">Please refresh the page to try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <MapContainer
        center={[22.5, 80.0]}
        zoom={5}
        scrollWheelZoom={true}
        zoomControl={false}
        className="w-full h-full rounded-2xl"
        style={{ background: "#F5F5F4" }}
        minZoom={3}
        maxZoom={10}
      >
        <ZoomControl position="topright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds geojson={geojson} />
        <GeoJSON
          key={selectedSlug || "none"}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data={geojson as any}
          style={style}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-sm border border-stone-100 max-w-xs">
        <p className="text-xs text-stone-500">
          Click any state to explore. Orange states have full content.
        </p>
      </div>
    </div>
  );
}
