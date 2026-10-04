"use client";

import Image from "next/image";
import { Trees, Droplets, Sprout, Check, ArrowLeft, ShieldCheck, Wrench } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Services() {
  const { services } = siteContent;

  const fieldServices = [
    {
      id: "nursery-supply",
      icon: Sprout,
      number: "01",
      title: "توريد النباتات والأشجار",
      description: "نباتات وشجيرات وأشجار مباشرة من مشتلنا في الرياض للأفراد والمطورين العقاريين، مع خيارات تناسب أحجام ومواقع المشاريع المختلفة.",
      deliverables: ["توريد شتلات مؤصلة ومهيأة للغرس المباشر", "أحجام متنوعة للأحواش والمشاريع والأسوار", "تجهيز خلطات تربة مخصبة ومقاومة للأملاح"],
      cta: "اطلب عرض توريد للموقع",
      whatsappMsg: "مرحباً بصمة ايما، أحتاج إلى توريد نباتات أو أشجار لموقعي بالرياض. أود الاستفسار عن الأصناف والكميات.",
      image: "/images/nursery-greenhouse.jpg",
    },
    {
      id: "garden-design",
      icon: Trees,
      number: "02",
      title: "تصميم وتنفيذ وتجديد الحدائق",
      description: "نبدأ بالمعاينة الميدانية المجانية، ثم نعد المخططات ثنائية وثلاثية الأبعاد 2D/3D، وننفّذ الزراعة والمسطحات الطبيعية أو الصناعية والممرات والإضاءة.",
      deliverables: ["معاينة ميدانية مجانية بجميع أحياء الرياض", "مخططات توضيحية لتوزيع العناصر والمساحات", "تنفيذ احترافي وضمان كامل على سلامة التجذّر"],
      cta: "ناقش فكرة حديقتك واحجز معاينة",
      whatsappMsg: "مرحباً بصمة ايما، أرغب في حجز معاينة مجانية لتنسيق أو تجديد حديقة فلتنا في الرياض.",
      image: "/images/service-landscaping.jpg",
    },
    {
      id: "smart-irrigation",
      icon: Droplets,
      number: "03",
      title: "شبكات الري الذكية الموفرة",
      description: "شبكات تنقيط ورذاذ بمحابس إيطالية ومؤقتات ذكية مبرمجة لترشيد استهلاك المياه بنسبة تصل إلى 40% وتنظيم مواعيد الري حسب الصنف.",
      deliverables: ["مؤقتات رقمية وبرمجة أوتوماتيكية دقيقة", "شبكات موفرة تمنع تعفن الجذور وهدر الماء", "تصميم شبكة يتوافق مع توزيع النباتات"],
      cta: "اطلب تصميم أو صيانة شبكة ري",
      whatsappMsg: "مرحباً بصمة ايما، أحتاج إلى تصميم أو تركيب شبكة ري أوتوماتيكية لحديقتي بالرياض.",
      image: "/images/service-lighting-irrigation.jpg",
    },
    {
      id: "maintenance",
      icon: Wrench,
      number: "04",
      title: "الصيانة الدورية للحدائق والمقرات",
      description: "عقود صيانة دورية شهرية تشمل تقليم الأشجار، مكافحة الآفات، فحص التربة، التسميد العضوي المنتظم، وفحص تشغيل شبكة الري ومتابعتها.",
      deliverables: ["زيارات شهرية دورية للفلل والمقرات", "تقليم وتسميد ومكافحة آفات بأيدي فنيين", "متابعة مستمرة لنمو النباتات واستقرارها"],
      cta: "اطلب خطة صيانة شهرية",
      whatsappMsg: "مرحباً بصمة ايما، أرغب في طلب خطة صيانة دورية لحديقتي / لمقر عملنا بالرياض.",
      image: "/images/hero-garden.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 bg-[#faf8f5] text-[#1c1f1d] border-b border-[#e8dfd3]"
      aria-labelledby="services-heading"
    >
      <div className="container-main">
        
        {/* Section Header */}
        <div className="max-w-2xl text-right mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8dfd3] text-[#183324] text-xs font-bold mb-3">
            <span>{services.title}</span>
          </div>

          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#102117] leading-snug mb-3 font-heading"
          >
            {services.subtitle}
          </h2>

          <p className="text-sm sm:text-base text-[#424944] leading-relaxed">
            {services.description}
          </p>
        </div>

        {/* 4 Distinct Field Services Grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-10">
          {fieldServices.map((srv) => {
            const Icon = srv.icon;

            return (
              <div
                key={srv.id}
                className="editorial-card rounded-2xl p-5 sm:p-7 border border-[#e8dfd3] bg-white flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#e8dfd3] mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#e9f2ec] text-[#183324] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-[#102117] font-heading leading-snug">
                        {srv.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#b8603d] bg-[#f7ebe5] px-2 py-0.5 rounded">
                      {srv.number}
                    </span>
                  </div>

                  {/* Photo Preview */}
                  <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden mb-4 border border-[#e8dfd3]">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#424944] leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-5">
                    {srv.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1c1f1d]">
                        <Check className="w-3.5 h-3.5 text-[#183324] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Direct Action Link */}
                <div className="pt-3.5 border-t border-[#e8dfd3]">
                  <a
                    href={`https://wa.me/966563340109?text=${encodeURIComponent(srv.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-[#faf8f5] hover:bg-[#183324] text-[#183324] hover:text-white border border-[#e8dfd3] hover:border-[#183324] text-xs font-bold transition-all duration-200"
                  >
                    <span>{srv.cta}</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#183324] text-white flex flex-col sm:flex-row items-center justify-between gap-5 border border-[#2f5d43]">
          <div className="flex items-center gap-3.5 text-right">
            <div className="w-10 h-10 rounded-xl bg-[#b8603d] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg font-heading leading-snug">
                ضمان زراعي كامل ومعتمد
              </h4>
              <p className="text-xs sm:text-sm text-[#d6c7b5] mt-0.5 leading-relaxed">
                نقدم ضمانًا بنسبة <strong>100%</strong> على جودة الشتلات وحيويتها، وضمانًا زراعيًا كاملًا على سلامة وتجذّر الشتلات المزروعة.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/966563340109?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A8%D8%B5%D9%85%D8%A9%20%D8%A7%D9%8A%D9%85%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%B6%D9%85%D8%A7%D9%86%20%D9%88%D8%A7%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#b8603d] hover:bg-[#9c4c2d] text-white text-xs font-bold shrink-0 transition-colors"
          >
            استفسر عن تفاصيل الضمان
          </a>
        </div>

      </div>
    </section>
  );
}
