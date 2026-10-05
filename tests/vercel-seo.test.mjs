import test from 'node:test';
import assert from 'node:assert/strict';
import { loadSource } from './load-source.mjs';
const { readSiteConfig } = loadSource('src/lib/site-config.ts');
const platform = { NODE_ENV: 'production', VERCEL_ENV: 'production', VERCEL_PROJECT_PRODUCTION_URL: 'example.com' };

test('الإنتاج يستخدم عنوان المشروع الثابت ويفتح الفهرسة دون عنوان نشر مؤقت', () => {
  assert.deepEqual({ ...readSiteConfig({ ...platform, VERCEL_URL: 'temporary-deployment.vercel.app' }) }, { origin: 'https://example.com', indexable: true });
  assert.deepEqual({ ...readSiteConfig({ NODE_ENV: 'production', VERCEL_ENV: 'production', VERCEL_URL: 'temporary-deployment.vercel.app', SITE_INDEXABLE: 'true' }) }, { indexable: false });
});
test('المعاينة تستخدم أصل الإنتاج دون فهرسة حتى مع طلبها صراحة', () => {
  for (const extra of [{ VERCEL_ENV: 'preview' }, { VERCEL_ENV: 'development' }, { NODE_ENV: 'development' }]) {
    assert.deepEqual({ ...readSiteConfig({ ...platform, ...extra, SITE_INDEXABLE: 'true' }) }, { origin: 'https://example.com', indexable: false });
  }
});
test('إيقاف الفهرسة الصريح يبقى محترمًا في الإنتاج', () => {
  for (const flag of ['false', '', 'TRUE']) assert.equal(readSiteConfig({ ...platform, SITE_INDEXABLE: flag }).indexable, false);
  assert.equal(readSiteConfig({ VERCEL_PROJECT_PRODUCTION_URL: 'example.com' }).indexable, false);
});
test('النطاق المخصص الصريح يتقدم على نطاق المنصة', () => {
  assert.equal(readSiteConfig({ ...platform, SITE_URL: 'https://custom.example/' }).origin, 'https://custom.example');
});
test('متغير نطاق المنصة لا يقبل مسارًا أو بروتوكولًا أو عنوانًا محليًا', () => {
  for (const value of ['https://example.com', 'example.com/path', 'example.com?x=1', 'user:pass@example.com', '127.0.0.1', 'localhost']) {
    assert.throws(() => readSiteConfig({ ...platform, VERCEL_PROJECT_PRODUCTION_URL: value }), /VERCEL_PROJECT_PRODUCTION_URL/);
  }
});
