import test from 'node:test';
import assert from 'node:assert/strict';
import { loadSource } from './load-source.mjs';
const { readSiteConfig } = loadSource('src/lib/site-config.ts');
const { pageMetadata, siteRobots, siteSitemap } = loadSource('src/lib/seo.ts');
const { corePages } = loadSource('src/content/page-info.ts');
const { plantPages } = loadSource('src/content/plant-pages.ts');
const publicConfig = readSiteConfig({ SITE_URL: 'https://example.com/', SITE_INDEXABLE: 'true', NODE_ENV: 'production' });

test('غياب النطاق يمنع الفهرسة حتى مع تفعيل العلم', () => {
  const config = readSiteConfig({ SITE_INDEXABLE: 'true' });
  assert.equal(config.indexable, false);
  assert.equal(pageMetadata(corePages.catalog, config).alternates, undefined);
  assert.equal(siteSitemap(config).length, 0);
  assert.equal(siteRobots(config).rules.disallow, '/');
});
test('النطاق وحده لا يفهرس المعاينة والتطوير لا يُفهرس', () => {
  for (const extra of [{}, { SITE_INDEXABLE: 'true', NODE_ENV: 'development' }, { SITE_INDEXABLE: 'true', VERCEL_ENV: 'preview' }]) {
    assert.equal(readSiteConfig({ SITE_URL: 'https://example.com', ...extra }).indexable, false);
  }
});
test('رفض النطاق غير الصالح والروابط التي تحتوي اعتماديات أو مسارات', () => {
  for (const value of ['emma-nursery.sa', 'http://example.com', 'https://localhost', 'https://127.0.0.1', 'https://user:pass@example.com', 'https://example.com/path', 'https://example.com/?x=1']) {
    assert.throws(() => readSiteConfig({ SITE_URL: value }), /SITE_URL/);
  }
});
test('الفهرسة العامة تستخدم النطاق المؤكد وتحذف المسار القديم والفلاتر من الخريطة', () => {
  const urls = siteSitemap(publicConfig).map(row => row.url);
  assert.equal(urls.length, 6);
  assert.equal(new Set(urls).size, 6);
  assert.ok(urls.includes('https://example.com/plants/offices'));
  assert.ok(urls.every(url => !url.includes('/projects') && !url.includes('?') && !url.includes('#')));
  assert.equal(siteRobots(publicConfig).sitemap, 'https://example.com/sitemap.xml');
});
test('كل صفحة لها عنوان ووصف ورابط أساسي وبيانات مشاركة تخصها', () => {
  const pages = [...Object.values(corePages), ...plantPages.map(page => ({ ...page, path: `/plants/${page.slug}` }))];
  assert.equal(new Set(pages.map(page => page.title)).size, 6);
  assert.equal(new Set(pages.map(page => page.description)).size, 6);
  for (const page of pages) {
    const metadata = pageMetadata(page, publicConfig);
    assert.equal(metadata.alternates.canonical, `https://example.com${page.path}`);
    assert.equal(metadata.openGraph.title, page.title);
    assert.equal(metadata.twitter.description, page.description);
    assert.equal(metadata.robots.index, true);
    assert.equal(metadata.openGraph.images[0].width, 1200);
    assert.equal(metadata.openGraph.images[0].height, 630);
  }
});
