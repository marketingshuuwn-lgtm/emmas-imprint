export interface SiteConfig { origin?: string; indexable: boolean; }

export function readSiteConfig(environment: Record<string, string | undefined> = process.env): SiteConfig {
  // Vercel's stable production domain is also available to preview builds.
  // VERCEL_URL is a deployment URL and must never become the canonical origin.
  const productionHost = environment.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const value = environment.SITE_URL?.trim() || (productionHost ? `https://${productionHost}` : undefined);
  if (!value) return { indexable: false };
  let url: URL;
  try { url = new URL(value); } catch { throw new Error("SITE_URL or VERCEL_PROJECT_PRODUCTION_URL must define an absolute HTTPS origin."); }
  if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash ||
    url.hostname === "localhost" || url.hostname.endsWith(".localhost") || url.hostname === "[::1]" || /^127\./.test(url.hostname)) {
    throw new Error("SITE_URL or VERCEL_PROJECT_PRODUCTION_URL must define a public HTTPS origin without credentials, path, query or fragment.");
  }
  const production = environment.NODE_ENV === "production" && environment.VERCEL_ENV === "production";
  const requested = environment.SITE_INDEXABLE === "true" ||
    (environment.SITE_INDEXABLE === undefined && production && Boolean(productionHost));
  const preview = environment.NODE_ENV === "development" ||
    (environment.VERCEL_ENV !== undefined && environment.VERCEL_ENV !== "production");
  return { origin: url.origin, indexable: requested && !preview };
}

export function siteUrl(path: string, origin?: string) { return origin ? new URL(path, origin).toString() : path; }
