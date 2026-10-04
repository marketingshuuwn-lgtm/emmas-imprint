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
  buttonLabel: string;
  catalogLink?: string;
  catalogLabel?: string;
}

export function QuickIntentNavigator() {
  const [selectedIntent, setSelectedIntent] = useState<string>("indoor");

  const intents: IntentOption[] = [
    {
      id: "indoor",
      icon: Sprout,
      title: "من داخل البيت",
      subtitle: "نباتات داخلية للصالات والرفوف والمداخل",
      badge: "نباتات للبيت",
      badgeBg: "bg-[#e9f2ec]",
      badgeText: "text-[#183324]",
      description: "للصالة التي ينقصها تفصيل، ولرفّ يبدو أجمل بنبتة متدلية، ولمدخل يستقبل ضيوفك بالخضرة. اكتشف نباتات داخلية بأشكال وأحجام مختلفة، واختر ما يناسب إضاءة منزلك وروتينك.",
      features: [
        "خيارات تلائم الإضاءة المعتدلة والخافتة والتكييف",
        "تشكيلة مميزة (سانسيفيريا، زاميا، بوتس، مونستيرا، تين الكمان)",
        "إرشادات عناية دقيقة ومتابعة مجانية للري والتربة"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، أبحث عن نبتة داخلية تناسب هذه المساحة بالمنزل. هذه صورة المكان وأرغب في معرفة الخيارات والأحجام المتوفرة.",
      buttonLabel: "أرسل صورة الصالة أو الغرفة",
      catalogLink: "/#plants-home",
      catalogLabel: "استعراض أصناف نباتات البيت"
    },
    {
      id: "outdoor",
      icon: Trees,
      title: "من الحوش أو الحديقة",
      subtitle: "أشجار وظلال وألوان للأسوار والمداخل",
      badge: "خضرة للخارج",
      badgeBg: "bg-[#f7ebe5]",
      badgeText: "text-[#9c4c2d]",
      description: "ألوان على السور، شجرة عند المدخل، أو ظل حول الجلسة. تعرّف على خيارات النباتات والأشجار الخارجية، ودعنا نساعدك على توزيعها بحسب مساحة الموقع وظروفه بالرياض.",
      features: [
        "خيارات شجرية ومزهرة (جهنمية، ياسمين هندي، بلوميريا، أكاسيا)",
        "أحجام ومقاسات جاهزة مع تهيئة وتأصيل جذورها بالمشتل",
        "تحديد أوقات الري المناسبة لحماية الشجر من جفاف الصيف"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، أحتاج إلى نباتات وأشجار خارجية لموقعي في الرياض. أرفق الصور وأرغب في ترشيح أصناف مناسبة وعرض توريد.",
      buttonLabel: "أرسل صورة الحوش أو السور",
      catalogLink: "/#plants-outdoor",
      catalogLabel: "استعراض خيارات الخضرة الخارجية"
    },
    {
      id: "offices",
      icon: Building2,
      title: "من مساحة العمل",
      subtitle: "تنسيق مكاتب ومقرات وشركات",
      badge: "خضرة للعمل",
      badgeBg: "bg-[#f4efea]",
      badgeText: "text-[#424944]",
      description: "استقبال أكثر ترحيبًا، ومكتب بتفاصيل ألطف، ومقرّ تعكس نباتاته هوية المكان. ننسّق النباتات والأحواض للمكاتب والشركات، مع خيارات للري الذاتي والصيانة الشهرية.",
      features: [
        "أحواض ذاتية الري تصل مدة الري فيها إلى 21 يوماً",
        "تنسيق راقٍ بمقرات الأعمال يقلل المتابعة اليومية",
        "عقود صيانة شهرية وزيارات دورية للشركات بالرياض"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، أرغب في تنسيق النباتات لمقر العمل بالرياض، ومعرفة خيارات الأحواض ذاتية الري وعقود الصيانة الشهرية.",
      buttonLabel: "أرسل تفاصيل ومساحات المقر",
      catalogLink: "/#plants-work",
      catalogLabel: "خيارات نباتات المكاتب"
    },
    {
      id: "landscape",
      icon: Home,
      title: "حديقة جديدة أو تجديد قديم",
      subtitle: "تصميم وتنفيذ وتجديد حدائق الفلل",
      badge: "حديقتك معنا",
      badgeBg: "bg-[#e8dfd3]",
      badgeText: "text-[#102117]",
      description: "للفلل والاستراحات والأحواش والمساحات التجارية: نبدأ بالمعاينة، ثم نضع التصور وننفّذ الزراعة والري والممرات والإضاءة، بحسب احتياج مشروعك.",
      features: [
        "زيارة ومعاينة ميدانية مجانية في جميع أحياء الرياض",
        "مخططات ثنائية وثلاثية الأبعاد 2D/3D قبل التنفيذ",
        "شبكات ري إيطالية أوتوماتيكية توفر 40% من المياه",
        "ضمان 100% على جودة وحيوية الشتلات وسلامة التجذّر"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، أرغب في حجز موعد معاينة ميدانية مجانية لتنسيق أو تجديد حديقة في الرياض. هذا الموقع وصور المساحة.",
      buttonLabel: "احجز زيارة معاينة مجانية لفلتك",
      catalogLink: "/#services",
      catalogLabel: "تفاصيل خدمات تنسيق الحدائق"
    }
  ];

  const current = intents.find((i) => i.id === selectedIntent) || intents[0];

  return (
    <section 
      id="intent-guide" 
      className="py-12 sm:py-16 lg:py-20 bg-[#f4efea] border-b border-[#e8dfd3]"
      aria-labelledby="intent-heading"
    >
      <div className="container-main">
        
        {/* Header */}
        <div className="text-right max-w-2xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8dfd3] text-[#183324] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b8603d]" />
            <span>بوصلة التوجيه السريع</span>
          </div>

          <h2 
            id="intent-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#102117] leading-snug mb-3 font-heading"
          >
            وين تبدأ بصمتك؟
          </h2>
          <p className="text-sm sm:text-base text-[#424944] leading-relaxed">
            اضغط على المساحة التي تفكّر فيها، ودعنا نساعدك في ترتيب الخضرة الملائمة لها:
          </p>
        </div>

        {/* 4 Clickable Intent Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {intents.map((item) => {
            const isSelected = item.id === selectedIntent;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIntent(item.id)}
                className={`text-right p-4 sm:p-5 rounded-xl sm:rounded-2xl transition-all duration-200 flex flex-col justify-between min-h-[140px] sm:min-h-[155px] cursor-pointer border ${
                  isSelected
                    ? "bg-[#183324] text-white border-[#183324] shadow-md transform -translate-y-0.5"
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

                <p className={`text-[11px] sm:text-xs mt-2 line-clamp-2 leading-relaxed ${
                  isSelected ? "text-[#d6c7b5]" : "text-[#6f7872]"
                }`}>
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Selection Details Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e8dfd3] shadow-sm mb-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Description & Points (8 cols) */}
            <div className="lg:col-span-8 text-right space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-md ${current.badgeBg} ${current.badgeText}`}>
                  {current.badge}
                </span>
                <span className="text-xs text-[#6f7872]">خيارك المحدد الآن</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#102117] mb-2 font-heading leading-snug">
                  {current.title} — {current.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-[#424944] leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2 pt-1">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1c1f1d]">
                    <div className="w-4 h-4 rounded-full bg-[#e9f2ec] text-[#183324] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#183324]" />
                    </div>
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Actions (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3 pt-6 lg:pt-0 lg:border-r lg:border-[#e8dfd3] lg:pr-8">
              
              <a
                href={`https://wa.me/966563340109?text=${encodeURIComponent(current.ctaWhatsApp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#b8603d] hover:bg-[#9c4c2d] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98"
              >
                <Camera className="w-4 h-4 text-white" />
                <span>{current.buttonLabel}</span>
              </a>

              {current.catalogLink && (
                <Link
                  href={current.catalogLink}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#faf8f5] hover:bg-[#f4efea] text-[#183324] border border-[#e8dfd3] font-semibold text-xs transition-colors"
                >
                  <span>{current.catalogLabel}</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              )}

              <p className="text-[11px] text-[#6f7872] text-center mt-1 leading-relaxed">
                استشارة فورية ومجانية من مهندسنا الزراعي عبر الواتساب
              </p>
            </div>

          </div>
        </div>

        {/* Feature Banner: صورة من المكان… ومنها نبدأ */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e8dfd3] flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
          <div className="max-w-xl">
            <h3 className="font-bold text-lg sm:text-xl text-[#102117] mb-2 font-heading leading-snug">
              صورة من المكان… ومنها نبدأ
            </h3>
            <p className="text-xs sm:text-sm text-[#424944] leading-relaxed">
              اختيار النبتة يصبح أسهل حين نعرف أين ستعيش. أرسل لنا صورة المساحة، واذكر إضاءتها وحجمها، وسيساعدك مهندسنا الزراعي في ترشيح خيارات مناسبة مجانًا عبر الواتساب.
            </p>
          </div>

          <a
            href="https://wa.me/966563340109?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A8%D8%B5%D9%85%D8%A9%20%D8%A7%D9%8A%D9%85%D8%A7%D8%8C%20%D9%87%D8%B0%D9%87%20%D8%B5%D9%88%D8%B1%D8%A9%20%D9%85%D9%83%D8%A7%D9%86%D9%8A%20%D9%88%D8%A3%D9%88%D8%AF%20%D8%AA%D8%B1%D8%B4%D9%8A%D8%AD%D8%A7%D8%AA%D9%83%D9%85%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B3%D8%A9."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#183324] hover:bg-[#102117] text-white font-bold text-xs sm:text-sm shrink-0 shadow-md transition-all active:scale-98"
          >
            <Camera className="w-4 h-4 text-[#d6c7b5]" />
            <span>أرسل صورة مكانك</span>
          </a>
        </div>

      </div>
    </section>
  );
}
