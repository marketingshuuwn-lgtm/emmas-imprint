export interface SiteConfig { origin?: string; indexable: boolean; }

export function readSiteConfig(environment: Record<string, string | undefined> = process.env): SiteConfig {
  const value = environment.SITE_URL?.trim();
  if (!value) return { indexable: false };
  let url: URL;
  try { url = new URL(value); } catch { throw new Error("SITE_URL must be an absolute HTTPS origin."); }
  if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash ||
    url.hostname === "localhost" || url.hostname.endsWith(".localhost") || url.hostname === "[::1]" || /^127\./.test(url.hostname)) {
    throw new Error("SITE_URL must be a public HTTPS origin without credentials, path, query or fragment.");
  }
  return { origin: url.origin, indexable: environment.SITE_INDEXABLE === "true" && environment.NODE_ENV !== "development" && environment.VERCEL_ENV !== "preview" };
}

export function siteUrl(path: string, origin?: string) { return origin ? new URL(path, origin).toString() : path; }
