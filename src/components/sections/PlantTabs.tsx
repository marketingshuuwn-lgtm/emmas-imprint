"use client";

import { useState, useEffect } from "react";
import { PlantImage } from "@/components/ui/PlantImage";
import { ImageCreditCaption } from "@/components/ui/ImageCreditCaption";
import type { PlantCard } from "@/content/featured-plants";
import type { CatalogPlant } from "@/content/plants-catalog-data";
import Link from "next/link";
import { Sparkles, MessageCircle, ArrowLeft } from "lucide-react";


type FeaturedPlant = PlantCard & Pick<CatalogPlant, "image" | "imageCredit">;

export function PlantTabs({ plants }: { plants: FeaturedPlant[] }) {
  const [activeTab, setActiveTab] = useState<"indoor" | "outdoor" | "work">("indoor");

  // Menu links use #plants-home / #plants-outdoor / #plants-work: open the matching tab
  useEffect(() => {
    const hashToTab: Record<string, "indoor" | "outdoor" | "work"> = {
      "#plants-home": "indoor",
      "#plants-outdoor": "outdoor",
      "#plants-work": "work",
    };
    const sync = () => {
      const tab = hashToTab[window.location.hash];
      if (tab) setActiveTab(tab);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const filtered = plants.filter((p) => p.category === activeTab);

  return (
    <section
      id="plants"
      className="py-12 sm:py-16 lg:py-20 bg-[#faf8f5] text-[#1c1f1d] border-b border-[#e8dfd3]"
      aria-labelledby="plants-heading"
    >
      <div className="container-main">
        {/* Anchor targets for the menu links (all land on this section) */}
        <span id="plants-home" aria-hidden="true" />
        <span id="plants-outdoor" aria-hidden="true" />
        <span id="plants-work" aria-hidden="true" />

        {/* Section Header */}
        <div className="max-w-2xl text-right mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8dfd3] text-[#183324] text-sm font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#9c4c2d]" />
            <span>تشكيلة الأصناف</span>
          </div>

          <h2
            id="plants-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#102117] leading-snug mb-3 font-heading"
          >
            نبتة تناسب المكان، وعناية تناسبك
          </h2>

          <p className="text-sm sm:text-base text-[#424944] leading-relaxed">
            تختلف احتياجات النباتات من الضوء والحرارة والري؛ اختر الفئة التي تبحث عنها لاستعراض أبرز الأصناف:
          </p>
        </div>

        {/* 3 Main Navigation Tabs Matching the User Document */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          {[
            { id: "indoor", label: "نباتات للبيت (صالات، رفوف، مداخل)" },
            { id: "outdoor", label: "خضرة للخارج (أحواش، أسوار، أسطح)" },
            { id: "work", label: "خضرة للعمل (مكاتب ومقرات)" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTab(tab.id as "indoor" | "outdoor" | "work")}
                className={`px-4 py-2.5 rounded-xl text-sm sm:text-sm font-bold transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? "bg-[#183324] text-white border-[#183324] shadow-sm"
                    : "bg-white text-[#424944] border-[#e8dfd3] hover:border-[#b8603d] hover:bg-[#faf8f5]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {filtered.map((item) => {

            return (
            <div
              key={item.id}
              className="editorial-card rounded-2xl overflow-hidden border border-[#e8dfd3] bg-white flex flex-col justify-between"
            >
              <div>

                {/* Photo with Badge */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[#f4efea] border-b border-[#e8dfd3]">
                  <PlantImage src={item.image} name={item.name} sizes="(min-width: 1216px) 368px, (min-width: 1024px) calc(33vw - 38px), (min-width: 768px) calc(50vw - 44px), (min-width: 640px) calc(50vw - 32px), calc(100vw - 40px)" />
                  <div className="absolute top-3 right-3 bg-[#102117]/85 backdrop-blur-sm text-[#faf8f5] text-sm font-bold px-3 py-1 rounded-md">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-right">
                  <h3 className="font-bold text-base sm:text-lg text-[#102117] font-heading leading-snug mb-2">
                    {item.name}
                  </h3>

                  <p className="text-sm sm:text-sm text-[#424944] leading-relaxed">
                    {item.description}
                  </p>
                  <ImageCreditCaption credit={item.imageCredit} />
                </div>

              </div>

              {/* Action */}
              <div className="p-4 pt-0">
                <a
                  href={`https://wa.me/966563340109?text=${encodeURIComponent(
                    `مرحباً بصمة ايما، أود الاستفسار عن توفر وأحجام (${item.name}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#faf8f5] hover:bg-[#183324] text-[#183324] hover:text-white border border-[#e8dfd3] hover:border-[#183324] text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>استفسار عن السعر والتوفر</span>
                </a>
              </div>

            </div>
            );
          })}
        </div>

        {/* 100+ Plants Catalog Anchor */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#183324] text-white flex flex-col sm:flex-row items-center justify-between gap-5 border border-[#2f5d43]">
          <div className="text-right">
            <h3 className="font-bold text-base sm:text-lg text-white mb-1 font-heading leading-snug">
              استعرض دليل النباتات
            </h3>
            <p className="text-sm sm:text-sm text-[#d6c7b5] leading-relaxed">
              ابحث بالاسم واختر النباتات الداخلية أو الخارجية، ثم اسأل عن السعر والحجم والتوفر.
            </p>
          </div>

          <Link
            href="/plants"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#9c4c2d] hover:bg-[#7f3d25] text-white font-bold text-sm sm:text-sm shrink-0 shadow-md transition-all active:scale-98"
          >
            <span>تصفح النباتات</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
