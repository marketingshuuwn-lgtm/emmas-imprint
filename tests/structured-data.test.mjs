import test from 'node:test';
import assert from 'node:assert/strict';
import { loadSource } from './load-source.mjs';
const { homeSchema, businessSchema, plantPageSchema, catalogSchema, servicesSchema } = loadSource('src/lib/structured-data.ts');
const { serializeJsonLd } = loadSource('src/lib/json-ld.ts');
const { readableHours } = loadSource('src/content/business-hours.ts');
const { siteContent } = loadSource('src/content/site-content.ts');
const { plantPages } = loadSource('src/content/plant-pages.ts');
const { allPlantsCatalog } = loadSource('src/content/plants-catalog-data.ts');
const origin = 'https://example.com';
const node = (schema, type) => schema['@graph'].find(item => item['@type'] === type);

test('بيانات النشاط لا تفترض سعرًا أو دفعًا أو صورة فعلية', () => {
  const business = businessSchema(origin);
  for (const key of ['priceRange', 'paymentAccepted', 'currenciesAccepted', 'image', 'aggregateRating', 'review', 'award']) assert.equal(business[key], undefined);
  assert.equal(business['@type'], 'GardenStore');
  assert.equal(business.telephone, siteContent.business.phone);
  assert.equal(business.geo.latitude, siteContent.business.coordinates.latitude);
  assert.equal(business.url, `${origin}/`);
});
test('الدوام بعد منتصف الليل يمتد من يوم الفتح ولا يتحول إلى إغلاق يومي', () => {
  const hours = businessSchema(origin).openingHoursSpecification;
  assert.equal(hours[0].opens, '08:00');
  assert.equal(hours[1].opens, '12:30');
  assert.ok(hours.every(item => item.closes === '00:30'));
  assert.equal(new Set(hours.flatMap(item => item.dayOfWeek)).size, 7);
  assert.match(readableHours(hours[0]), /8:00 صباحًا إلى 12:30 بعد منتصف الليل/);
  assert.match(readableHours(hours[1]), /12:30 ظهرًا إلى 12:30 بعد منتصف الليل/);
});
test('سيكما الأسئلة تطابق المصدر والرئيسية لا تدعي مسار نباتات حاليًا', () => {
  const home = homeSchema(origin);
  assert.equal(node(home, 'BreadcrumbList'), undefined);
  const faq = node(home, 'FAQPage');
  assert.equal(faq.mainEntity.length, siteContent.faq.items.length);
  faq.mainEntity.forEach((question, index) => {
    assert.equal(question.name, siteContent.faq.items[index].question);
    assert.equal(question.acceptedAnswer.text, siteContent.faq.items[index].answer);
  });
});
test('مسار الصفحات الفرعية يطابق مسار التصفح الظاهر والأسماء المراجعة', () => {
  for (const page of plantPages) {
    const schema = plantPageSchema(page, origin);
    const crumbs = node(schema, 'BreadcrumbList').itemListElement;
    assert.equal(crumbs.length, 3);
    assert.equal(crumbs[0].item, `${origin}/`);
    assert.equal(crumbs[1].item, `${origin}/plants`);
    assert.equal(crumbs[2].item, `${origin}/plants/${page.slug}`);
    assert.equal(crumbs[2].name, page.label);
    assert.ok(page.plants.every(plant => allPlantsCatalog.some(entry => entry.name === plant.name)));
  }
});
test('الخدمات تمثل نطاق الطلب الفعلي دون اختراع عروض شراء', () => {
  const schema = servicesSchema(origin);
  const services = schema['@graph'].filter(item => item['@type'] === 'Service');
  assert.equal(services.length, siteContent.services.items.length);
  services.forEach((service, index) => {
    assert.equal(service.name, siteContent.services.items[index].title);
    assert.equal(service.description, siteContent.services.items[index].description);
    assert.equal(service.url, `${origin}/services#${siteContent.services.items[index].id}`);
    assert.equal(service.offers, undefined);
  });
});
test('قائمة الدليل تمثل البطاقات الظاهرة حتى بعد التصفية والعرض التدريجي', () => {
  for (const plants of [[], allPlantsCatalog.slice(0, 1), allPlantsCatalog.slice(0, 40)]) {
    const list = node(catalogSchema(plants, origin), 'CollectionPage').mainEntity;
    assert.equal(list.numberOfItems, plants.length);
    list.itemListElement.forEach((item, index) => {
      assert.equal(item.position, index + 1);
      assert.equal(item.item.name, plants[index].name);
      assert.equal(item.item.offers, undefined);
    });
  }
});
test('المعرّف المشترك ثابت بين الصفحات ولا يحتوي النطاق القديم', () => {
  const graphs = [homeSchema(origin), servicesSchema(origin), catalogSchema([], origin), ...plantPages.map(page => plantPageSchema(page, origin))];
  for (const schema of graphs) {
    assert.equal(node(schema, 'GardenStore')['@id'], `${origin}/#business`);
    assert.ok(!JSON.stringify(schema).includes('emma-nursery.sa'));
    assert.ok(!JSON.stringify(schema).includes('/projects'));
  }
});
test('المحتوى لا يستطيع إنهاء عنصر JSON-LD وإدخال وسم قابل للتنفيذ', () => {
  const value = { name: '</script><script>alert(1)</script>\u2028\u2029' };
  const serialized = serializeJsonLd(value);
  assert.ok(!serialized.includes('<'));
  assert.deepEqual(JSON.parse(serialized), value);
});
