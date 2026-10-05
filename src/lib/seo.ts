import type { Metadata, MetadataRoute } from "next";
import { plantPages } from "@/content/plant-pages";
import { corePages } from "@/content/page-info";
import { readSiteConfig, siteUrl, type SiteConfig } from "@/lib/site-config";

export function pageMetadata(page: { title: string; description: string; path: string }, config: SiteConfig = readSiteConfig()): Metadata {
  const image = { url: "/images/social-card.png", width: 1200, height: 630, alt: "بصمة ايما الزراعية — نباتات وخدمات حدائق في الرياض" };
  return {
    title: page.title,
    description: page.description,
    metadataBase: new URL(config.origin ?? "http://127.0.0.1:3000"),
    alternates: config.origin ? { canonical: siteUrl(page.path, config.origin) } : undefined,
    robots: { index: config.indexable, follow: true },
    openGraph: { type: "website", locale: "ar_SA", siteName: "بصمة ايما الزراعية", title: page.title, description: page.description,
      ...(config.origin ? { url: siteUrl(page.path, config.origin) } : {}), images: [image] },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [image.url] },
  };
}

export function siteRobots(config: SiteConfig = readSiteConfig()): MetadataRoute.Robots {
  return config.indexable && config.origin ? {
    rules: { userAgent: "*", allow: "/" }, sitemap: siteUrl("/sitemap.xml", config.origin),
  } : { rules: { userAgent: "*", disallow: "/" } };
}

export function siteSitemap(config: SiteConfig = readSiteConfig()): MetadataRoute.Sitemap {
  if (!config.indexable || !config.origin) return [];
  const paths = [corePages.home.path, corePages.catalog.path, ...plantPages.map(page => `/plants/${page.slug}`), corePages.services.path];
  return paths.map(path => ({ url: siteUrl(path, config.origin) }));
}
