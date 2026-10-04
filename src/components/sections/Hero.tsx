"use client";

import Image from "next/image";
import { Camera, MapPin, Check, ArrowLeft, Calendar } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:py-24 lg:py-28 bg-[#102117] text-[#faf8f5] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle organic texture */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d6c7b5_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Content (7 cols) */}
          <div className="lg:col-span-7 text-right">
            
            {/* Geographic Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#183324] border border-[#2f5d43]/50 text-[#d6c7b5] text-xs font-semibold mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#b8603d]" />
              <span>{hero.eyebrow}</span>
            </div>

            {/* Main Balanced Headline */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.3] tracking-tight mb-5 font-heading"
            >
              {hero.headline}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#e8dfd3]/95 leading-relaxed max-w-2xl mb-4 font-normal">
              {hero.description}
            </p>

            {/* Scope Summary */}
            <p className="text-xs sm:text-sm text-[#d6c7b5]/80 leading-relaxed mb-8 max-w-xl">
              <strong>بصمة ايما الزراعية في الرياض:</strong> نباتات داخلية وخارجية، وتنسيق حدائق منزلية وتجارية، وشبكات ري ذكية وصيانة دورية.
            </p>

            {/* Primary Action Card */}
            <div className="bg-[#183324]/95 border border-[#2f5d43]/70 rounded-2xl p-5 sm:p-6 max-w-xl shadow-xl mb-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-3.5">
                <a
                  href={hero.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#b8603d] hover:bg-[#9c4c2d] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md active:scale-98"
                >
                  <Camera className="w-4 h-4 text-white shrink-0" />
                  <span>{hero.primaryCta.label}</span>
                </a>

                <a
                  href={hero.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-[#2f5d43] font-semibold text-xs sm:text-sm transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#d6c7b5]" />
                  <span>{hero.secondaryCta.label}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#d6c7b5]/90">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>يرد عليك مهندسنا الزراعي بترشيح خيارات مناسبة لمساحتك مجاناً عبر واتساب.</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-[#d6c7b5]/80">
              <a 
                href="#intent-guide"
                className="inline-flex items-center gap-1.5 hover:text-white underline underline-offset-4 decoration-[#b8603d] transition-colors font-medium"
              >
                <span>وين تبدأ بصمتك؟ (دليلك السريع)</span>
                <ArrowLeft className="w-3.5 h-3.5 text-[#b8603d]" />
              </a>

              <span className="text-[#2f5d43]">•</span>

              <a 
                href="#visit"
                className="hover:text-white transition-colors"
              >
                زيارة المشتل (طريق أبو بكر الصديق — يومياً حتى 12:30 ليلاً)
              </a>
            </div>

          </div>

          {/* Side Editorial Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="editorial-card-warm bg-[#faf8f5] text-[#1c1f1d] rounded-2xl p-6 sm:p-7 border border-[#e8dfd3] shadow-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#e8dfd3] mb-5">
                <div>
                  <h2 className="font-bold text-base text-[#102117] font-heading">
                    تعرّف على نباتاتك عن قرب
                  </h2>
                  <p className="text-xs text-[#6f7872] mt-0.5">مشتلنا الميداني على طريق أبو بكر الصديق</p>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#e9f2ec] text-[#183324] border border-[#2f5d43]/20 shrink-0">
                  زيارة ميدانية
                </span>
              </div>

              {/* Greenhouse / Plants Real Photo */}
              <div className="relative h-48 sm:h-52 rounded-xl overflow-hidden mb-5 border border-[#e8dfd3]">
                <Image
                  src="/images/nursery-greenhouse.jpg"
                  alt="مشتل وبيوت استنبات بصمة ايما الزراعية في الرياض"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-white text-right">
                  <p className="text-xs font-bold leading-tight">مشتل واستنبات زراعي بالرياض</p>
                  <p className="text-[10px] text-emerald-200">تأصيل وتجهيز الشتلات قبل النقل والغرس</p>
                </div>
              </div>

              {/* 3 Key Stats from User Document */}
              <div className="grid grid-cols-3 gap-2.5 text-center pt-1">
                <div className="p-2.5 rounded-lg bg-white border border-[#e8dfd3]">
                  <span className="block font-black text-base sm:text-lg text-[#183324] font-heading">+5</span>
                  <span className="text-[10px] sm:text-[11px] text-[#6f7872]">سنوات خبرة</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#e8dfd3]">
                  <span className="block font-black text-base sm:text-lg text-[#b8603d] font-heading">+147</span>
                  <span className="text-[10px] sm:text-[11px] text-[#6f7872]">حديقة وفيلا</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#e8dfd3]">
                  <span className="block font-black text-base sm:text-lg text-[#183324] font-heading">+100</span>
                  <span className="text-[10px] sm:text-[11px] text-[#6f7872]">صنف معتمد</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
