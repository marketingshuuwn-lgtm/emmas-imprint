"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Droplets, Sparkles, Camera, ArrowLeft } from "lucide-react";

interface PlantItem {
  id: string;
  name: string;
  scientificName: string;
  category: "outdoor-sun" | "indoor-shade" | "self-watering" | "pet-safe";
  description: string;
  sunTolerance: string;
  waterFreq: string;
  riyadhAdvice: string;
  image: string;
  tag: string;
}

const plantsCatalog: PlantItem[] = [
  {
    id: "bougainvillea",
    name: "الجهنمية المعمرة (بوفيديا)",
    scientificName: "Bougainvillea Spectabilis",
    category: "outdoor-sun",
    description: "بطلة أسوار الرياض؛ تعشق شمس الصيف المباشرة حتى 50°، وتزهر بغزارة بألوان بنفسجية ووردية مبهرة طوال العام.",
    sunTolerance: "شمس حارقة مباشرة 100%",
    waterFreq: "يومياً فجراً بالصيف • مرتين أسبوعياً بالشتاء",
    riyadhAdvice: "ازرعها بجوار السور أو المظلة لتعطيك ساتراً طبيعياً يحجب الغبار والحرارة.",
    image: "/images/service-landscaping.jpg",
    tag: "تتحمل صيف 50°",
  },
  {
    id: "plumeria",
    name: "الياسمين الهندي (البلوميريا)",
    scientificName: "Plumeria Obtusa",
    category: "outdoor-sun",
    description: "شجرة استوائية عطرية نادرة التكيف مع حرارة الرياض؛ أزهارها بيضاء صفراء ذات عطر ساحر في ليالي الصيف.",
    sunTolerance: "شمس مباشرة إلى نصف ظليل",
    waterFreq: "مرة يومياً بالصيف • عند جفاف التربة بالشتاء",
    riyadhAdvice: "ضعها في مدخل الفناء الخارجي لتستمتع برائحتها العطرية الفواحة وقت المساء.",
    image: "/images/hero-garden.jpg",
    tag: "عطرية ومقاومة للحرارة",
  },
  {
    id: "sansevieria",
    name: "جلد النمر (سانسيفيريا)",
    scientificName: "Sansevieria Trifasciata",
    category: "indoor-shade",
    description: "أقوى نبتة صالات في العالم؛ تخزن الماء في أوراقها السميكة وتعيش بامتياز في جو التكييف البارد والإضاءة المحدودة.",
    sunTolerance: "إضاءة غرف معتدلة أو خافتة",
    waterFreq: "كل 12 إلى 15 يوماً (لا تسقِ حتى تجف التربة)",
    riyadhAdvice: "القاتل الوحيد لها هو كثرة السقي؛ اترك تربتها تجف تماماً قبل أن ترويها ثانية.",
    image: "/images/plant-sansevieria.jpg",
    tag: "الأقوى تحملاً للتكييف",
  },
  {
    id: "zz-plant",
    name: "الزاميا اللامعة (ZZ Plant)",
    scientificName: "Zamioculcas Zamiifolia",
    category: "indoor-shade",
    description: "نبتة أنيقة بأوراق شمعية داكنة فائقة اللمعان. تتحمل أسابيع من الإهمال وتزدهر حتى تحت الإضاءة الفلورية المكتبية.",
    sunTolerance: "إضاءة منخفضة إلى متوسطة",
    waterFreq: "مرة كل 2 إلى 3 أسابيع",
    riyadhAdvice: "ممتازة لزوايا الممرات والصالات التي تفتقر للنوافذ الطبيعية.",
    image: "/images/plant-monstera.jpg",
    tag: "لا تحتاج لعناية يومية",
  },
  {
    id: "monstera",
    name: "المونستيرا (القفص الصدري)",
    scientificName: "Monstera Deliciosa",
    category: "indoor-shade",
    description: "أيقونة الديكور الداخلي بأوراقها العريضة المشرحة التي تضفي هيبة استوائية هادئة على صالات الاستقبال المفتوحة.",
    sunTolerance: "إضاءة ساطعة غير مباشرة (قرب نافذة)",
    waterFreq: "مرة أسبوعياً صيفاً • كل 10 أيام شتاءً",
    riyadhAdvice: "امسح أوراقها بقطعة قماش مبللة كل أسبوعين لإزالة غبار الرياض لتتنفس بعمق.",
    image: "/images/plant-monstera.jpg",
    tag: "أيقونة الصالات",
  },
  {
    id: "ficus-lyrata",
    name: "فيكس ليراتا (تين الكمان)",
    scientificName: "Ficus Lyrata",
    category: "self-watering",
    description: "شجرة داخلية معمارية بأوراق كبيرة تشبه آلة الكمان؛ نقدمها بأحواض هيدروليكية ذاتية التغذية تناسب مقرات الأعمال.",
    sunTolerance: "إضاءة قوية غير مباشرة",
    waterFreq: "ري ذاتي (تعبئة الخزان كل 18 يوماً)",
    riyadhAdvice: "حافظ على ثبات موقعها داخل المكتب وتجنب نقلها المتكرر حتى لا تصاب بصدمة.",
    image: "/images/plant-ficus.jpg",
    tag: "أحواض ذاتية الري للمكاتب",
  },
  {
    id: "areca-palm",
    name: "نخيل الأريكا المنقي للهواء",
    scientificName: "Dypsis Lutescens",
    category: "self-watering",
    description: "ريش أخضر متهدل يمنح المكاتب وقاعات الاجتماعات بهجة وارتفاعاً بصرياً يقلل من التوتر ويزيد رطوبة الهواء.",
    sunTolerance: "إضاءة مكتبية جيدة",
    waterFreq: "ري ذاتي (تعبئة الخزان كل 14 يوماً)",
    riyadhAdvice: "أفضل نبتة لتجديد هواء المكاتب المغلقة ذات التكييف المركزي.",
    image: "/images/plant-areca.jpg",
    tag: "تنقية هواء للمقرات",
  },
  {
    id: "spider-plant",
    name: "نبتة العنكبوت (سبايدر)",
    scientificName: "Chlorophytum Comosum",
    category: "pet-safe",
    description: "نبتة رشيقة وسريعة النمو بأوراق مقلمة بالأبيض والأخضر، آمنة وغير سامة تماماً للقطط والأطفال مع قدرة فائقة على تنقية السموم.",
    sunTolerance: "إضاءة غير مباشرة معتدلة",
    waterFreq: "مرة أسبوعياً عند جفاف السطح",
    riyadhAdvice: "يمكن تعليقها في أوانٍ متدلية لتعطي مظهراً جميلاً بعيداً عن أيدي الصغار.",
    image: "/images/plant-peacelily.jpg",
    tag: "آمنة 100% للحيوانات والأطفال",
  },
  {
    id: "calathea",
    name: "كالاتيا المخططة (نبتة الصلاة)",
    scientificName: "Calathea Orbifolia",
    category: "pet-safe",
    description: "لوحة فنية طبيعية ترتفع أوراقها ليلاً كأنها تصلي؛ أوراق دائرية عريضة بنقوش فضية وخضراء، آمنة للأطفال والحيوانات الأليفة.",
    sunTolerance: "ظل جزئي وإضاءة ناعمة",
    waterFreq: "مرة أسبوعياً بماء معتدل الأملاح",
    riyadhAdvice: "يفضل ريها بمياه شرب معتدلة لتفادي جفاف أطراف أوراقها الحساسة للأملاح.",
    image: "/images/plant-monstera.jpg",
    tag: "أوراق فنية غير سامة",
  },
];

export function Plants() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredPlants =
    activeFilter === "all"
      ? plantsCatalog
      : plantsCatalog.filter((p) => p.category === activeFilter);

  return (
    <section
      id="plants"
      className="py-16 sm:py-24 bg-[#faf8f5] text-[#1c1f1d] border-b border-[#e8dfd3]"
      aria-labelledby="plants-heading"
    >
      <div className="container-main">
        
        {/* Section Header */}
        <div className="max-w-3xl text-right mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8dfd3] text-[#183324] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b8603d]" />
            <span>دليل نباتات الرياض الواقعي</span>
          </div>

          <h2
            id="plants-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#102117] leading-tight mb-4 font-heading"
          >
            نباتات مؤصّلة لمناخ الرياض، <br />
            <span className="text-[#b8603d]">مصنفة حسب واقع غرفتك أو حوشك.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#424944] leading-relaxed">
            اختر بيئة مساحتك وسنظهر لك النباتات التي تناسبها دون وعود خيالية:
          </p>
        </div>

        {/* Realistic Riyadh Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {[
            { id: "all", label: `جميع الأصناف (${plantsCatalog.length})` },
            { id: "outdoor-sun", label: "☀️ شمس الرياض المباشرة (أحواش وأسوار)" },
            { id: "indoor-shade", label: "❄️ صالات مكيفة وظل (تتحمل التكييف)" },
            { id: "self-watering", label: "🏢 مكاتب وشركات (أحواض ري ذاتي)" },
            { id: "pet-safe", label: "🐾 آمنة للأطفال والحيوانات الأليفة" },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 border ${
                  isActive
                    ? "bg-[#183324] text-white border-[#183324] shadow-sm"
                    : "bg-white text-[#424944] border-[#e8dfd3] hover:border-[#b8603d] hover:bg-[#faf8f5]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Plants Grid (Clean Editorial Cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
          {filteredPlants.map((plant) => (
            <div
              key={plant.id}
              className="editorial-card rounded-2xl overflow-hidden border border-[#e8dfd3] bg-white flex flex-col justify-between"
            >
              <div>
                
                {/* Photo with Tag */}
                <div className="relative h-60 w-full overflow-hidden bg-[#f4efea] border-b border-[#e8dfd3]">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 right-3 bg-[#102117]/85 backdrop-blur-sm text-[#faf8f5] text-[11px] font-bold px-3 py-1 rounded-md">
                    {plant.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 text-right">
                  <div className="mb-3">
                    <h3 className="font-bold text-base sm:text-lg text-[#102117] font-heading">
                      {plant.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#6f7872] italic">
                      {plant.scientificName}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#424944] leading-relaxed mb-4">
                    {plant.description}
                  </p>

                  {/* 2 Riyadh Field Specs */}
                  <div className="space-y-2 p-3 rounded-xl bg-[#faf8f5] border border-[#e8dfd3] text-xs mb-4">
                    <div className="flex items-start gap-2">
                      <Sun className="w-3.5 h-3.5 text-[#b8603d] shrink-0 mt-0.5" />
                      <span className="text-[#1c1f1d]"><strong>الإضاءة:</strong> {plant.sunTolerance}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Droplets className="w-3.5 h-3.5 text-[#2f5d43] shrink-0 mt-0.5" />
                      <span className="text-[#1c1f1d]"><strong>السقي:</strong> {plant.waterFreq}</span>
                    </div>
                  </div>

                  {/* Practical Advice */}
                  <div className="text-[11px] text-[#6f7872] bg-[#f7ebe5] p-2.5 rounded-lg border border-[#e8dfd3]">
                    <strong className="text-[#9c4c2d] block mb-0.5">نصيحة المشتل:</strong>
                    <span>{plant.riyadhAdvice}</span>
                  </div>

                </div>

              </div>

              {/* Action Button */}
              <div className="p-4 sm:p-5 pt-0">
                <a
                  href={`https://wa.me/966563340109?text=${encodeURIComponent(
                    `مرحباً بصمة ايما، أود الاستفسار عن توفر وسعر (${plant.name}) مع إمكانية التوصيل أو الزيارة.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#183324] hover:bg-[#102117] text-white text-xs font-bold transition-colors"
                >
                  <Camera className="w-3.5 h-3.5 text-[#d6c7b5]" />
                  <span>اطلب هذه النبتة أو استشرنا عنها</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Link to Full 100+ Plants Encyclopedia */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#183324] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#2f5d43]">
          <div className="text-right">
            <h3 className="font-bold text-lg sm:text-xl text-white mb-1 font-heading">
              تبحث عن أصناف أخرى؟ لدينا أكثر من 100 صنف نباتي مسجل
            </h3>
            <p className="text-xs sm:text-sm text-[#d6c7b5]">
              تصفح موسوعتنا الشاملة لأشجار الظل، شتلات الفواكه، الصباريات، ونخيل الواشنطونيا بالرياض.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#b8603d] hover:bg-[#9c4c2d] text-white font-bold text-xs sm:text-sm shrink-0 shadow-md transition-all active:scale-98"
          >
            <span>فتح موسوعة الـ 100 نبتة كاملة</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
