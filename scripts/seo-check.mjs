import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export const routes = ['/', '/plants', '/plants/indoor', '/plants/outdoor', '/plants/offices', '/services'];
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(match => [match[1].toLowerCase(), decode(match[2] ?? match[3])]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(match => attrs(match[0]));

export function inspectPage(html, { route, origin, mode, robotsHeader = '' }) {
  const metas = tags(html, 'meta');
  const meta = key => metas.filter(item => item.name === key || item.property === key).map(item => item.content);
  const single = key => { const values = meta(key); assert.equal(values.length, 1, `${route}: ${key} count`); assert.ok(values[0]?.trim(), `${route}: ${key} empty`); return values[0]; };
  const titles = [...html.matchAll(/<title\b[^>]*>(.*?)<\/title>/gis)];
  assert.equal(titles.length, 1, `${route}: title count`);
  const title = decode(titles[0][1]);
  assert.ok(title.trim(), `${route}: empty title`);
  const description = single('description');
  assert.match(html, /<html\b[^>]*\blang="ar"[^>]*\bdir="rtl"/i, `${route}: Arabic direction`);
  assert.equal(tags(html, 'h1').length, 1, `${route}: h1 count`);
  const directives = single('robots').toLowerCase().split(/[\s,]+/);
  if (mode === 'public') {
    assert.ok(directives.includes('index') && !directives.includes('noindex') && !directives.includes('none'), `${route}: public indexing blocked`);
    assert.doesNotMatch(robotsHeader, /noindex|none/i, `${route}: X-Robots-Tag blocks indexing`);
    assert.ok(!meta('googlebot').some(value => /noindex|none/i.test(value)), `${route}: googlebot indexing blocked`);
  } else assert.ok(directives.includes('noindex'), `${route}: preview indexable`);
  const canonical = tags(html, 'link').filter(item => item.rel === 'canonical');
  if (origin) {
    assert.equal(canonical.length, 1, `${route}: canonical count`);
    assert.equal(new URL(canonical[0].href).href, new URL(route, origin).href, `${route}: wrong canonical`);
    assert.equal(new URL(single('og:url')).href, new URL(route, origin).href, `${route}: wrong social URL`);
  } else assert.equal(canonical.length, 0, `${route}: unexpected canonical`);
  assert.equal(single('og:title'), title, `${route}: social title`);
  assert.equal(single('og:description'), description, `${route}: social description`);
  assert.equal(single('twitter:card'), 'summary_large_image', `${route}: social card`);
  const image = single('og:image');
  assert.equal(single('twitter:image'), image, `${route}: inconsistent social image`);
  if (origin) assert.equal(image, `${origin}/images/social-card.png`, `${route}: wrong social image origin`);
  assert.equal(single('og:image:width'), '1200');
  assert.equal(single('og:image:height'), '630');
  const schemas = [...html.matchAll(/<script\b([^>]*)>(.*?)<\/script>/gis)].filter(match => attrs(match[1]).type === 'application/ld+json').map(match => JSON.parse(match[2]));
  assert.equal(schemas.length, 1, `${route}: JSON-LD count`);
  const graph = schemas[0]['@graph'];
  assert.ok(Array.isArray(graph), `${route}: schema graph missing`);
  assert.equal(schemas[0]['@context'], 'https://schema.org');
  const ids = graph.map(node => node['@id']);
  assert.equal(new Set(ids).size, ids.length, `${route}: duplicate schema IDs`);
  const prefix = origin ?? '';
  assert.ok(ids.includes(`${prefix}/#business`) && ids.includes(`${prefix}/#website`), `${route}: business or website missing`);
  const page = graph.find(node => node['@id'] === `${prefix}${route}#webpage`);
  assert.ok(page, `${route}: page schema missing`);
  assert.equal(page.url, `${prefix}${route}`, `${route}: schema page URL`);
  assert.equal(page.name, title, `${route}: schema page title`);
  const visit = value => {
    if (!value || typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) {
      if (typeof child === 'string' && ['@id', 'url', 'logo', 'item'].includes(key)) {
        if (origin) assert.equal(new URL(child).origin, origin, `${route}: foreign or relative schema ${key}`);
        else assert.ok(child.startsWith('/'), `${route}: unexpected schema origin`);
      } else visit(child);
    }
  };
  visit(graph);
  const types = graph.map(node => node['@type']);
  assert.ok(types.includes(route === '/' || route === '/services' ? 'WebPage' : 'CollectionPage'));
  if (route !== '/') assert.ok(types.includes('BreadcrumbList'), `${route}: breadcrumb missing`);
  if (route === '/') assert.ok(types.includes('FAQPage'), `${route}: FAQ missing`);
  if (route === '/services') assert.equal(types.filter(type => type === 'Service').length, 4);
  return { route, title, description, canonical: canonical[0]?.href ?? null, robots: meta('robots')[0], image, schemaTypes: types };
}

export async function checkSite({ base, origin, mode }) {
  assert.ok(['public', 'preview'].includes(mode), 'Choose --mode public or preview');
  const address = new URL(base);
  assert.ok(['http:', 'https:'].includes(address.protocol) && address.pathname === '/' && !address.search && !address.hash && !address.username && !address.password, 'Base must be a HTTP(S) origin');
  if (origin) { const url = new URL(origin); assert.equal(url.protocol, 'https:'); assert.equal(url.origin, origin); }
  if (mode === 'public') assert.ok(origin, 'Public checks require --origin');
  const get = async (path, options) => fetch(new URL(path, base), { signal: AbortSignal.timeout(30000), ...options });
  const pages = [];
  for (const route of routes) {
    const response = await get(route);
    assert.equal(response.status, 200, `${route}: HTTP status`);
    assert.equal(new URL(response.url).pathname, route, `${route}: unexpected redirect`);
    pages.push(inspectPage(await response.text(), { route, origin, mode, robotsHeader: response.headers.get('x-robots-tag') ?? '' }));
  }
  assert.equal(new Set(pages.map(page => page.title)).size, routes.length, 'Duplicate page titles');
  assert.equal(new Set(pages.map(page => page.description)).size, routes.length, 'Duplicate page descriptions');
  const robotsResponse = await get('/robots.txt');
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  const sitemapResponse = await get('/sitemap.xml');
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  const locations = [...sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(match => decode(match[1].trim()));
  if (mode === 'public') {
    assert.match(robots, /^Allow: \/\s*$/m);
    assert.doesNotMatch(robots, /^Disallow: \//m);
    assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
    assert.deepEqual([...locations].sort(), routes.map(route => new URL(route, origin).href).sort());
  } else {
    assert.match(robots, /^Disallow: \/\s*$/m);
    assert.equal(locations.length, 0);
  }
  const imageResponse = await get('/images/social-card.png');
  assert.equal(imageResponse.status, 200);
  const png = Buffer.from(await imageResponse.arrayBuffer());
  assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  const redirect = await get('/projects?category=indoor', { redirect: 'manual' });
  assert.equal(redirect.status, 308);
  const location = new URL(redirect.headers.get('location'), base);
  assert.equal(location.pathname, '/plants');
  assert.equal(location.search, '?category=indoor');
  for (const route of ['/this-page-does-not-exist', '/SITE_CONTENT.md']) assert.equal((await get(route)).status, 404, `${route}: must be unavailable`);
  return { checkedAt: new Date().toISOString(), base, origin: origin ?? null, mode, passed: true, pages, robots, sitemapUrls: locations, socialImage: { width: 1200, height: 630 }, redirect: { status: 308, path: location.pathname, search: location.search }, missingRoutes: true };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const args = process.argv.slice(2);
    const option = name => args[args.indexOf(name) + 1];
    const options = { base: args.includes('--base') ? option('--base') : undefined, origin: args.includes('--origin') ? option('--origin') : undefined, mode: args.includes('--mode') ? option('--mode') : undefined };
    assert.ok(options.base, 'Usage: node scripts/seo-check.mjs --base URL --mode public|preview [--origin https://domain] [--output file.json]');
    const result = await checkSite(options);
    if (args.includes('--output')) await writeFile(option('--output'), `${JSON.stringify(result, null, 2)}\n`);
    console.log(`SEO check passed: ${result.mode}, ${result.pages.length} pages, ${result.sitemapUrls.length} sitemap URLs.`);
  } catch (error) { console.error(`SEO check failed: ${error.message}`); process.exitCode = 1; }
}
