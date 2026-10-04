"use client";

import Image from "next/image";
import { Check, MapPin, Camera, Sparkles } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function About() {
  const { about, business } = siteContent;

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#faf8f5] text-[#1c1f1d] border-b border-[#e8dfd3]"
      aria-labelledby="about-heading"
    >
      <div className="container-main">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Authentic Greenhouse Image (Editorial & Uncluttered - NO floating badges) */}
          <div className="lg:col-span-6">
            <div className="editorial-card rounded-2xl overflow-hidden border border-[#e8dfd3] shadow-md bg-white">
              <div className="relative h-72 sm:h-96 md:h-[420px] w-full">
                <Image
                  src="/images/nursery-greenhouse.jpg"
                  alt="مشتل وبيوت استنبات بصمة ايما الزراعية بالرياض"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Editorial Caption Box Directly Below Photo (Clean & Legible) */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#e8dfd3] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-right">
                <div>
                  <h4 className="font-bold text-sm text-[#102117] font-heading">
                    بيئة استنبات زراعي خاضعة لأعلى المعايير
                  </h4>
                  <p className="text-xs text-[#6f7872] mt-0.5">
                    طريق أبو بكر الصديق، الرياض • تعويد تدريجي لمناخ نجد
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#183324] font-bold bg-[#e9f2ec] px-3 py-1.5 rounded-lg shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#b8603d]" />
                  <span>زيارة ميدانية يومية</span>
                </div>
              </div>
            </div>

            {/* 3 Real Facts (Grounded & Simple) */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="editorial-card p-3 rounded-xl border border-[#e8dfd3] bg-white">
                <span className="block font-black text-lg sm:text-xl text-[#183324] font-heading">+5</span>
                <span className="text-[11px] text-[#6f7872]">سنوات بالرياض</span>
              </div>
              <div className="editorial-card p-3 rounded-xl border border-[#e8dfd3] bg-white">
                <span className="block font-black text-lg sm:text-xl text-[#b8603d] font-heading">50°</span>
                <span className="text-[11px] text-[#6f7872]">تحمل صيف نجد</span>
              </div>
              <div className="editorial-card p-3 rounded-xl border border-[#e8dfd3] bg-white">
                <span className="block font-black text-lg sm:text-xl text-[#183324] font-heading">100%</span>
                <span className="text-[11px] text-[#6f7872]">أصناف مجربة</span>
              </div>
            </div>
          </div>

          {/* Story & Human Copy */}
          <div className="lg:col-span-6 text-right">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8dfd3] text-[#183324] text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#b8603d]" />
              <span>{about.title}</span>
            </div>

            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-black text-[#102117] leading-tight mb-5 font-heading"
            >
              مشتل يفهم تربة الرياض وطقسها، <br />
              <span className="text-[#b8603d]">مو مجرد بائع شتلات.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#424944] prose-ar leading-relaxed mb-6">
              {about.description}
            </p>

            {/* 3 Honest Principles */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#1c1f1d]">
                <div className="w-5 h-5 rounded-full bg-[#e9f2ec] text-[#183324] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#183324]" />
                </div>
                <span><strong>نصارحك بما يناسب مكانك:</strong> إن كانت إضاءة صالتك ضعيفة، لن نبيعك نبتة تتطلب شمس؛ سنرشح لك خياراً يعيش حقاً.</span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#1c1f1d]">
                <div className="w-5 h-5 rounded-full bg-[#e9f2ec] text-[#183324] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#183324]" />
                </div>
                <span><strong>تقسية الجذور في بيوت الاستنبات:</strong> تعويد الشتلات على طقس الرياض حتى لا تتفاجأ بحرارة الجو أو التكييف.</span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#1c1f1d]">
                <div className="w-5 h-5 rounded-full bg-[#e9f2ec] text-[#183324] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#183324]" />
                </div>
                <span><strong>مهندسون زراعيون متواجدون يومياً:</strong> استشارات مباشرة وإشراف كامل على مشاريع الفلل وشبكات الري.</span>
              </div>
            </div>

            {/* Direct Consultation Link */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#183324] hover:bg-[#102117] text-white font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <Camera className="w-4 h-4 text-[#d6c7b5]" />
                <span>تحدث مع مهندس زراعي عبر واتساب</span>
              </a>

              <a
                href="#visit"
                className="text-xs font-semibold text-[#183324] hover:text-[#b8603d] underline underline-offset-4 transition-colors"
              >
                أو زرنا في مشتلنا على طريق أبو بكر ←
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
