import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle, ArrowUp, Navigation } from "lucide-react";
import { businessHours, readableHours } from "@/content/business-hours";
import { siteContent } from "@/content/site-content";

export function Footer() {
  const { footer, business } = siteContent;

return (
    <footer className="bg-[#0c1811] text-[#faf8f5] pt-14 pb-8 border-t border-[#2f5d43]/40" role="contentinfo">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">

          {/* Brand Info */}
          <div className="lg:col-span-5 text-right">
            <Link
              href="/#home"
              className="inline-flex items-center gap-2.5 font-bold text-lg text-white mb-4 group"
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/10 p-1 border border-white/20 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="شعار مشاتل مؤسسة نوف الرويلي"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-black text-lg tracking-wide font-heading">{business.name}</span>
            </Link>

            <p className="text-sm sm:text-sm text-[#d6c7b5]/90 leading-relaxed max-w-md mb-5">
              {footer.description}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#9c4c2d] hover:bg-[#7f3d25] text-white text-sm font-bold transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>واتساب مباشر</span>
              </a>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#d6c7b5] hover:text-white text-sm font-bold border border-[#2f5d43] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{business.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 text-right">
            <h2 className="font-bold text-white text-sm sm:text-sm mb-3.5 border-b border-[#2f5d43]/50 pb-2 font-heading">
              اكتشف خضرتك
            </h2>
            <ul className="space-y-2 text-sm">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#d6c7b5]/80 hover:text-white transition-colors block py-0.5 leading-relaxed"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 text-right">
            <h2 className="font-bold text-white text-sm sm:text-sm mb-3.5 border-b border-[#2f5d43]/50 pb-2 font-heading">
              خدماتنا الميدانية
            </h2>
            <ul className="space-y-2 text-sm text-[#d6c7b5]/80">
              {footer.servicesLinks.map((s) => (
                <li key={s} className="py-0.5 leading-relaxed">
                  <Link href={s === "تنسيق نباتات المكاتب" ? "/plants/offices" : `/services#${siteContent.services.items.find(item => item.title === s)?.id ?? "services"}`} className="inline-block py-2 underline underline-offset-4 hover:text-white">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-3 text-right">
            <h2 className="font-bold text-white text-sm sm:text-sm mb-3.5 border-b border-[#2f5d43]/50 pb-2 font-heading">
              المقر وأوقات العمل
            </h2>
            <ul className="space-y-3 text-sm text-[#d6c7b5]/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" aria-hidden />
                <div>
                  <span className="block font-bold text-white mb-0.5">{business.address}</span>
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d6c7b5] hover:text-[#d6c7b5] underline underline-offset-2 inline-flex items-center gap-1 text-sm"
                  >
                    <span>عرض الموقع على Google Maps</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 pt-1 border-t border-[#2f5d43]/40">
                <Clock className="w-3.5 h-3.5 text-[#d6c7b5] mt-0.5 shrink-0" aria-hidden />
                <div>
                  {businessHours.map(hours => <p key={hours.label} className="text-sm leading-relaxed"><strong className="text-white">{hours.label}:</strong> {readableHours(hours)}</p>)}
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2f5d43]/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#d6c7b5]/75">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2 text-center md:text-right" dir="rtl">
            <p className="flex items-center gap-1.5 flex-wrap">
              <span>جميع الحقوق محفوظة</span>
              <span>&copy;</span>
              <span dir="ltr">2026</span>
              <span className="text-[#faf8f5] font-medium">{business.name}.</span>
            </p>

            {footer.agencyCredit && (
              <>
                <span className="hidden sm:inline text-[#2f5d43]" aria-hidden="true">•</span>
                <a
                  href={footer.agencyCredit.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${footer.agencyCredit.text} ${footer.agencyCredit.agency} - تواصل عبر واتساب لطلب تصميم موقع`}
                  title="تواصل مع وكالة نقرة لتصميم وتطوير موقعك الإلكتروني عبر واتساب"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#162e21]/90 hover:bg-[#1f4230] border border-[#2f5d43]/70 hover:border-emerald-500/50 text-[#d6c7b5] hover:text-white transition-all duration-200 group shadow-sm text-xs"
                >
                  <span className="text-[#a8bba2] group-hover:text-[#d6c7b5] transition-colors">{footer.agencyCredit.text}</span>
                  <span className="font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">{footer.agencyCredit.agency}</span>
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-emerald-300 transition-transform group-hover:scale-110" aria-hidden="true" />
                </a>
              </>
            )}
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#main-content"
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-xs sm:text-sm"
            >
              <span>العودة للأعلى</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
