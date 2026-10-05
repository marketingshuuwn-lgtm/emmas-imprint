import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

function loadSource(file) {
  const context = {exports:{}};
  const source = fs.readFileSync(new URL(file, import.meta.url), "utf8");
  vm.runInNewContext(ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,context);
  return context.exports;
}
const {allPlantsCatalog} = loadSource("../src/content/plants-catalog-data.ts");
const {matchesPlantSearch,normalizePlantSearch} = loadSource("../src/lib/plant-search.ts");
const names = query => Array.from(allPlantsCatalog.filter(p=>matchesPlantSearch(p,query)),p=>p.name).sort();

test("الأكاسيا تظهر بالهمزة وبدونها ومع التشكيل",()=>{
  assert.deepEqual(names("اكاسيا"),["أكاسيا","أكاسيا جلوكا"]);
  assert.deepEqual(names("أَكَاسِيَا"),names("اكاسيا"));
});
test("مرادفات الأجلاونيما تصل لنفس النبات",()=>{
  for (const query of ["اجلاونيما","أجلونيما","أغلاونيما","AGLAONEMA"]) assert.deepEqual(names(query),["أجلاونيما"]);
});
test("لا تُخلط الألوكاسيا مع الأكاسيا",()=>{
  assert.deepEqual(names("ألوكاسيا"),["ألوكاسيا"]);
});
test("تطبيع الكلمة المطولة والبحث بعدة كلمات",()=>{
  assert.deepEqual(names("فيلوديندرون برازيل"),["فيلوديندرون برازيـل"]);
  assert.deepEqual(names("  تين   الكمان "),["فيكس ليراتا"]);
});
test("بحث لاتيني واسم شائع",()=>{
  assert.deepEqual(names("zz"),["الزاميا ZZ"]);
  assert.deepEqual(names("snake plant"),["سانسيفيريا / جلد النمر"]);
});
test("البحث الفارغ يعرض الكل والمجهول يعرض صفرًا",()=>{
  assert.equal(names("  ").length,allPlantsCatalog.length);
  assert.deepEqual(names("اسم نبات غير مسجل"),[]);
});
test("الترقيم والمسافات لا تغير البحث",()=>{
  assert.equal(normalizePlantSearch("  إضاءة،  داخليّة! "),"اضاءه داخليه");
});
