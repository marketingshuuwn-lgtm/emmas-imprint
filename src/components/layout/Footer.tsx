"use client";

import Image from "next/image";
import { Phone, MapPin, Clock, MessageCircle, ArrowUp, Navigation } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Footer() {
  const { footer, business } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05160d] text-white pt-16 pb-10 border-t border-emerald-900/50" role="contentinfo">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 text-right">
            <a
              href="#home"
              className="inline-flex items-center gap-3 font-black text-xl text-white mb-5 group"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 shadow-lg shadow-emerald-950 shrink-0 border border-emerald-400/40 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.png"
                  alt={business.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-black text-xl tracking-wide font-heading">{business.name}</span>
            </a>
            
            <p className="text-sm text-emerald-200/70 prose-ar leading-relaxed max-w-md mb-6">
              {footer.description}
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-800/60 hover:bg-emerald-700 text-emerald-200 hover:text-white text-xs font-bold border border-emerald-600/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب مباشر</span>
              </a>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-200 hover:text-white text-xs font-bold border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{business.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 text-right">
            <h4 className="font-bold text-white text-sm mb-4 border-b border-emerald-900/80 pb-2 font-heading">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-emerald-200/70 hover:text-emerald-300 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 text-right">
            <h4 className="font-bold text-white text-sm mb-4 border-b border-emerald-900/80 pb-2 font-heading">
              خدماتنا الرئيسية
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-200/70">
              {footer.servicesLinks.map((s) => (
                <li key={s} className="py-0.5 hover:text-emerald-300 transition-colors">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-3 text-right">
            <h4 className="font-bold text-white text-sm mb-4 border-b border-emerald-900/80 pb-2 font-heading">
              المقر وأوقات العمل
            </h4>
            <ul className="space-y-3 text-xs text-emerald-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" aria-hidden />
                <div>
                  <span className="font-bold block text-white">{business.address}</span>
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 underline mt-1"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>عرض الموقع على Google Maps</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 pt-2 border-t border-emerald-900/50">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" aria-hidden />
                <div className="space-y-1">
                  <div className="text-[11px] text-emerald-100 font-medium">
                    <span className="text-amber-300 font-bold">السبت – الخميس:</span> 8:00 ص – 12:30 ص
                  </div>
                  <div className="text-[11px] text-emerald-100 font-medium">
                    <span className="text-amber-300 font-bold">الجمعة:</span> 12:30 م – 12:30 ص
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-emerald-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <p className="flex items-center gap-1.5 flex-wrap" dir="rtl">
            <span>جميع الحقوق محفوظة</span>
            <span>&copy;</span>
            <span dir="ltr">2026</span>
            <span>{business.name}.</span>
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-emerald-300 transition-colors"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
