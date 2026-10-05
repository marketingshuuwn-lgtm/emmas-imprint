import Link from "next/link";
import { MessageCircle, Phone, BookOpen, MapPin } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function MobileQuickBar() {
  const { business } = siteContent;

  return (
    <div
      data-mobile-quickbar
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#102117]/95 backdrop-blur-xl border-t border-[#2f5d43]/50 px-3 py-2 shadow-2xl safe-area-bottom"
      role="navigation"
      aria-label="شريط الوصول السريع للجوال"
    >
      <div className="grid quickbar-grid gap-2 max-w-md mx-auto items-center text-center">
        
        {/* WhatsApp Fast Consultation */}
        <a
          href={`https://wa.me/966563340109?text=${encodeURIComponent(
            "مرحباً بصمة ايما الزراعية، أتصفح الموقع عبر الجوال وأود استشارة بخصوص النباتات وتنسيق الحدائق."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-1.5 px-1 rounded-xl bg-[#9c4c2d] hover:bg-[#7f3d25] text-white font-bold shadow-sm active:scale-95 transition-transform"
          aria-label="محادثة واتساب سريعة"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span className="text-sm leading-none font-bold">واتساب</span>
        </a>

        {/* Call Now */}
        <a
          href={`tel:${business.phone}`}
          className="flex flex-col items-center justify-center gap-1 py-1.5 px-1 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-200 active:scale-95 transition-transform"
          aria-label="اتصال هاتفي مباشر"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span className="text-sm leading-none font-bold">اتصال</span>
        </a>

        {/* Plants Catalog */}
        <Link
          href="/plants"
          className="flex flex-col items-center justify-center gap-1 py-1.5 px-1 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-200 active:scale-95 transition-transform"
          aria-label="تصفح النباتات"
        >
          <BookOpen className="w-4 h-4 text-teal-300" />
          <span className="text-sm leading-none font-bold">النباتات</span>
        </Link>

        {/* Google Maps Location */}
        <a
          href={business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-1.5 px-1 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-200 active:scale-95 transition-transform"
          aria-label="موقعنا على طريق أبو بكر الصديق"
        >
          <MapPin className="w-4 h-4 text-amber-300" />
          <span className="text-sm leading-none font-bold">الموقع</span>
        </a>

      </div>
    </div>
  );
}
