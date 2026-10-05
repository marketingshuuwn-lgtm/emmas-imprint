"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
          ? "bg-[#102117]/95 backdrop-blur-md shadow-md border-b border-[#2f5d43]/40 py-1"
          : "bg-gradient-to-b from-[#102117]/90 via-[#102117]/60 to-transparent py-2.5"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Official Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-white shrink-0 group"
            onClick={close}
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20 shrink-0">
              <Image
                src="/images/logo.png"
                alt="شعار بصمة ايما الزراعية"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-black text-white text-sm sm:text-base leading-tight font-heading">
                {siteContent.business.nameShort}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#d6c7b5] font-medium">
                للمكان بصمة خضراء • الرياض
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden xl:flex items-center gap-1 bg-[#183324]/80 px-3 py-1.5 rounded-xl border border-[#2f5d43]/50"
            aria-label="القائمة الرئيسية"
          >
            {siteContent.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1 text-xs font-bold text-[#e8dfd3] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">

            <a
              href={`tel:${siteContent.business.phone}`}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#d6c7b5] hover:text-white border border-[#2f5d43]/50 transition-colors"
              aria-label="اتصل بنا"
              title="اتصال هاتفي"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Fixed CTA Button from User Document: خلّنا نرشّح لك */}
            <a
              href={siteContent.business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#b8603d] hover:bg-[#9c4c2d] text-white font-bold text-xs shadow-md transition-all active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>خلّنا نرشّح لك</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="xl:hidden p-2 rounded-xl bg-white/10 text-white hover:text-emerald-300 transition-colors cursor-pointer"
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
        className={`xl:hidden fixed inset-0 top-16 bg-[#102117]/98 backdrop-blur-2xl z-40 transition-transform duration-300 ease-out border-t border-[#2f5d43] overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="container-main py-6 flex flex-col gap-1.5"
          aria-label="قائمة الجوال"
        >
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="px-4 py-2.5 text-sm font-bold text-[#e8dfd3] hover:text-white hover:bg-white/5 rounded-xl transition-colors text-right"
            >
              {item.label}
            </a>
          ))}

          <div className="mt-4 flex flex-col gap-2.5 pt-4 border-t border-[#2f5d43]/60">
            <a
              href={siteContent.business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#b8603d] text-white font-bold text-sm shadow-md"
              onClick={close}
            >
              <MessageCircle className="w-4 h-4" />
              <span>خلّنا نرشّح لك عبر واتساب</span>
            </a>

            <a
              href={`tel:${siteContent.business.phone}`}
              className="inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-[#2f5d43] text-white font-bold text-xs"
              onClick={close}
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>اتصل بنا هاتفياً</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
