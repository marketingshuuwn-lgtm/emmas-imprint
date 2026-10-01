"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Button } from "@/components/ui/Button";

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
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          <a
            href="#home"
            className="flex items-center gap-2 font-bold text-lg md:text-xl text-primary shrink-0"
            onClick={close}
          >
            <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
              س
            </span>
            <span className="hidden sm:inline">
              {siteContent.business.nameShort}
            </span>
          </a>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="القائمة الرئيسية"
          >
            {siteContent.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={`tel:${siteContent.business.phone}`}
              className="p-2.5 rounded-lg text-primary hover:bg-muted transition-colors"
              aria-label="اتصل بنا"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Button
              href={siteContent.business.whatsapp}
              external
              size="sm"
              className="gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              استشارة مجانية
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2.5 rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-16 bg-background z-40 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="container-main py-6 flex flex-col gap-1"
          aria-label="قائمة الجوال"
        >
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="px-4 py-3.5 text-base font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3 px-4">
            <Button
              href={siteContent.business.whatsapp}
              external
              size="lg"
              className="w-full justify-center gap-2"
              onClick={close}
            >
              <MessageCircle className="w-5 h-5" />
              احجز استشارتك المجانية
            </Button>
            <Button
              href={`tel:${siteContent.business.phone}`}
              variant="outline"
              size="lg"
              className="w-full justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              اتصل بنا
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
