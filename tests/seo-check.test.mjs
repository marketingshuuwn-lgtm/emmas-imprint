import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectPage } from '../scripts/seo-check.mjs';

const origin = 'https://example.com';
const options = { route: '/', origin, mode: 'public' };
const schema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'GardenStore', '@id': `${origin}/#business`, url: `${origin}/`, logo: `${origin}/images/logo.png` },
  { '@type': 'WebSite', '@id': `${origin}/#website`, url: `${origin}/` },
  { '@type': 'WebPage', '@id': `${origin}/#webpage`, url: `${origin}/`, name: 'عنوان' },
  { '@type': 'FAQPage', '@id': `${origin}/#faq` },
] };
const html = `<html lang="ar" dir="rtl"><head><title>عنوان</title>
  <meta name="description" content="وصف"><meta name="robots" content="index, follow">
  <link rel="canonical" href="${origin}/"><meta property="og:url" content="${origin}/">
  <meta property="og:title" content="عنوان"><meta property="og:description" content="وصف">
  <meta property="og:image" content="${origin}/images/social-card.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${origin}/images/social-card.png">
  </head><body><h1>عنوان الصفحة</h1><script type="application/ld+json">${JSON.stringify(schema)}</script></body></html>`;

test('فاحص النشر يقبل صفحة عامة متسقة', () => {
  assert.equal(inspectPage(html, options).canonical, `${origin}/`);
  assert.equal(inspectPage(html.replaceAll(`content="${origin}/"`, `content="${origin}"`).replace(`href="${origin}/"`, `href="${origin}"`), options).canonical, origin);
});
test('يكشف حظر الفهرسة سواء في الصفحة أو رأس الاستجابة', () => {
  assert.throws(() => inspectPage(html.replace('index, follow', 'noindex, follow'), options), /blocked/);
  assert.throws(() => inspectPage(html, { ...options, robotsHeader: 'noindex' }), /blocks indexing/);
  assert.throws(() => inspectPage(html, { ...options, mode: 'preview' }), /preview indexable/);
});
test('يكشف رابطًا أساسيًا مكررًا أو نطاق صورة مشاركة خاطئًا', () => {
  assert.throws(() => inspectPage(html.replace('</head>', `<link rel="canonical" href="${origin}/"></head>`), options), /canonical count/);
  assert.throws(() => inspectPage(html.replaceAll(`${origin}/images/social-card.png`, 'http://127.0.0.1:3000/images/social-card.png'), options), /wrong social image origin/);
});
test('يكشف السيكما النسبية والنطاق المؤقت داخل صفحة عامة', () => {
  assert.throws(() => inspectPage(html.replace(`${origin}/images/logo.png`, '/images/logo.png'), options), /Invalid URL/);
  assert.throws(() => inspectPage(html.replace(`${origin}/images/logo.png`, 'https://deployment.example/images/logo.png'), options), /foreign or relative schema/);
});
test('يكشف JSON-LD المكسور واختلاف العنوان بين الصفحة والسيكما', () => {
  assert.throws(() => inspectPage(html.replace('"@context":', '"@context"'), options), SyntaxError);
  assert.throws(() => inspectPage(html.replace('"name":"عنوان"', '"name":"عنوان آخر"'), options), /schema page title/);
});
