"use client";

import Image from "next/image";
import { Check, MapPin, Camera, Sparkles } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function About() {
  const { about, business } = siteContent;

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-[#faf8f5] text-[#1c1f1d] border-b border-[#e8dfd3]"
      aria-labelledby="about-heading"
    >
      <div className="container-main">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Authentic Greenhouse Image */}
          <div className="lg:col-span-6">
            <div className="editorial-card rounded-2xl overflow-hidden border border-[#e8dfd3] shadow-sm bg-white">
              <div className="relative h-64 sm:h-80 md:h-[400px] w-full">
                <Image
                  src="/images/nursery-greenhouse.jpg"
                  alt="مشتل وبيوت استنبات بصمة ايما الزراعية في الرياض"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Editorial Caption Box Directly Below Photo */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#e8dfd3] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-right">
                <div>
                  <h4 className="font-bold text-sm text-[#102117] font-heading leading-snug">
                    في المشتل تبدأ العناية
                  </h4>
                  <p className="text-xs text-[#6f7872] mt-0.5 leading-relaxed">
                    طريق أبو بكر الصديق، الرياض • بيوت محمية وتأصيل محلي للشتلات
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#183324] font-bold bg-[#e9f2ec] px-3 py-1.5 rounded-lg shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#b8603d]" />
                  <span>زيارة يومية متاحة</span>
                </div>
              </div>
            </div>

            {/* Facts from User Document */}
            <div className="grid grid-cols-3 gap-2.5 mt-3.5 text-center">
              <div className="editorial-card p-3 rounded-xl border border-[#e8dfd3] bg-white">
                <span className="block font-black text-lg text-[#183324] font-heading">+5</span>
                <span className="text-[10px] sm:text-[11px] text-[#6f7872] leading-tight">سنوات عمل زراعي</span>
              </div>
              <div className="editorial-card p-3 rounded-xl border border-[#e8dfd3] bg-white">
                <span className="block font-black text-lg text-[#b8603d] font-heading">+147</span>
                <span className="text-[10px] sm:text-[11px] text-[#6f7872] leading-tight">حديقة وفيلا منفذة</span>
              </div>
              <div className="editorial-card p-3 rounded-xl border border-[#e8dfd3] bg-white">
                <span className="block font-black text-lg text-[#183324] font-heading">+100</span>
                <span className="text-[10px] sm:text-[11px] text-[#6f7872] leading-tight">صنف مسجل ومعتمد</span>
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
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#102117] leading-snug mb-4 font-heading"
            >
              {about.subtitle}
            </h2>

            <p className="text-sm sm:text-base text-[#424944] leading-relaxed mb-4">
              {about.description}
            </p>

            {/* Vision & Care Points */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1c1f1d]">
                <div className="w-4 h-4 rounded-full bg-[#e9f2ec] text-[#183324] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#183324]" />
                </div>
                <span className="leading-relaxed">
                  <strong>رؤيتنا:</strong> مساحات سكنية وتجارية في الرياض تجمع جمال النباتات وملاءمتها للموقع، مع ري منظم وعناية تساعد على استدامة الخضرة في مناخ نجد.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1c1f1d]">
                <div className="w-4 h-4 rounded-full bg-[#e9f2ec] text-[#183324] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#183324]" />
                </div>
                <span className="leading-relaxed">
                  <strong>الاستنبات المحلي:</strong> نمتلك بيوتًا محمية نعمل فيها على تأصيل جذور الشتلات وتهيئتها في تربة مخصصة قبل النقل والغرس.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1c1f1d]">
                <div className="w-4 h-4 rounded-full bg-[#e9f2ec] text-[#183324] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#183324]" />
                </div>
                <span className="leading-relaxed">
                  <strong>ضمان معتمد:</strong> 100% على جودة الشتلات وحيويتها، وضمان زراعي كامل على سلامة وتجذّر الشتلات المزروعة.
                </span>
              </div>
            </div>

            {/* Direct Consultation Link */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#183324] hover:bg-[#102117] text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-98"
              >
                <Camera className="w-4 h-4 text-[#d6c7b5]" />
                <span>تعرّف على خياراتك عبر واتساب</span>
              </a>

              <a
                href="#visit"
                className="text-xs font-semibold text-[#183324] hover:text-[#b8603d] underline underline-offset-4 transition-colors"
              >
                زر المشتل على طريق أبو بكر ←
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
