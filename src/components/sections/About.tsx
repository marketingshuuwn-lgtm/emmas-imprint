"use client";

import Image from "next/image";
import { Eye, Target, Award, CheckCircle, MapPin, Sparkles, Sprout } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function About() {
  const { about, business } = siteContent;

  return (
    <section
      id="about"
      className="section-padding bg-[#f4f8f4] relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container-main">
        
        {/* Top Story Block with Greenhouse Image */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Image & Visual Trust Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="relative h-80 sm:h-96 md:h-[450px] w-full">
                <Image
                  src="/images/nursery-greenhouse.jpg"
                  alt="مشتل بصمة ايما الزراعية بالرياض"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                
                {/* Floating Trust Badge - Top Left (No text overlap) */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 z-10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center text-base font-bold shrink-0">
                    5+
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-emerald-950 leading-tight">سنوات من الريادة</p>
                    <p className="text-[11px] text-emerald-700">مئات الفلل المعتمدة بالرياض</p>
                  </div>
                </div>

                {/* Bottom Caption - Fully Visible with Rich Gradient Scrim */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white z-10 text-right">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-sm text-xs font-bold mb-2">
                    <Sprout className="w-3.5 h-3.5" />
                    <span>مشتلنا الميداني بالرياض</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
                    بيئة استنبات زراعي خاضعة لأعلى المعايير
                  </h4>
                  <p className="text-xs text-emerald-200 mt-1">طريق أبو بكر الصديق، الرياض</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{about.title}</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-950 mb-6 leading-tight"
            >
              خبرة زراعية عميقة <span className="text-emerald-700">نهتم بأدق تفاصيلها</span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-900/80 prose-ar leading-relaxed mb-6">
              {about.description}
            </p>

            {/* Core Values / Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-emerald-950">
                  فريق هندسي متخصص في دراسة التربة، وتوزيع الإضاءة، وشبكات الري.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-emerald-950">
                  نباتات وشتلات متوافقة ومجربة لتحمل مناخ وحرارة منطقة الرياض.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-emerald-950">
                  مواكبة لمبادرة السعودية الخضراء ورؤية المملكة 2030 لزيادة الغطاء النباتي.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition-all duration-300"
              >
                تحدث مع مهندس زراعي الآن
              </a>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>زيارة ميدانية مجانية للموقع</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5 text-emerald-700">
              <Eye className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-3">
              {about.vision.title}
            </h3>
            <p className="text-emerald-900/70 prose-ar text-sm leading-relaxed">
              {about.vision.text}
            </p>
          </article>

          <article className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5 text-emerald-700">
              <Target className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-3">
              {about.mission.title}
            </h3>
            <p className="text-emerald-900/70 prose-ar text-sm leading-relaxed">
              {about.mission.text}
            </p>
          </article>

          <article className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5 text-emerald-700">
              <Award className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-3">
              {about.experience.title}
            </h3>
            <p className="text-emerald-900/70 prose-ar text-sm leading-relaxed">
              {about.experience.text}
            </p>
          </article>
        </div>

      </div>
    </section>
  );
}
