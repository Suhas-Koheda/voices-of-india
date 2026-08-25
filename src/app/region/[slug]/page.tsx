import type { Metadata } from "next";
import { getRegionBySlug, getAllSlugs } from "@/lib/region-utils";
import RegionDetailClient from "./RegionDetailClient";
import GenericStatePage from "@/components/region/GenericStatePage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) {
    return { title: "State" };
  }
  return {
    title: `${region.name} — ${region.language}`,
    description: `Explore ${region.name} — geography, food, landmarks, language, and cultural traditions.`,
  };
}

export default async function RegionPage({ params }: PageProps) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);

  if (!region) {
    return <GenericStatePage slug={slug} />;
  }

  return <RegionDetailClient region={region} />;
}
