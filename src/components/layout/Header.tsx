"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, Sprout } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071d12]/90 backdrop-blur-xl shadow-xl border-b border-emerald-500/20 py-1"
          : "bg-gradient-to-b from-[#071d12]/90 via-[#071d12]/50 to-transparent py-2.5"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-18">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 font-black text-lg md:text-xl text-white shrink-0 group"
            onClick={close}
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-green-400 text-white flex items-center justify-center shadow-lg shadow-emerald-900/40 group-hover:scale-105 transition-transform">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-black text-white text-base md:text-lg leading-tight tracking-wide">
                {siteContent.business.nameShort}
              </span>
              <span className="text-[11px] text-emerald-300 font-medium tracking-normal">
                مشاتل وتنسيق حدائق • الرياض
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1.5 glass-panel-dark px-4 py-2 rounded-2xl border border-emerald-500/20"
            aria-label="القائمة الرئيسية"
          >
            {siteContent.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-bold text-emerald-100 hover:text-white hover:bg-emerald-800/40 rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteContent.business.phone}`}
              className="p-2.5 rounded-xl glass-panel-dark text-emerald-300 hover:text-white hover:border-emerald-400/50 transition-colors"
              aria-label="اتصل بنا"
              title="اتصال هاتفي"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={siteContent.business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-900/30 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>معاينة مجانية</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl glass-panel-dark text-white hover:text-emerald-300 transition-colors"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-18 bg-[#071d12]/98 backdrop-blur-2xl z-40 transition-transform duration-300 ease-out border-t border-emerald-800/40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="container-main py-8 flex flex-col gap-2"
          aria-label="قائمة الجوال"
        >
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="px-5 py-3 text-base font-bold text-emerald-100 hover:text-white hover:bg-emerald-900/50 rounded-2xl transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3 px-2">
            <a
              href={siteContent.business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-base shadow-xl"
              onClick={close}
            >
              <MessageCircle className="w-5 h-5" />
              <span>احجز استشارتك المجانية عبر واتساب</span>
            </a>
            <a
              href={`tel:${siteContent.business.phone}`}
              className="inline-flex items-center justify-center gap-2 py-4 rounded-xl border border-emerald-500/30 text-white font-bold text-base"
              onClick={close}
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>اتصل بنا هاتفياً</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
