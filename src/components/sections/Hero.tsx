"use client";

import Image from "next/image";
import { MessageCircle, Leaf, Sparkles, ShieldCheck, Droplet, ArrowDown, PhoneCall } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { hero, business } = siteContent;

  return (
    <section
      id="home"
      className="relative min-h-[95svh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#071d12]"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-garden.jpg"
          alt="حديقة فيلا فاخرة بتصميم مشتل سلطان العتيبي بالرياض"
          fill
          priority
          className="object-cover object-center scale-105 motion-safe:animate-pulse-subtle"
          sizes="100vw"
        />
        {/* Multi-layered Gradients for Deep Cinematic Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d12]/95 via-[#071d12]/80 to-[#071d12]/50 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071d12] via-transparent to-[#071d12]/40" />
        {/* Soft Ambient Light Glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2d6a4f]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#52b788]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container-main relative z-10 w-full py-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Typography & CTAs (Left in LTR, Right in RTL) */}
          <div className="lg:col-span-7 text-right">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-dark text-emerald-300 text-xs sm:text-sm font-semibold mb-6 border border-emerald-500/30 shadow-lg animate-float-slow">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              <Leaf className="w-4 h-4 text-emerald-400" aria-hidden />
              <span>{hero.eyebrow} • الرياض والمملكة</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-white leading-[1.2] tracking-tight mb-6"
            >
              نمنح مساحتك <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-300 via-green-400 to-teal-200">حياةً خضراء</span> وجمالاً يدوم
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 prose-ar max-w-2xl mb-8 leading-relaxed font-normal drop-shadow-sm">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href={hero.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>{hero.primaryCta.label}</span>
              </a>

              <a
                href="#plants"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl glass-panel-dark text-white hover:text-emerald-300 font-semibold text-base hover:border-emerald-400/50 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>استكشف كتالوج النباتات</span>
              </a>

              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center p-4 rounded-xl glass-panel-dark text-emerald-300 hover:text-white hover:border-emerald-400/50 transition-all duration-300 sm:w-auto"
                title="اتصال مباشر"
              >
                <PhoneCall className="w-5 h-5" />
                <span className="sm:hidden font-medium mr-2">اتصال فوري</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-emerald-900/60 text-xs sm:text-sm text-emerald-200/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ضمان حيوية الشتلات</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-teal-400 shrink-0" />
                <span>شبكات ري ذكية وموفرة</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>معاينة وتصميم مجاني بالرياض</span>
              </div>
            </div>
          </div>

          {/* Floating Showcase Card on Right / Visual Accent */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative rounded-3xl p-6 glass-panel-dark border border-emerald-500/20 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-bold text-sm">مشاريع مشتل سلطان بالرياض</span>
                </div>
                <span className="text-xs text-emerald-300 font-mono bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  +147 حديقة منفذة
                </span>
              </div>

              {/* Mini Preview Image with Overlay */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-4 group">
                <Image
                  src="/images/service-landscaping.jpg"
                  alt="تنسيق حديقة فيلا حديثة"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 right-3 left-3 text-right">
                  <p className="text-white text-sm font-bold">تنفيذ فيلا خاصة — حي النرجس، الرياض</p>
                  <p className="text-emerald-300 text-xs">مسطح أخضر + شلال جداري + شبكة رذاذ ضبابي</p>
                </div>
              </div>

              {/* Quick Key Stats */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-black text-emerald-400">+147</div>
                  <div className="text-xs text-emerald-200/70 mt-0.5">مشروع منجز في الرياض</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-black text-amber-300">5 أعوام</div>
                  <div className="text-xs text-emerald-200/70 mt-0.5">خبرة وكفاءة هندسية</div>
                </div>
              </div>

            </div>

            {/* Floating Glassmorphism Tag */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 glass-badge bg-white/90 text-emerald-950 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-200 animate-float-reverse">
              <span className="text-2xl">🌱</span>
              <div>
                <p className="text-xs font-bold leading-tight">جاهزية التوريد والزراعة</p>
                <p className="text-[11px] text-emerald-700 font-medium">مباشرة من مشاتلنا بالرياض</p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 hidden md:flex flex-col items-center justify-center gap-1.5 text-emerald-300/60">
          <span className="text-xs tracking-wider font-medium">اكتشف روعة الطبيعة والحدائق</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-emerald-400" aria-hidden />
        </div>
      </div>
    </section>
  );
}
