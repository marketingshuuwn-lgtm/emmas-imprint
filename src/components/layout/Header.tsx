"use client";

import { useState, useEffect, useRef, type KeyboardEvent } from "react";
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

  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const bar = document.querySelector<HTMLElement>('[data-mobile-quickbar]');
    const header = headerRef.current;
    const previousHeader = root.style.getPropertyValue('--site-header-height');
    const previousBar = root.style.getPropertyValue('--mobile-quickbar-height');
    const previousFlowHeader = root.hasAttribute('data-flow-header');
    const previousFlowBar = root.hasAttribute('data-flow-quickbar');
    const measure = () => {
      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      const barHeight = bar?.getBoundingClientRect().height ?? 0;
      // Large text or a short viewport must leave room for the page itself.
      const flowHeader = headerHeight > window.innerHeight / 4;
      const flowBar = barHeight > window.innerHeight / 4;
      root.toggleAttribute('data-flow-header', flowHeader);
      root.toggleAttribute('data-flow-quickbar', flowBar);
      root.style.setProperty('--site-header-height', `${flowHeader ? 0 : headerHeight}px`);
      root.style.setProperty('--mobile-quickbar-height', `${flowBar ? 0 : barHeight}px`);
    };
    measure();
    const observer = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(measure);
    if (header) observer?.observe(header);
    if (bar) observer?.observe(bar);
    window.addEventListener('resize', measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', measure);
      if (previousHeader) root.style.setProperty('--site-header-height', previousHeader);
      else root.style.removeProperty('--site-header-height');
      if (previousBar) root.style.setProperty('--mobile-quickbar-height', previousBar);
      else root.style.removeProperty('--mobile-quickbar-height');
      root.toggleAttribute('data-flow-header', previousFlowHeader);
      root.toggleAttribute('data-flow-quickbar', previousFlowBar);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1536px)');
    const onResize = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', onResize);
    return () => desktop.removeEventListener('change', onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const toggleButton = toggleRef.current;
    const header = headerRef.current;
    const previousOverflow = document.body.style.overflow;
    const background = Array.from(document.querySelectorAll<HTMLElement>('main, footer, [data-mobile-quickbar], #skip-link'));
    const previousInert = background.map(element => element.inert);
    background.forEach(element => { element.inert = true; });
    closeRef.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      const returnTarget = toggleButton?.getClientRects().length ? toggleButton : header?.querySelector<HTMLAnchorElement>('a');
      returnTarget?.focus({ preventScroll: true });
    };
  }, [open]);

  const close = () => setOpen(false);
  const handleDialogKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') { event.preventDefault(); close(); return; }
    if (event.key !== 'Tab') return;
    const controls = Array.from(drawerRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  };

  return (
    <>
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#102117]/95 backdrop-blur-md shadow-md border-b border-[#2f5d43]/40 py-1"
          : "bg-[#102117]/95 backdrop-blur-md py-2.5"
      }`}
    >
      <div className="container-main max-w-none" inert={open}>
        <div className="flex items-center justify-between gap-3 min-h-[64px] md:min-h-[72px]">

          {/* Official Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-white min-w-0 group"
            onClick={close}
          >
            <div className="relative w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20 shrink-0">
              <Image
                src="/images/logo.png"
                alt="شعار بصمة ايما الزراعية"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-right min-w-0">
              <span className="font-black text-white text-sm sm:text-base leading-tight font-heading">
                {siteContent.business.nameShort}
              </span>
              <span className="text-sm sm:text-sm text-[#d6c7b5] font-medium">
                للمكان بصمة خضراء • الرياض
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden 2xl:flex flex-wrap items-center gap-1 bg-[#183324]/80 px-3 py-1.5 rounded-xl border border-[#2f5d43]/50"
            aria-label="القائمة الرئيسية"
          >
            {siteContent.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 py-1 text-sm whitespace-nowrap font-bold text-[#e8dfd3] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#9c4c2d] hover:bg-[#7f3d25] text-white font-bold text-sm whitespace-nowrap shadow-md transition-all active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>خلّنا نرشّح لك</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            ref={toggleRef}
            className="2xl:hidden shrink-0 p-[10px] rounded-xl bg-white/10 text-white hover:text-emerald-300 transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {open ? <X className="w-[24px] h-[24px]" /> : <Menu className="w-[24px] h-[24px]" />}
          </button>
        </div>
      </div>

    </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        hidden={!open}
        inert={!open}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        onKeyDown={handleDialogKeys}
        className="fixed inset-0 bg-[#102117] z-60 overflow-y-auto overscroll-contain safe-area-bottom"
      >
        <div className="container-main pt-4 flex items-center justify-between text-white">
          <h2 id="mobile-menu-title" className="text-lg font-bold">قائمة الموقع</h2>
          <button ref={closeRef} type="button" onClick={close} aria-label="إغلاق القائمة" className="p-3 rounded-xl bg-white/10"><X className="w-6 h-6" /></button>
        </div>
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
              className="inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#9c4c2d] text-white font-bold text-sm shadow-md"
              onClick={close}
            >
              <MessageCircle className="w-4 h-4" />
              <span>خلّنا نرشّح لك عبر واتساب</span>
            </a>

            <a
              href={`tel:${siteContent.business.phone}`}
              className="inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-[#2f5d43] text-white font-bold text-sm"
              onClick={close}
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>اتصل بنا هاتفياً</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
