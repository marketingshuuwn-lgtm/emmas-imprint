"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sprout, 
  Trees, 
  Building2, 
  Home, 
  Camera, 
  ArrowLeft, 
  Check, 
  Sparkles
} from "lucide-react";

interface IntentOption {
  id: string;
  icon: typeof Sprout;
  title: string;
  subtitle: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  features: string[];
  ctaWhatsApp: string;
  catalogLink?: string;
  catalogLabel?: string;
}

export function QuickIntentNavigator() {
  const [selectedIntent, setSelectedIntent] = useState<string>("indoor");

  const intents: IntentOption[] = [
    {
      id: "indoor",
      icon: Sprout,
      title: "نباتات داخلية",
      subtitle: "للصالات، غرف النوم، ومداخل الفلل",
      badge: "تتحمل التكييف وقلة الضوء",
      badgeBg: "bg-[#e9f2ec]",
      badgeText: "text-[#183324]",
      description: "نباتات ظل طبيعية نختارها لك بحيث تعيش في غرف مكيفة وإضاءة معتدلة، ولا تحتاج لسقي إلا عندما تجف التربة تماماً.",
      features: [
        "أصناف مجربة بالرياض (جلد النمر، الزاميا، البوتس، المونستيرا)",
        "خيارات أحواض سيراميك وفايبر متناسقة مع أثاثك",
        "إرشادات واضحة للري حتى لا تتعفن الجذور"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، صورت صالتي وأبي ترشحون لي نباتات داخلية تعيش في التكييف بدون ما تصفر.",
      catalogLink: "/projects?category=indoor",
      catalogLabel: "استعراض أصناف الظل والداخلية"
    },
    {
      id: "outdoor",
      icon: Trees,
      title: "أشجار ونباتات خارجية",
      subtitle: "لأحواش الفلل، الأسوار، والأسطح",
      badge: "متحملة لشمس وصيف الرياض 50°",
      badgeBg: "bg-[#f7ebe5]",
      badgeText: "text-[#9c4c2d]",
      description: "أشجار وشجيرات معمرة تؤصل في مشتلنا لتتحمل شمس الصيف الحارقة، توفر ظلالاً وارفة وسواتر خضراء تمنع الغبار وتلطف الجو.",
      features: [
        "أشجار نجدية ومستنبتة (جهنمية، ياسمين هندي، بلوميريا، أكاسيا)",
        "أحجام متنوعة بجذور قوية جاهزة للغرس المباشر",
        "نصائح لجدولة الري الصباحي والمسائي لحماية الجذور"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، صورت حوش بيتي وأبي أشجار وسواتر تتحمل شمس الرياض وحرارة الصيف.",
      catalogLink: "/projects?category=outdoor",
      catalogLabel: "استعراض أشجار الحدائق والأحواش"
    },
    {
      id: "offices",
      icon: Building2,
      title: "نباتات المكاتب والشركات",
      subtitle: "للمقرات، غرف الاجتماعات، ومكاتب الإدارة",
      badge: "أحواض ذاتية الري (كل أسبوعين)",
      badgeBg: "bg-[#f4efea]",
      badgeText: "text-[#424944]",
      description: "تنسيق نباتي راقٍ بمقرات الأعمال بدون عبء السقي اليومي. نستخدم أحواضاً ذاتية الري بنظام هيدروليكي يضمن استقرار النبتة أثناء الإجازات.",
      features: [
        "أحواض ذاتية الري تتكفل بالنبتة لمدة 14 إلى 21 يوماً",
        "تنسيق يعكس الفخامة ويرفع تركيز وإنتاجية الفريق",
        "إمكانية توفير عقود صيانة دورية شهرية بالرياض"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، أود تأثيث مقر شركة / مكتب بنباتات ذاتية الري مع استشارة مناسبة.",
      catalogLink: "/projects",
      catalogLabel: "خيارات وتشكيلات المكاتب"
    },
    {
      id: "landscape",
      icon: Home,
      title: "تصميم وتنسيق حدائق كاملة",
      subtitle: "للفلل الجديدة، الاستراحات، وتجديد الأحواش",
      badge: "معاينة ميدانية مجانية بالرياض",
      badgeBg: "bg-[#e8dfd3]",
      badgeText: "text-[#102117]",
      description: "خدمة متكاملة من الصفر: يزورك مهندسنا في موقعك داخل الرياض، يرفع المقاسات، يصمم شبكة الري الأوتوماتيكية، ويشرف على توريد وزراعة الحديقة.",
      features: [
        "زيارة ومعاينة ميدانية مجانية بدون أي التزام مسبق",
        "شبكات ري إيطالية أوتوماتيكية توفر 40% من المياه",
        "ضمان كامل على سلامة وتجذير كافة الشتلات المزروعة"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، أود حجز موعد معاينة ميدانية مجانية لتنسيق حديقة فلتنا بالرياض.",
    }
  ];

  const current = intents.find((i) => i.id === selectedIntent) || intents[0];

  return (
    <section 
      id="intent-guide" 
      className="py-16 sm:py-24 bg-[#f4efea] border-b border-[#e8dfd3]"
      aria-labelledby="intent-heading"
    >
      <div className="container-main">
        
        {/* Header */}
        <div className="text-right max-w-2xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8dfd3] text-[#183324] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b8603d]" />
            <span>بوصلة التوجيه السريع</span>
          </div>

          <h2 
            id="intent-heading" 
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#102117] leading-tight mb-3 font-heading"
          >
            وش تبحث عنه اليوم؟
          </h2>
          <p className="text-sm sm:text-base text-[#424944]">
            اضغط على الخيار اللي يمثلك، وسنوجهك مباشرة للحل الأنسب لمساحتك بدون تشتت:
          </p>
        </div>

        {/* 4 Clickable Intent Cards (Tactile & Clean) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {intents.map((item) => {
            const isSelected = item.id === selectedIntent;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIntent(item.id)}
                className={`text-right p-4 sm:p-5 rounded-xl sm:rounded-2xl transition-all duration-200 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] cursor-pointer border ${
                  isSelected
                    ? "bg-[#183324] text-white border-[#183324] shadow-lg shadow-[#183324]/10 transform -translate-y-1"
                    : "bg-white text-[#1c1f1d] border-[#e8dfd3] hover:border-[#d6c7b5] hover:bg-[#faf8f5]"
                }`}
                aria-pressed={isSelected}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? "bg-[#b8603d] text-white" : "bg-[#f4efea] text-[#183324]"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#b8603d]" />
                    )}
                  </div>

                  <h3 className="font-bold text-sm sm:text-base leading-snug font-heading">
                    {item.title}
                  </h3>
                </div>

                <p className={`text-[11px] sm:text-xs mt-2 line-clamp-2 ${
                  isSelected ? "text-[#d6c7b5]" : "text-[#6f7872]"
                }`}>
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Selection Details Card (Editorial Layout) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e8dfd3] shadow-md">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Description & Points (8 cols) */}
            <div className="lg:col-span-8 text-right space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-md ${current.badgeBg} ${current.badgeText}`}>
                  {current.badge}
                </span>
                <span className="text-xs text-[#6f7872]">خيارك المحدد الآن</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#102117] mb-2 font-heading">
                  {current.title} — {current.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-[#424944] leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2.5 pt-2">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1c1f1d]">
                    <div className="w-4 h-4 rounded-full bg-[#e9f2ec] text-[#183324] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#183324]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct High-Intent Actions (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3 pt-6 lg:pt-0 lg:border-r lg:border-[#e8dfd3] lg:pr-8">
              
              {/* WhatsApp Fast Consultation with prefilled context */}
              <a
                href={`https://wa.me/966563340109?text=${encodeURIComponent(current.ctaWhatsApp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#b8603d] hover:bg-[#9c4c2d] text-white font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <Camera className="w-4 h-4 text-white" />
                <span>أرسل صورة مساحتك لهذا الخيار</span>
              </a>

              {/* Optional Catalog Link */}
              {current.catalogLink && (
                <Link
                  href={current.catalogLink}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#faf8f5] hover:bg-[#f4efea] text-[#183324] border border-[#e8dfd3] font-semibold text-xs transition-colors"
                >
                  <span>{current.catalogLabel}</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              )}

              <p className="text-[11px] text-[#6f7872] text-center mt-1">
                استشارة فورية ومجانية من مهندسي مشتلنا على طريق أبو بكر
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
