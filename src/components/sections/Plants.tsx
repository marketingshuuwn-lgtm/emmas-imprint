"use client";

import { useState } from "react";
import Image from "next/image";
import { Sun, Droplets, Shield, Sparkles, MessageCircle } from "lucide-react";

interface PlantItem {
  id: string;
  name: string;
  scientificName: string;
  category: "low-light" | "bright-indirect" | "large-spaces" | "desks";
  description: string;
  lightLevel: "خفيف / ظليل" | "متوسط غير مباشر" | "إضاءة ساطعة" | "معتدل";
  waterFreq: "كل 10-14 يوم" | "مرة أسبوعياً" | "مرتين أسبوعياً" | "عند جفاف التربة";
  difficulty: "سهلة جداً (للمبتدئين)" | "متوسطة" | "سهلة ومقاومة";
  image: string;
  tag: string;
}

const plantsCatalog: PlantItem[] = [
  {
    id: "monstera",
    name: "نبتة المونستيرا (القفص الصدري)",
    scientificName: "Monstera Deliciosa",
    category: "bright-indirect",
    description: "الأيقونة الملكية في عالم الديكور الداخلي. أوراقها العريضة والمشققة تضفي لمسة استوائية فخمة على صالات المعيشة.",
    lightLevel: "متوسط غير مباشر",
    waterFreq: "مرة أسبوعياً",
    difficulty: "سهلة ومقاومة",
    image: "/images/plant-monstera.jpg",
    tag: "الأكثر طلباً",
  },
  {
    id: "ficus-lyrata",
    name: "فيكس ليراتا (تين الكمان)",
    scientificName: "Ficus Lyrata",
    category: "large-spaces",
    description: "شجرة داخلية ساحرة بأوراق عملاقة تشبه آلة الكمان، تعد الخيار المفضل لمصممي الديكور لإبراز زوايا الصالونات المرتفعة.",
    lightLevel: "إضاءة ساطعة",
    waterFreq: "مرة أسبوعياً",
    difficulty: "متوسطة",
    image: "/images/plant-ficus.jpg",
    tag: "ديكور فاخر",
  },
  {
    id: "areca-palm",
    name: "نخيل الأريكا الداخلي",
    scientificName: "Dypsis Lutescens",
    category: "large-spaces",
    description: "يمنح المداخل والبهو الواسع حضوراً استثنائياً وارتفاعاً بصرياً مريحاً مع أوراقه الريشية الخضراء الكثيفة المنقية للهواء.",
    lightLevel: "إضاءة ساطعة",
    waterFreq: "مرتين أسبوعياً",
    difficulty: "متوسطة",
    image: "/images/plant-areca.jpg",
    tag: "للمساحات الكبيرة",
  },
  {
    id: "peace-lily",
    name: "زنبق السلام (الشراع الأبيض)",
    scientificName: "Spathiphyllum",
    category: "bright-indirect",
    description: "نبتة رومانسية هادئة تمتاز بأزهارها البيضاء النقية الشبيهة بالأشرعة، وقدرتها العالية على ترطيب وتنقية أجواء الغرف.",
    lightLevel: "متوسط غير مباشر",
    waterFreq: "مرة أسبوعياً",
    difficulty: "سهلة ومقاومة",
    image: "/images/plant-peacelily.jpg",
    tag: "مزهرة ومنقية",
  },
  {
    id: "sansevieria",
    name: "جلد النمر (نبات الثعبان)",
    scientificName: "Sansevieria Trifasciata",
    category: "low-light",
    description: "أقوى نبات داخلي للتحمل؛ ينمو بكفاءة في زوايا الغرف قليلة الإضاءة، ويتحمل نسيان الري لأسابيع دون أن يفقد نضارته.",
    lightLevel: "خفيف / ظليل",
    waterFreq: "كل 10-14 يوم",
    difficulty: "سهلة جداً (للمبتدئين)",
    image: "/images/plant-sansevieria.jpg",
    tag: "عالية التحمل",
  },
  {
    id: "pothos",
    name: "نبات البوتس الذهبي المتدلي",
    scientificName: "Epipremnum Aureum",
    category: "desks",
    description: "نبتة متسلقة ومتدلية محبوبة جداً بأوراق قلبية موشحة باللون الذهبي، مثالية للأرفف الخشبية والمكاتب والمطابخ الحديثة.",
    lightLevel: "معتدل",
    waterFreq: "مرة أسبوعياً",
    difficulty: "سهلة جداً (للمبتدئين)",
    image: "/images/plant-pothos.jpg",
    tag: "للأرفف والمكاتب",
  },
  {
    id: "dracaena",
    name: "دراسينا مارجيناتا (شجرة التنين)",
    scientificName: "Dracaena Marginata",
    category: "large-spaces",
    description: "تتميز بسيقانها المتعددة الرشيقة وأوراقها الرفيعة ذات الحواف الوردية الرفيعة، تعطي طابعاً معمارياً فسيحاً ومودرن.",
    lightLevel: "متوسط غير مباشر",
    waterFreq: "كل 10-14 يوم",
    difficulty: "سهلة ومقاومة",
    image: "/images/plant-dracaena.jpg",
    tag: "طابع معماري",
  },
  {
    id: "aglaonema",
    name: "أجلونيما الصينية الملونة",
    scientificName: "Aglaonema",
    category: "low-light",
    description: "لوحة تشكيلية طبيعية بدرجات الأخضر والوردي والفضي. تتأقلم مع الإضاءة المنخفضة وتضفي بهجة دافئة على طاولات القهوة والمكاتب.",
    lightLevel: "خفيف / ظليل",
    waterFreq: "كل 10-14 يوم",
    difficulty: "سهلة ومقاومة",
    image: "/images/plant-aglaonema.jpg",
    tag: "ألوان مبهجة",
  },
  {
    id: "zz-plant",
    name: "نبتة الزاميا الزمردية (ZZ)",
    scientificName: "Zamioculcas Zamiifolia",
    category: "desks",
    description: "نبتة أنيقة لا تموت بسهولة؛ أوراقها شمعية براقة كأنها مدهونة بالزيت، تكتفي بالقليل جداً من الماء والضوء الصناعي.",
    lightLevel: "خفيف / ظليل",
    waterFreq: "كل 10-14 يوم",
    difficulty: "سهلة جداً (للمبتدئين)",
    image: "/images/plant-sansevieria.jpg",
    tag: "قليلة المتطلبات",
  },
];

export function Plants() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("living");
  const [selectedLight, setSelectedLight] = useState<string>("indirect");

  const filteredPlants = activeFilter === "all"
    ? plantsCatalog
    : plantsCatalog.filter((p) => p.category === activeFilter);

  // Smart recommendation logic
  const getRecommendation = () => {
    if (selectedLight === "low") {
      return plantsCatalog.find((p) => p.id === "sansevieria") || plantsCatalog[4];
    }
    if (selectedLocation === "foyer" || selectedLocation === "large") {
      return plantsCatalog.find((p) => p.id === "ficus-lyrata") || plantsCatalog[1];
    }
    if (selectedLocation === "office") {
      return plantsCatalog.find((p) => p.id === "pothos") || plantsCatalog[5];
    }
    return plantsCatalog.find((p) => p.id === "monstera") || plantsCatalog[0];
  };

  const recommended = getRecommendation();

  return (
    <section
      id="plants"
      className="section-padding bg-gradient-to-b from-[#fafcf9] via-[#edf6ee] to-[#fafcf9] relative overflow-hidden"
      aria-labelledby="plants-heading"
    >
      {/* Decorative ambient spots */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>كتالوج النباتات الداخلية الطبيعية ({plantsCatalog.length} أصناف)</span>
          </div>
          <h2
            id="plants-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 mb-5 leading-tight"
          >
            نباتات منتقاة بعناية تمنح مساحتك <span className="text-emerald-700">حياةً وأناقة</span>
          </h2>
          <p className="text-base md:text-lg text-emerald-900/80 prose-ar leading-relaxed max-w-2xl mx-auto">
            مجموعة متكاملة من أجمل نباتات الزينة المنزلية والمكتبية المتوافقة مع أجواء منازل الرياض، مع أحواض فخارية وسيراميك فاخرة.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-emerald-900 text-white shadow-xl shadow-emerald-950/20 scale-105"
                : "bg-white text-emerald-900 hover:bg-emerald-50 border border-emerald-200/80"
            }`}
          >
            جميع النباتات ({plantsCatalog.length})
          </button>
          <button
            onClick={() => setActiveFilter("bright-indirect")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeFilter === "bright-indirect"
                ? "bg-emerald-900 text-white shadow-xl shadow-emerald-950/20 scale-105"
                : "bg-white text-emerald-900 hover:bg-emerald-50 border border-emerald-200/80"
            }`}
          >
            للصالات والإضاءة المشرقة
          </button>
          <button
            onClick={() => setActiveFilter("large-spaces")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeFilter === "large-spaces"
                ? "bg-emerald-900 text-white shadow-xl shadow-emerald-950/20 scale-105"
                : "bg-white text-emerald-900 hover:bg-emerald-50 border border-emerald-200/80"
            }`}
          >
            للمداخل والمساحات الواسعة
          </button>
          <button
            onClick={() => setActiveFilter("low-light")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeFilter === "low-light"
                ? "bg-emerald-900 text-white shadow-xl shadow-emerald-950/20 scale-105"
                : "bg-white text-emerald-900 hover:bg-emerald-50 border border-emerald-200/80"
            }`}
          >
            للزوايا والإضاءة الخافتة
          </button>
          <button
            onClick={() => setActiveFilter("desks")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeFilter === "desks"
                ? "bg-emerald-900 text-white shadow-xl shadow-emerald-950/20 scale-105"
                : "bg-white text-emerald-900 hover:bg-emerald-50 border border-emerald-200/80"
            }`}
          >
            للمكاتب والأرفف المتدلية
          </button>
        </div>

        {/* 9 Plant Cards Grid with High-Res Photos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {filteredPlants.map((plant) => (
            <div
              key={plant.id}
              className="group bg-white rounded-3xl overflow-hidden border border-emerald-100/90 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Plant Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-emerald-50">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/95 text-emerald-950 backdrop-blur-md shadow-md border border-white/60">
                    {plant.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Plant Specs & Content */}
              <div className="p-6 flex-1 flex flex-col justify-between text-right">
                <div>
                  <h3 className="text-xl font-bold text-emerald-950 mb-0.5">
                    {plant.name}
                  </h3>
                  <p className="text-xs text-emerald-700/80 font-mono mb-3">
                    {plant.scientificName}
                  </p>
                  <p className="text-sm text-emerald-900/80 prose-ar leading-relaxed mb-5">
                    {plant.description}
                  </p>

                  {/* Botanical Care Specs */}
                  <div className="space-y-2 py-3.5 border-y border-emerald-100/80 text-xs">
                    <div className="flex items-center justify-between text-emerald-950">
                      <span className="flex items-center gap-2 text-emerald-700">
                        <Sun className="w-4 h-4 text-amber-500" />
                        الإضاءة:
                      </span>
                      <span className="font-semibold">{plant.lightLevel}</span>
                    </div>

                    <div className="flex items-center justify-between text-emerald-950">
                      <span className="flex items-center gap-2 text-emerald-700">
                        <Droplets className="w-4 h-4 text-teal-500" />
                        معدل الري:
                      </span>
                      <span className="font-semibold">{plant.waterFreq}</span>
                    </div>

                    <div className="flex items-center justify-between text-emerald-950">
                      <span className="flex items-center gap-2 text-emerald-700">
                        <Shield className="w-4 h-4 text-emerald-600" />
                        صعوبة العناية:
                      </span>
                      <span className="font-semibold">{plant.difficulty}</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Order */}
                <div className="pt-4 mt-auto">
                  <a
                    href={`https://wa.me/966578326985?text=${encodeURIComponent(
                      `مرحباً بصمة ايما الزراعية، أود الاستفسار عن توفر وسعر: ${plant.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-700 text-emerald-900 hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 border border-emerald-200/80 hover:border-emerald-700 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>طلب واستفسار فوري عبر واتساب</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Plant Matcher Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200/80 shadow-2xl">
          
          {/* Smart Selector Form */}
          <div className="lg:col-span-7 text-right">
            <div className="flex items-center gap-2.5 mb-3 text-emerald-700 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>مستشار النباتات التفاعلي</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mb-3">
              لست متأكداً أي نبتة تلائم زاوية منزلك؟
            </h3>
            <p className="text-sm text-emerald-800/80 prose-ar mb-6">
              اختر الموقع ومستوى الإضاءة المتوفر لديك، وسنحدد لك الخيار الأنسب لحيوية المكان:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-emerald-900 mb-2">
                  أين ترغب بوضع النبتة؟
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setSelectedLocation("living")}
                    className={`w-full text-right px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                      selectedLocation === "living"
                        ? "bg-emerald-100 border-emerald-600 text-emerald-950"
                        : "bg-emerald-50/50 border-emerald-100 text-emerald-800"
                    }`}
                  >
                    🛋️ صالة معيشة أو مجلس رئيسي
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedLocation("foyer")}
                    className={`w-full text-right px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                      selectedLocation === "foyer"
                        ? "bg-emerald-100 border-emerald-600 text-emerald-950"
                        : "bg-emerald-50/50 border-emerald-100 text-emerald-800"
                    }`}
                  >
                    🚪 مدخل الفيلا أو بهو مرتفع
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedLocation("office")}
                    className={`w-full text-right px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                      selectedLocation === "office"
                        ? "bg-emerald-100 border-emerald-600 text-emerald-950"
                        : "bg-emerald-50/50 border-emerald-100 text-emerald-800"
                    }`}
                  >
                    💻 مكتب أو رف جداري
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-emerald-900 mb-2">
                  مستوى الإضاءة في المكان؟
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setSelectedLight("indirect")}
                    className={`w-full text-right px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                      selectedLight === "indirect"
                        ? "bg-emerald-100 border-emerald-600 text-emerald-950"
                        : "bg-emerald-50/50 border-emerald-100 text-emerald-800"
                    }`}
                  >
                    🌤️ إضاءة شمس مشرقة غير مباشرة
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedLight("low")}
                    className={`w-full text-right px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                      selectedLight === "low"
                        ? "bg-emerald-100 border-emerald-600 text-emerald-950"
                        : "bg-emerald-50/50 border-emerald-100 text-emerald-800"
                    }`}
                  >
                    🌑 زاوية مظلمة أو إضاءة سبوتلايت فقط
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Match Result Display */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-[#0a2f1b] rounded-2xl p-6 text-white text-right shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 mb-3">
              ترشيح خبير المشتل لك ✨
            </span>

            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/20">
                <Image
                  src={recommended.image}
                  alt={recommended.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-black text-white">{recommended.name}</h4>
                <p className="text-xs text-emerald-300 font-mono">{recommended.scientificName}</p>
                <p className="text-xs text-emerald-100/80 mt-1">{recommended.tag}</p>
              </div>
            </div>

            <p className="text-xs text-emerald-100/90 leading-relaxed mb-5 prose-ar">
              {recommended.description}
            </p>

            <a
              href={`https://wa.me/966578326985?text=${encodeURIComponent(
                `مرحباً بصمة ايما، رشح لي الموقع نبتة (${recommended.name}) وأود طلبها مع حوضها الفاخر لمنزلي.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-black text-sm transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>طلب هذه النبتة مع التوصيل داخل الرياض</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
