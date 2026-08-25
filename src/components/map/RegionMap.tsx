"use client";

import { MapContainer, TileLayer, GeoJSON, useMap, ZoomControl } from "react-leaflet";
import { useEffect, useState } from "react";
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

type GeoJSONData = {
  type: "FeatureCollection";
  features: Array<{
    type: "Feature";
    properties: Record<string, unknown>;
    geometry: { type: string; coordinates: unknown[] };
  }>;
};

type RegionMapProps = { targetSlug: string; className?: string };

function FocusState({ geojson, targetSlug }: { geojson: GeoJSONData; targetSlug: string }) {
  const map = useMap();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const L = (window as any).L;
    if (!L || !geojson) return;
    const targetFeature = geojson.features.find((f) => {
      const name = f.properties?.NAME_1;
      return typeof name === "string" && STATE_NAME_TO_SLUG[name] === targetSlug;
    });
    if (targetFeature) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const geoJsonLayer = L.geoJSON(targetFeature as any);
      const bounds = geoJsonLayer.getBounds();
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [30, 30], maxZoom: 8 });
      }
    }
  }, [geojson, targetSlug, map]);
  return null;
}

export default function RegionMap({ targetSlug, className = "" }: RegionMapProps) {
  const [geojson, setGeojson] = useState<GeoJSONData | null>(null);

  useEffect(() => {
    fetch("/geo/india-states.geojson")
      .then((res) => res.json())
      .then((data: GeoJSONData) => setGeojson(data))
      .catch(() => {});
  }, []);

  if (!geojson) {
    return (
      <div className={`bg-stone-100 rounded-2xl flex items-center justify-center ${className}`}>
        <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const style = (feature?: any) => {
    const name = feature?.properties?.NAME_1 as string | undefined;
    const slug = name ? STATE_NAME_TO_SLUG[name] : undefined;
    const isTarget = slug === targetSlug;
    return {
      fillColor: isTarget ? "#EA580C" : "#E7E5E4",
      weight: isTarget ? 2.5 : 0.5,
      opacity: 1,
      color: isTarget ? "#EA580C" : "#D6D3D1",
      fillOpacity: isTarget ? 0.7 : 0.2,
    };
  };

  return (
    <div className={`relative ${className}`}>
      <MapContainer
        center={[22.5, 80.0]}
        zoom={5}
        scrollWheelZoom={true}
        zoomControl={false}
        className="w-full h-full rounded-2xl"
        style={{ background: "#F5F5F4" }}
      >
        <ZoomControl position="topright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FocusState geojson={geojson} targetSlug={targetSlug} />
        <GeoJSON
          key={targetSlug}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data={geojson as any}
          style={style}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onEachFeature={(feature: any, layer: any) => {
            const name = feature.properties?.NAME_1;
            if (typeof name === "string") {
              layer.bindTooltip(name, {
                permanent: false,
                direction: "top",
                className: "bg-white px-2 py-1 text-xs font-medium text-stone-700 rounded-lg shadow-sm border border-stone-100",
              });
            }
          }}
        />
      </MapContainer>
    </div>
  );
}
