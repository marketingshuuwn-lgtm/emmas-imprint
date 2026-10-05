import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { readSiteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";
import { corePages } from "@/content/page-info";
export const metadata = pageMetadata(corePages.catalog);
import { PlantCatalog } from "@/components/sections/PlantCatalog";
export default async function PlantsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  return <><Header /><PlantCatalog origin={readSiteConfig().origin} initialCategory={category === "indoor" || category === "outdoor" ? category : "all"} /><Footer /></>;
}
