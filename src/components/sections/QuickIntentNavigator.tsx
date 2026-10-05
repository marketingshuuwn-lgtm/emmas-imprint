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
        "الاختيار بحسب الإضاءة والمساحة وطريقة العناية",
        "تشكيلة مميزة (سانسيفيريا، زاميا، بوتس، مونستيرا، تين الكمان)",
        "اسأل عن احتياج النبات للضوء والري"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، أبحث عن نبتة داخلية تناسب هذه المساحة بالمنزل. سأصف المكان والإضاءة وأرغب في معرفة الخيارات والأحجام المتوفرة.",
      buttonLabel: "طلب ترشيح نبات للبيت",
      catalogLink: "/plants/indoor",
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
        "اسأل عن الأحجام والكمية المتاحة قبل الطلب",
        "تحديد أوقات الري المناسبة لحماية الشجر من جفاف الصيف"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، أحتاج إلى نباتات وأشجار خارجية لموقعي في الرياض. سأصف الموقع والتعرض للشمس وأرغب في ترشيح أصناف مناسبة وعرض توريد.",
      buttonLabel: "طلب ترشيح نبات للخارج",
      catalogLink: "/plants/outdoor",
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
        "خيارات أحواض وري بحسب النبات وظروف المكتب",
        "تنسيق راقٍ بمقرات الأعمال يقلل المتابعة اليومية",
        "عقود صيانة شهرية وزيارات دورية للشركات بالرياض"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، أرغب في تنسيق النباتات لمقر العمل بالرياض، ومعرفة خيارات الأحواض ذاتية الري وعقود الصيانة الشهرية.",
      buttonLabel: "طلب تنسيق نباتات المكتب",
      catalogLink: "/plants/offices",
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
        "طلب معاينة وتأكيد الموعد والتفاصيل قبل الزيارة",
        "مناقشة توزيع عناصر الحديقة قبل التنفيذ",
        "شبكات ري وجدولة بحسب توزيع النباتات",
        "عرض يوضح نطاق العمل والسعر وشروط الضمان إن كان مقدمًا"
      ],
      ctaWhatsApp: "مرحباً بصمة ايما، أرغب في طلب معاينة لتنسيق أو تجديد حديقة في الرياض. وصف الموقع والمساحة: ",
      buttonLabel: "طلب معاينة للحديقة",
      catalogLink: "/services",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8dfd3] text-[#183324] text-sm font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#9c4c2d]" />
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
                      isSelected ? "bg-[#9c4c2d] text-white" : "bg-[#f4efea] text-[#183324]"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#9c4c2d]" />
                    )}
                  </div>

                  <h3 className="font-bold text-sm sm:text-base leading-snug font-heading">
                    {item.title}
                  </h3>
                </div>

                <p className={`text-sm sm:text-sm mt-2 line-clamp-2 leading-relaxed ${
                  isSelected ? "text-[#d6c7b5]" : "text-[#5b655e]"
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
                <span className={`text-sm font-bold px-3 py-1 rounded-md ${current.badgeBg} ${current.badgeText}`}>
                  {current.badge}
                </span>
                <span className="text-sm text-[#5b655e]">خيارك المحدد الآن</span>
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
                  <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-sm text-[#1c1f1d]">
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
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#9c4c2d] hover:bg-[#7f3d25] text-white font-bold text-sm sm:text-sm shadow-md transition-all active:scale-98"
              >
                <Camera className="w-4 h-4 text-white" />
                <span>{current.buttonLabel}</span>
              </a>

              {current.catalogLink && (
                <Link
                  href={current.catalogLink}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#faf8f5] hover:bg-[#f4efea] text-[#183324] border border-[#e8dfd3] font-semibold text-sm transition-colors"
                >
                  <span>{current.catalogLabel}</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              )}

              <p className="text-sm text-[#5b655e] text-center mt-1 leading-relaxed">
                صف المكان والإضاءة؛ الصورة اختيارية. تُؤكد تفاصيل الطلب مع الفريق.
              </p>
            </div>

          </div>
        </div>

        {/* Feature Banner: وصف المكان يكفي للبدء */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e8dfd3] flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
          <div className="max-w-xl">
            <h3 className="font-bold text-lg sm:text-xl text-[#102117] mb-2 font-heading leading-snug">
              وصف المكان يكفي للبدء
            </h3>
            <p className="text-sm sm:text-sm text-[#424944] leading-relaxed">
              اذكر المساحة والإضاءة والوقت المتاح للعناية. يمكنك إرفاق صورة إذا رغبت أو الاكتفاء بالوصف عبر واتساب.
            </p>
          </div>

          <a
            href={`https://wa.me/966563340109?text=${encodeURIComponent("مرحبًا بصمة ايما، أود ترشيح نبات بناءً على وصف المكان والإضاءة: ")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#183324] hover:bg-[#102117] text-white font-bold text-sm sm:text-sm shrink-0 shadow-md transition-all active:scale-98"
          >
            <Camera className="w-4 h-4 text-[#d6c7b5]" />
            <span>طلب ترشيح نبات</span>
          </a>
        </div>

      </div>
    </section>
  );
}
