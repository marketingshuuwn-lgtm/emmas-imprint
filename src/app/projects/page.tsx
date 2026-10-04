"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Sprout,
  TreePine,
  ArrowRight,
  MessageCircle,
  LayoutGrid,
  List,
  Filter,
  Phone,
  BookOpen,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { indoorPlants, outdoorPlants, allPlantsCatalog, CatalogPlant } from "@/content/plants-catalog-data";
import { siteContent } from "@/content/site-content";

export default function ProjectsCatalogPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "indoor" | "outdoor">("all");
  const [selectedPriority, setSelectedPriority] = useState<0 | 1 | 2 | 3>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Filtered plants list
  const filteredList = useMemo(() => {
    let list: CatalogPlant[] = [];

    if (activeCategory === "all") {
      list = allPlantsCatalog;
    } else if (activeCategory === "indoor") {
      list = indoorPlants;
    } else {
      list = outdoorPlants;
    }

    if (selectedPriority > 0) {
      list = list.filter((p) => p.priority === selectedPriority);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }

    return list;
  }, [activeCategory, selectedPriority, searchQuery]);

  // Statistics
  const maxPriorityCount = allPlantsCatalog.filter((p) => p.priority === 3).length;
  const highPriorityCount = allPlantsCatalog.filter((p) => p.priority === 2).length;
  const specialPriorityCount = allPlantsCatalog.filter((p) => p.priority === 1).length;

  return (
    <div className="min-h-screen bg-[#f8faf8] text-[#0f2416] flex flex-col font-sans">
      <Header />

      {/* Hero Banner for Botanical Encyclopedia */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-[#071d12] via-[#0d2a1b] to-[#123624] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-main relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-emerald-300/80 mb-4">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>الرئيسية</span>
            </Link>
            <span>/</span>
            <span className="text-white font-bold">موسوعة النباتات والأشجار</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/60 text-emerald-300 text-xs font-bold mb-4 border border-emerald-500/30">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>موسوعة النباتات المعتمدة • {siteContent.business.name}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              دليل نباتات الفلل والمشاريع <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                100 صنف منتقى بأولويات التخزين والتوريد
              </span>
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 prose-ar leading-relaxed max-w-2xl">
              موسوعة شاملة ومصورة تضم أجود نباتات الظل الداخلية وأشجار المشهد الطبيعي الخارجية،
              مؤقلمة ومجهزة للتوريد الفوري لمشاريع الفلل والحدائق في الرياض.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-8 border-t border-emerald-800/40 text-xs">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-emerald-300/80 block mb-0.5">إجمالي الأصناف الموثقة</span>
              <span className="text-2xl font-black text-white">100 صنف</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-emerald-300/80 block mb-0.5">أولوية قصوى 🔥🔥🔥</span>
              <span className="text-2xl font-black text-amber-400">{maxPriorityCount} صنفاً</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-emerald-300/80 block mb-0.5">أولوية عالية 🔥🔥</span>
              <span className="text-2xl font-black text-emerald-300">{highPriorityCount} صنفاً</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-emerald-300/80 block mb-0.5">أولوية خاصة 🔥</span>
              <span className="text-2xl font-black text-teal-200">{specialPriorityCount} صنفاً</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Catalog Section */}
      <main className="flex-1 py-10 md:py-16">
        <div className="container-main">

          {/* Controls Bar: Search, Category Tabs, Priority, View Switcher */}
          <div className="bg-white rounded-3xl p-5 md:p-6 border border-emerald-100 shadow-xl mb-8 space-y-4">
            
            {/* Top row: Search input + View Switch */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-emerald-600 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="ابحث عن اسم النبتة أو الشجرة (مثال: مونستيرا، جهنمية، واشنطونيا، زاميا...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all placeholder:text-emerald-800/40"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-emerald-600 hover:text-emerald-950 font-bold"
                  >
                    مسح
                  </button>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1.5 self-end md:self-auto bg-emerald-50 p-1.5 rounded-2xl border border-emerald-200/60">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-emerald-900 shadow-sm"
                      : "text-emerald-700 hover:text-emerald-950"
                  }`}
                  aria-label="عرض البطاقات"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>بطاقات مصورة</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    viewMode === "table"
                      ? "bg-white text-emerald-900 shadow-sm"
                      : "text-emerald-700 hover:text-emerald-950"
                  }`}
                  aria-label="عرض الجدول"
                >
                  <List className="w-4 h-4" />
                  <span>جدول</span>
                </button>
              </div>

            </div>

            {/* Bottom row: Category Tabs + Priority Pill Filter */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pt-3 border-t border-emerald-100">
              
              {/* Category Selection Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === "all"
                      ? "bg-emerald-800 text-white shadow-md shadow-emerald-950/20"
                      : "bg-emerald-50 hover:bg-emerald-100 text-emerald-900"
                  }`}
                >
                  <span>كافة النباتات</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/20 text-white font-mono">
                    100
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCategory("indoor")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === "indoor"
                      ? "bg-emerald-800 text-white shadow-md shadow-emerald-950/20"
                      : "bg-emerald-50 hover:bg-emerald-100 text-emerald-900"
                  }`}
                >
                  <Sprout className="w-4 h-4 text-emerald-400" />
                  <span>النباتات الداخلية</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/20 text-white font-mono">
                    50
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCategory("outdoor")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === "outdoor"
                      ? "bg-emerald-800 text-white shadow-md shadow-emerald-950/20"
                      : "bg-emerald-50 hover:bg-emerald-100 text-emerald-900"
                  }`}
                >
                  <TreePine className="w-4 h-4 text-teal-400" />
                  <span>الأشجار والنباتات الخارجية</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/20 text-white font-mono">
                    50
                  </span>
                </button>
              </div>

              {/* Priority Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-emerald-900/60 font-semibold flex items-center gap-1 text-[11px]">
                  <Filter className="w-3.5 h-3.5" />
                  الأولوية:
                </span>
                
                <button
                  type="button"
                  onClick={() => setSelectedPriority(0)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                    selectedPriority === 0
                      ? "bg-emerald-200 text-emerald-950"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  الكل
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPriority(3)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1 ${
                    selectedPriority === 3
                      ? "bg-amber-100 text-amber-950 border border-amber-300"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>🔥🔥🔥</span>
                  <span>قصوى</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPriority(2)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1 ${
                    selectedPriority === 2
                      ? "bg-emerald-100 text-emerald-950 border border-emerald-300"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>🔥🔥</span>
                  <span>عالية</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPriority(1)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1 ${
                    selectedPriority === 1
                      ? "bg-teal-100 text-teal-950 border border-teal-300"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>🔥</span>
                  <span>خاصة</span>
                </button>
              </div>

            </div>

          </div>

          {/* Results Header Counter */}
          <div className="flex items-center justify-between mb-6 px-2 text-xs text-emerald-900/80">
            <span>
              عرض <strong className="text-emerald-900 font-black">{filteredList.length}</strong> نبتة متطابقة
              {searchQuery && ` لنتيجة البحث: "${searchQuery}"`}
            </span>
            <span className="hidden sm:inline text-emerald-700/70">
              جميع الأصناف مؤقلمة ومجهزة للتوريد في الرياض
            </span>
          </div>

          {/* Empty State */}
          {filteredList.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center border border-emerald-100 my-8">
              <Search className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-emerald-950 mb-1">لم يتم العثور على نباتات مطابقة</h3>
              <p className="text-sm text-emerald-800/70 mb-4">جرب البحث بكلمة أخرى أو تعديل خيارات الفلترة.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                  setSelectedPriority(0);
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-xs"
              >
                إعادة ضبط البحث
              </button>
            </div>
          )}

          {/* GRID VIEW (With Botanical Photos) */}
          {viewMode === "grid" && filteredList.length > 0 && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredList.map((plant, index) => (
                <div
                  key={`${plant.type}-${plant.id}`}
                  className="bg-white rounded-2xl border border-emerald-100/90 overflow-hidden hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Plant Visual Photo */}
                    <div className="relative h-44 sm:h-48 w-full bg-emerald-50 overflow-hidden">
                      <Image
                        src={plant.image}
                        alt={plant.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-2.5 right-2.5 left-2.5 flex items-center justify-between">
                        <span className="font-mono bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-lg border border-white/20">
                          #{index + 1}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${
                            plant.type === "indoor"
                              ? "bg-emerald-600 text-white"
                              : "bg-teal-600 text-white"
                          }`}
                        >
                          {plant.type === "indoor" ? "داخلي" : "خارجي"}
                        </span>
                      </div>

                      {/* Overlaid Priority Badge */}
                      <div className="absolute bottom-2.5 right-2.5">
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-black/75 backdrop-blur-md text-white text-[11px] font-bold border border-amber-400/40">
                          <span>{plant.priorityBadge}</span>
                          <span className="text-amber-300 text-[10px]">{plant.priorityLabel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Plant Details */}
                    <div className="p-4">
                      <h3 className="text-base font-black text-emerald-950 mb-1 group-hover:text-emerald-700 transition-colors leading-snug">
                        {plant.name}
                      </h3>
                      <p className="text-[11px] text-emerald-800/60 font-medium">
                        {plant.type === "indoor" ? "نبات ظل وعناية داخلية" : "أشجار وزراعة خارجية للمشهد الطبيعي"}
                      </p>
                    </div>
                  </div>

                  {/* Order & Inquire Action */}
                  <div className="p-4 pt-0">
                    <a
                      href={`https://wa.me/966563340109?text=${encodeURIComponent(
                        `مرحباً بصمة ايما الزراعية، أود الاستفسار عن توفر وطلب كميات من: (${plant.name}) - [${plant.typeLabel}].`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-700 text-emerald-900 hover:text-white font-bold text-xs transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>طلب وتوريد عبر واتساب</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TABLE VIEW (With Photo Thumbnails) */}
          {viewMode === "table" && filteredList.length > 0 && (
            <div className="bg-white rounded-3xl border border-emerald-100 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-emerald-900 text-white font-bold border-b border-emerald-800">
                    <tr>
                      <th className="py-4 px-4 w-14">#</th>
                      <th className="py-4 px-3 w-16">الصورة</th>
                      <th className="py-4 px-4">اسم النبتة / الشجرة</th>
                      <th className="py-4 px-4">البيئة</th>
                      <th className="py-4 px-4">أولوية التخزين</th>
                      <th className="py-4 px-4 text-center">الإجراء المباشر</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-50">
                    {filteredList.map((plant, index) => (
                      <tr
                        key={`${plant.type}-${plant.id}`}
                        className="hover:bg-emerald-50/60 transition-colors"
                      >
                        <td className="py-3 px-4 font-mono font-bold text-emerald-900/50">
                          {index + 1}
                        </td>
                        <td className="py-3 px-3">
                          <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-emerald-200/80 bg-emerald-50 shrink-0">
                            <Image
                              src={plant.image}
                              alt={plant.name}
                              fill
                              className="object-cover"
                              sizes="44px"
                            />
                          </div>
                        </td>
                        <td className="py-3 px-4 font-black text-emerald-950 text-sm">
                          {plant.name}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                              plant.type === "indoor"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-teal-100 text-teal-800"
                            }`}
                          >
                            {plant.type === "indoor" ? "داخلي" : "خارجي"}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 font-bold text-xs">
                            <span>{plant.priorityBadge}</span>
                            <span>{plant.priorityLabel}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <a
                            href={`https://wa.me/966563340109?text=${encodeURIComponent(
                              `مرحباً بصمة ايما الزراعية، أود الاستفسار عن توفر وطلب كميات من: (${plant.name}) - [${plant.typeLabel}].`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>استفسار وتوريد</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Project Procurement CTA Banner */}
          <div className="mt-14 bg-gradient-to-r from-[#071d12] via-[#0b291a] to-[#0e3522] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-8">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
                  توريد مشاريع الفلل والمجمعات
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mb-3">
                  هل تحتاج كميات أو جداول كميات (BOQ) لمشروعك؟
                </h3>
                <p className="text-sm text-emerald-100/80 prose-ar leading-relaxed">
                  نوفر خدمات التوريد المباشر لمقاولي اللاندسكيب وملاك الفلل والقصور بأعلى معايير الجودة والتأقلم مع مناخ الرياض، مع إشراف مهندس زراعي متخصص.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3">
                <a
                  href={`https://wa.me/966563340109?text=${encodeURIComponent(
                    "مرحباً بصمة ايما الزراعية، أود طلب عرض سعر وجدول كميات نباتات لمشروع حديقة في الرياض."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-black text-sm shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-950" />
                  <span>طلب تسعيرة كميات للمشروع</span>
                </a>

                <a
                  href={`tel:${siteContent.business.phone}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl border border-emerald-500/40 hover:bg-white/10 text-white font-bold text-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>اتصال مباشر: {siteContent.business.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
