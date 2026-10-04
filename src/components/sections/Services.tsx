"use client";

import Image from "next/image";
import {
  Trees,
  Sprout,
  Flower2,
  Wrench,
  Droplets,
  Lightbulb,
  Fence,
  Leaf,
  ArrowUpLeft,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { siteContent } from "@/content/site-content";

interface VisualService {
  id: string;
  number: string;
  title: string;
  description: string;
  image?: string;
  icon: typeof Trees;
  badge?: string;
  features: string[];
}

const visualServices: VisualService[] = [
  {
    id: "garden-design",
    number: "01",
    title: "تصميم وتنسيق الحدائق الفاخرة",
    description: "تحويل ساحات وأحواش الفلل إلى واحات غناء تجمع بين الشلالات الجدارية، المسطحات الخضراء، والممرات الحجرية الفاخرة.",
    image: "/images/service-landscaping.jpg",
    icon: Trees,
    badge: "الخدمة الأبرز",
    features: ["مخطط ثلاثي الأبعاد 3D", "تنفيذ احترافي بالكامل", "ضمان معتمد على الأعمال"],
  },
  {
    id: "irrigation-lighting",
    number: "02",
    title: "أنظمة الري الذكي والإنارة الليلية",
    description: "شبكات ري أوتوماتيكية مبرمجة تقلل استهلاك المياه وتوزع الرذاذ بالتساوي، مع إنارة مخفية تبرز سحر الحديقة ليلاً.",
    image: "/images/service-lighting-irrigation.jpg",
    icon: Droplets,
    badge: "تقنية متطورة",
    features: ["تحكم ذكي ومؤقتات رقمية", "إنارة مقاومة للحرارة والماء", "توفير حتى 40% من المياه"],
  },
  {
    id: "nursery-production",
    number: "03",
    title: "المشاتل الزراعية والشتلات",
    description: "إنتاج وتوريد شتلات الأشجار والشجيرات ونخيل الزينة المكيفة مع مناخ الرياض، بأعلى مستويات النضارة والحيوية.",
    image: "/images/nursery-greenhouse.jpg",
    icon: Sprout,
    badge: "إنتاج مباشر",
    features: ["أشجار ونخيل زينة", "زهور موسمية ودائمة", "أسعار جملة وتجزئة"],
  },
  {
    id: "tools-soil",
    number: "04",
    title: "المعدات والتربة والأسمدة العضوية",
    description: "نوفر أفضل خلطات التربة الزراعية الغنية بالمغذيات، والأسمدة العضوية، وأدوات العناية بالحدائق المنزلية.",
    image: "/images/service-tools.jpg",
    icon: Wrench,
    badge: "جودة معتمدة",
    features: ["خلطات تربة برلايت وبيتموس", "أسمدة متوازنة", "مبيدات وقائية آمنة"],
  },
];

const secondaryServices = [
  {
    id: "indoor-plants",
    title: "تنسيق النباتات الداخلية",
    description: "اختيار وتوزيع النباتات الطبيعية داخل المكاتب والفلل وفق معايير الإضاءة وجماليات المكان.",
    icon: Flower2,
  },
  {
    id: "pergolas",
    title: "المظلات والبرجولات والحدادة",
    description: "هياكل حديدية وخشبية عصرية للجلسات الخارجية تمنحك الظل والأناقة في حديقتك.",
    icon: Fence,
  },
  {
    id: "grass",
    title: "النجيلة الطبيعية والصناعية",
    description: "توريد وتركيب الثيل الطبيعي من الدرجة الأولى والعشب الصناعي بكثافة عالية ومقاومة للشمس.",
    icon: Leaf,
  },
  {
    id: "maintenance",
    title: "عقود الصيانة والرعاية الدورية",
    description: "زيارات منتظمة لتقليم النباتات، فحص شبكات الري، وتسميد الحديقة بإشراف مهندسين زراعيين.",
    icon: Lightbulb,
  },
];

export function Services() {
  const { services } = siteContent;

  return (
    <section
      id="services"
      className="section-padding bg-[#0a2316] text-white relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800/60 text-emerald-300 text-xs font-bold mb-4 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{services.title} المتميزة</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            حلول زراعية متكاملة <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">من البذرة حتى الحديقة الغناء</span>
          </h2>
          <p className="text-base md:text-lg text-emerald-100/80 prose-ar leading-relaxed">
            {services.description}
          </p>
        </div>

        {/* Primary Visual Bento Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {visualServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-emerald-950/40 hover:border-emerald-400/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                {/* Visual Image Preview */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2316] via-[#0a2316]/50 to-transparent" />
                  
                  {/* Badge & Number */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/90 text-white backdrop-blur-md shadow-md">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-2xl font-black text-white/30 font-mono">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 relative -mt-8 z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-800/80 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:text-white group-hover:bg-emerald-600 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-emerald-100/80 prose-ar leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature Bullets */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 text-xs text-emerald-200">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA link */}
                  <a
                    href={`https://wa.me/966578326985?text=${encodeURIComponent(
                      `مرحباً بصمة ايما، أود الاستفسار عن خدمة: ${service.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-emerald-800/40 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-200 hover:text-white font-bold text-sm transition-all duration-300"
                  >
                    <span>طلب معاينة مجانية لهذه الخدمة</span>
                    <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Services Compact Strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryServices.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.id}
                className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-700/40 flex items-center justify-center text-emerald-300 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">{sec.title}</h4>
                <p className="text-xs text-emerald-200/70 leading-relaxed">{sec.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
