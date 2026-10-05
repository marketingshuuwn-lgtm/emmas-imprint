import type { CatalogPlant } from "@/content/plants-catalog-data";

export function normalizePlantSearch(value: string): string {
  return value.normalize("NFKC").toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
    .replace(/[^\p{L}\p{N}]+/gu, " ").trim().replace(/\s+/g, " ");
}

const aliases: Record<string, string[]> = {
  "أجلاونيما": ["أجلونيما", "أغلاونيما", "aglaonema"],
  "الزاميا ZZ": ["زاميا", "زميكولكاس", "zamioculcas"],
  "سانسيفيريا / جلد النمر": ["sansevieria", "snake plant"],
  "مونستيرا": ["monstera", "القفص الصدري"],
  "فيكس ليراتا": ["تين الكمان", "ficus lyrata"],
  "جهنمية": ["الجهنمية", "bougainvillea"],
  "بوتس ذهبي Pothos": ["البوتس", "بوتس ذهبي"],
  "فيلوديندرون برازيـل": ["فيلوديندرون برازيل"],
};

export function matchesPlantSearch(plant: CatalogPlant, query: string): boolean {
  const words = normalizePlantSearch(query).split(" ").filter(Boolean);
  const text = normalizePlantSearch([plant.name, plant.scientificOrAlt ?? "", ...(plant.aliases ?? []), ...(aliases[plant.name] ?? [])].join(" "));
  return words.every(word => text.includes(word));
}
