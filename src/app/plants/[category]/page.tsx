import { JsonLd } from "@/components/ui/JsonLd";
import { plantPageSchema } from "@/lib/structured-data";
import { readSiteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";
import { PlantLanding } from "@/components/sections/PlantLanding";
import { plantPages, findPlantPage } from "@/content/plant-pages";

export const dynamicParams = false;
export function generateStaticParams() { return plantPages.map(page => ({ category: page.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const page = findPlantPage(category);
  if (!page) notFound();
  return pageMetadata({ ...page, path: `/plants/${page.slug}` });
}

export default async function PlantCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const page = findPlantPage(category);
  if (!page) notFound();
  return <><JsonLd data={plantPageSchema(page, readSiteConfig().origin)} /><Header /><main id="main-content" tabIndex={-1}>
    <PageIntro label={page.label} heading={page.heading} description={page.introduction} parent={{ label: "دليل النباتات", href: "/plants" }} />
    <PlantLanding page={page} />
  </main><Footer /></>;
}
