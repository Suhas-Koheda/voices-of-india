import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRegionBySlug, getAllSlugs } from "@/lib/region-utils";
import RegionDetailClient from "./RegionDetailClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) return {};

  return {
    title: `${region.name} — ${region.language}`,
    description: `Explore ${region.language} language, expressions, and cultural traditions of ${region.name}.`,
    openGraph: {
      title: `${region.name} — ${region.language}`,
      description: `Explore ${region.language} language and culture of ${region.name}.`,
      type: "article",
    },
  };
}

export default async function RegionPage({ params }: PageProps) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) notFound();

  return <RegionDetailClient region={region} />;
}
