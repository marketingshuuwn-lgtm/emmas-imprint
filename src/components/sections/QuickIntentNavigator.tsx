"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sprout, 
  Trees, 
  Building2, 
  Home, 
  MessageCircle, 
  ArrowLeft, 
  CheckCircle2, 
  Phone,
  Sparkles
} from "lucide-react";
import { siteContent } from "@/content/site-content";

interface IntentOption {
  id: string;
  icon: typeof Sprout;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  description: string;
  features: string[];
  primaryAction: {
    label: string;
    href: string;
    isExternal?: boolean;
    isWhatsApp?: boolean;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
}

export function QuickIntentNavigator() {
  const [selectedIntent, setSelectedIntent] = useState<string>("indoor");

  const intents: IntentOption[] = [
    {
      id: "indoor",
      icon: Sprout,
      title: "نباتات داخلية",
      subtitle: "للصالات وغرف النوم ومداخل الفلل",
      badge: "الأكثر طلباً للمنازل",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      description: "نباتات ظل منتقاة بعناية تلائم الأجواء الداخلية المكيفة، تنقي الهواء وتضفي لمسة هادئة وفخمة بدون متطلبات عناية معقدة.",
      features: [
        "أصناف مجربة وموثوقة (بوتس، زاميا، جلد النمر، مونستيرا)",
        "خيارات أحواض سيراميك وفايبر راقية تناسب الديكور",
        "توصيل سريع مع إرشادات الري والإضاءة"
      ],
      primaryAction: {
        label: "تصفح النباتات الداخلية (50 صنفاً)",
        href: "/projects?category=indoor",
      },
      secondaryAction: {
        label: "استشارة فورية عبر واتساب",
        href: `https://wa.me/966563340109?text=${encodeURIComponent(
          "مرحباً بصمة ايما الزراعية، أبحث عن نباتات داخلية مناسبة لمنزلي وأود المساعدة في الاختيار."
        )}`,
      }
    },
    {
      id: "outdoor",
      icon: Trees,
      title: "نباتات وأشجار خارجية",
      subtitle: "لأحواش الفلل، المداخل، والأسوار",
      badge: "متحملة لمناخ وحرارة الرياض",
      badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
      description: "أشجار ظل وارفة، سواتر نباتية مانعة للرؤية، زهور عطرية، ونخيل متأقلم 100% مع شمس الرياض ودرجات الحرارة العالية.",
      features: [
        "سدر، غاف، جهنمية، بلوميريا، واشنطونيا، وأشجار فواكه",
        "أحجام ومقاسات جاهزة للغرس المباشر",
        "نصائح هندسية لجدولة الري ومواقع الظل والشمس"
      ],
      primaryAction: {
        label: "استعراض موسوعة الأشجار (50 صنفاً)",
        href: "/projects?category=outdoor",
      },
      secondaryAction: {
        label: "طلب كميات خارجية عبر واتساب",
        href: `https://wa.me/966563340109?text=${encodeURIComponent(
          "مرحباً بصمة ايما الزراعية، أود الاستفسار عن توفر أشجار ونباتات خارجية لحديقة منزلي بالرياض."
        )}`,
      }
    },
    {
      id: "offices",
      icon: Building2,
      title: "نباتات المكاتب والشركات",
      subtitle: "لمقرات العمل، الاستقبال، وقاعات الاجتماعات",
      badge: "أحواض ذاتية الري وصيانة سهلة",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      description: "تنسيق نباتي مؤسسي يمنح بيئة عملك مظهراً مرموقاً، يرفع من إنتاجية الموظفين ويرحب بضيوفك بأناقة تليق بعلامتك التجارية.",
      features: [
        "أحواض ذاتية الري الذكي (ري مرة كل أسبوعين إلى شهر)",
        "نباتات قوية تتحمل الإضاءة الصناعية وتكييف المكاتب",
        "عقود توريد وصيانة دورية وفواتير ضريبية معتمدة"
      ],
      primaryAction: {
        label: "طلب استشارة تأثيث المكاتب",
        href: `https://wa.me/966563340109?text=${encodeURIComponent(
          "مرحباً بصمة ايما، أود الاستفسار عن باقات النباتات وتنسيق المكاتب والشركات بالرياض."
        )}`,
        isWhatsApp: true,
      },
      secondaryAction: {
        label: "اتصال مباشر: 0563340109",
        href: "tel:+966563340109",
      }
    },
    {
      id: "landscaping",
      icon: Home,
      title: "تصميم وتنسيق حدائق",
      subtitle: "من المخطط المبدئي وحتى اكتمال الحديقة",
      badge: "معاينة وزيارة ميدانية مجانية",
      badgeColor: "bg-emerald-400/20 text-emerald-200 border-emerald-400/40",
      description: "خدمة متكاملة بإشراف مهندس زراعي: شبكات ري أوتوماتيكية، زراعة عشب طبيعي وصناعي، شلالات ونوافير، وتوزيع ذكي للمساحات.",
      features: [
        "زيارة مهندس مختص لرفع المقاسات وفحص الموقع مجاناً",
        "مخطط توزيع احترافي قبل بدء التنفيذ",
        "ضمان شامل على النباتات وشبكات الري"
      ],
      primaryAction: {
        label: "حجز زيارة ميدانية مجانية بالرياض",
        href: "/#contact",
      },
      secondaryAction: {
        label: "محادثة المهندس عبر واتساب",
        href: `https://wa.me/966563340109?text=${encodeURIComponent(
          "مرحباً بصمة ايما الزراعية، أرغب بحجز زيارة ميدانية مجانية لمهندس زراعي لتنسيق حديقة منزلي."
        )}`,
      }
    }
  ];

  const current = intents.find((i) => i.id === selectedIntent) || intents[0];
  const CurrentIcon = current.icon;

  return (
    <section 
      id="intent-guide" 
      className="py-12 md:py-20 bg-gradient-to-b from-[#071d12] via-[#092216] to-[#0d2a1b] text-white relative overflow-hidden"
      aria-labelledby="intent-guide-heading"
    >
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>دليلك التفاعلي السريع • اختصر وقتك</span>
          </div>

          <h2
            id="intent-guide-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 font-heading leading-tight"
          >
            وش تبحث عنه اليوم؟
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-emerald-100/80 prose-ar leading-relaxed">
            اختر ما يناسب طلبك بنقرة واحدة لنرشدك فوراً لأفضل الخيارات وأسرع وسيلة للطلب:
          </p>
        </div>

        {/* The 4 Big Touch-Friendly Intent Cards (Grid on desktop & mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {intents.map((intent) => {
            const Icon = intent.icon;
            const isSelected = selectedIntent === intent.id;
            return (
              <button
                key={intent.id}
                type="button"
                onClick={() => setSelectedIntent(intent.id)}
                className={`flex flex-col text-right p-4 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-b from-emerald-800/90 to-emerald-950/90 border-emerald-400/80 shadow-xl shadow-emerald-950/60 ring-2 ring-emerald-400/40 transform -translate-y-1"
                    : "bg-emerald-950/40 hover:bg-emerald-900/40 border-emerald-500/20 hover:border-emerald-500/40 shadow-md"
                }`}
              >
                {/* Active indicator dot */}
                {isSelected && (
                  <span className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm" />
                )}

                <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-105 shrink-0 ${
                  isSelected 
                    ? "bg-gradient-to-tr from-emerald-400 to-teal-300 text-emerald-950 shadow-md" 
                    : "bg-emerald-900/60 text-emerald-300 border border-emerald-500/20"
                }`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <span className="font-black text-sm sm:text-base text-white mb-1 leading-snug font-heading">
                  {intent.title}
                </span>

                <span className="text-[11px] sm:text-xs text-emerald-200/70 leading-tight hidden sm:block">
                  {intent.subtitle}
                </span>

                <div className="mt-3 pt-2.5 border-t border-emerald-800/50 flex items-center justify-between w-full">
                  <span className={`text-[10px] sm:text-[11px] font-bold ${
                    isSelected ? "text-emerald-300" : "text-emerald-400/80 group-hover:text-emerald-300"
                  }`}>
                    {isSelected ? "تم التحديد ✓" : "اضغط للاستعراض"}
                  </span>
                  <ArrowLeft className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? "translate-x-[-2px] text-emerald-300" : "text-emerald-400/60 group-hover:translate-x-[-2px]"
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Intent Detailed Interactive Panel */}
        <div className="bg-gradient-to-br from-[#0c2e1c] via-[#092416] to-[#06190f] rounded-3xl p-6 sm:p-8 md:p-10 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Right Column: Information & Guarantees */}
            <div className="lg:col-span-7 space-y-4 text-right">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${current.badgeColor}`}>
                  {current.badge}
                </span>
                <span className="text-xs text-emerald-300 font-mono">
                  {siteContent.business.nameShort} • مسار مباشر
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-800/80 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-300/80">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 prose-ar leading-relaxed">
                {current.description}
              </p>

              {/* Bullet Features */}
              <div className="space-y-2 pt-2 border-t border-emerald-800/50">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Column: Direct High-Conversion Actions */}
            <div className="lg:col-span-5 bg-black/25 backdrop-blur-md p-5 sm:p-7 rounded-2xl border border-emerald-500/20 flex flex-col gap-3.5">
              <span className="text-xs font-bold text-emerald-300 block text-right">
                اختر طريقة المتابعة الأنسب لك:
              </span>

              {/* Primary Action Button */}
              {current.primaryAction.href.startsWith("http") ? (
                <a
                  href={current.primaryAction.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-black text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-950 group-hover:scale-110 transition-transform" />
                  <span>{current.primaryAction.label}</span>
                </a>
              ) : (
                <Link
                  href={current.primaryAction.href}
                  className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-black text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{current.primaryAction.label}</span>
                  <ArrowLeft className="w-4 h-4 text-emerald-950 group-hover:-translate-x-1 transition-transform" />
                </Link>
              )}

              {/* Secondary Action (WhatsApp / Call) */}
              <a
                href={current.secondaryAction.href}
                target={current.secondaryAction.href.startsWith("http") ? "_blank" : undefined}
                rel={current.secondaryAction.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm text-center border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {current.secondaryAction.href.startsWith("tel:") ? (
                  <Phone className="w-4 h-4 text-emerald-400" />
                ) : (
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                )}
                <span>{current.secondaryAction.label}</span>
              </a>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-emerald-300/70 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>مشتل ومعرض حي • طريق أبو بكر الصديق</span>
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
