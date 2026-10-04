"use client";

import Image from "next/image";
import { Camera, MapPin, Check, ArrowLeft, Sun, Snowflake, Droplets } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:py-28 bg-[#102117] text-[#faf8f5] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle organic background tint */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#d6c7b5_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Editorial Content (8 cols) */}
          <div className="lg:col-span-7 text-right">
            
            {/* Honest Geographic Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#183324] border border-[#2f5d43]/50 text-[#d6c7b5] text-xs font-semibold mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#b8603d]" />
              <span>الرياض — طريق أبو بكر الصديق • مشتل واستنبات زراعي</span>
            </div>

            {/* Bold, Human Headline */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.25] tracking-tight mb-6 font-heading"
            >
              نباتات تعيش في <span className="text-[#d6c7b5]">صيف الرياض</span>،<br />
              <span className="text-[#b8603d]">مو تموت بعد أسبوعين.</span>
            </h1>

            {/* Direct Problem-Aware Description */}
            <p className="text-base sm:text-lg text-[#e8dfd3]/90 prose-ar max-w-2xl mb-8 leading-relaxed font-normal">
              أغلب اللي يشتري نبات في الرياض يتفاجأ إنه يذبل بسرعة؛ إما من شمس الظهر الحارقة أو صدمة تكييف الصالة. في مشتل بصمة ايما، ما نبيعك شتلة عشوائية؛ نختار لك النبتة اللي جذورها مؤصلة ومجربة لمناخ نجد، ونقولك بصراحة وش اللي يصلح لمساحتك.
            </p>

            {/* Single Powerful CTA Box */}
            <div className="bg-[#183324]/90 border border-[#2f5d43]/60 rounded-2xl p-5 sm:p-6 max-w-xl shadow-xl">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-3">
                <a
                  href={hero.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#b8603d] hover:bg-[#9c4c2d] text-white font-bold text-base transition-all duration-200 shadow-md active:scale-98"
                >
                  <Camera className="w-5 h-5 text-white shrink-0" />
                  <span>صوّر مساحتك وأرسلها واتساب</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#d6c7b5]/80">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>يرد عليك مهندس زراعي بالنبتة المناسبة لمساحتك وطريقة رعايتها مجاناً.</span>
              </div>
            </div>

            {/* Quiet Secondary Options */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#d6c7b5]/80">
              <a 
                href="#intent-guide"
                className="inline-flex items-center gap-1.5 hover:text-white underline underline-offset-4 decoration-[#b8603d] transition-colors"
              >
                <span>دليلك السريع: وش تبحث عنه اليوم؟</span>
                <ArrowLeft className="w-3.5 h-3.5 text-[#b8603d]" />
              </a>

              <span className="text-[#2f5d43]">•</span>

              <a 
                href="#visit"
                className="hover:text-white transition-colors"
              >
                زيارة المشتل (طريق أبو بكر الصديق — مفتوح حتى 12:30 ليلاً)
              </a>
            </div>

          </div>

          {/* Editorial Photographic & Botanical Diagnostic Aside (5 cols) */}
          <div className="lg:col-span-5">
            <div className="editorial-card-warm bg-[#faf8f5] text-[#1c1f1d] rounded-2xl p-6 sm:p-7 border border-[#e8dfd3] shadow-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#e8dfd3] mb-5">
                <div>
                  <h3 className="font-bold text-base text-[#102117] font-heading">
                    واقع زراعة النباتات بالرياض
                  </h3>
                  <p className="text-xs text-[#6f7872]">حقائق ميدانية نراعيها قبل أن نبيعك شتلة</p>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#e9f2ec] text-[#183324] border border-[#2f5d43]/20">
                  تأصيل ميداني
                </span>
              </div>

              {/* Real Greenhouse / Nursery Photo */}
              <div className="relative h-48 sm:h-52 rounded-xl overflow-hidden mb-5 border border-[#e8dfd3]">
                <Image
                  src="/images/nursery-greenhouse.jpg"
                  alt="بيئة استنبات زراعي خاضعة لأعلى المعايير بمشتل بصمة ايما بالرياض"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-white text-right">
                  <p className="text-xs font-bold leading-tight">مشتلنا الميداني بالرياض — طريق أبو بكر الصديق</p>
                  <p className="text-[10px] text-emerald-200">تعويد وتأصيل تدريجي لمناخ نجد</p>
                </div>
              </div>

              {/* 3 Riyadh Plant Realities */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-[#e8dfd3]">
                  <Sun className="w-4 h-4 text-[#b8603d] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#102117] font-bold">شمس الظهر 50°:</strong>
                    <span className="text-[#424944]">نوفر أصنافاً مؤصلة كالبوفيديا والبلوميريا لا تحترق جذورها بالصيف.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-[#e8dfd3]">
                  <Snowflake className="w-4 h-4 text-[#2f5d43] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#102117] font-bold">تكييف الصالات المستمر:</strong>
                    <span className="text-[#424944]">نختار نباتات درنية (كالزاميا وجلد النمر) تتحمل برودة الغرف وجفاف الجو.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-[#e8dfd3]">
                  <Droplets className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#102117] font-bold">ملوحة مياه وشبكة الرياض:</strong>
                    <span className="text-[#424944]">نوصيك بخلطات تربة نجدية مخصبة بالبرلايت لمنع ترسب الأملاح على الجذور.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
