"use client";

import Image from "next/image";
import { Trees, Droplets, Building2, Sprout, Check, ArrowLeft } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Services() {
  const { services } = siteContent;

  const fieldServices = [
    {
      id: "landscaping",
      icon: Trees,
      number: "01",
      title: "تصميم وتنفيذ حدائق الفلل والمنازل",
      description: "معاينة ميدانية مجانية في أي حي بالرياض. ندرس حركة شمس حوشك وظلاله، ونوزع الأشجار والممرات العصرية وشبكات الري بما يتناغم مع معمارية فلتك.",
      deliverables: ["معاينة ورفع مقاسات مجاني بالرياض", "تصميم ثنائي وثلاثي الأبعاد مدروس", "ضمان زراعي كامل على تجذير الشتلات"],
      cta: "احجز زيارة معاينة مجانية لفلتك",
      whatsappMsg: "مرحباً بصمة ايما، أود حجز موعد معاينة ميدانية مجانية لتنسيق حديقة فلتنا بالرياض.",
      image: "/images/service-landscaping.jpg",
    },
    {
      id: "smart-irrigation",
      icon: Droplets,
      number: "02",
      title: "شبكات الري الذكية الموفرة للمياه",
      description: "نظام ري بالتنقيط والرذاذ بمحابس إيطالية ومؤقتات ذكية مبرمجة لتروي الأشجار في الفجر والمساء تلقائياً، وتوفر أكثر من 40% من استهلاك المياه.",
      deliverables: ["مؤقتات ري أوتوماتيكية قابلة للبرمجة", "توزيع هيدروليكي يمنع تعفن الجذور", "توفير يصل إلى 40% من فاتورة الماء"],
      cta: "اطلب فحص أو تركيب شبكة ري",
      whatsappMsg: "مرحباً بصمة ايما، أود الاستفسار عن تركيب شبكة ري ذكية وموفرة لحديقتي بالرياض.",
      image: "/images/service-lighting-irrigation.jpg",
    },
    {
      id: "corporate",
      icon: Building2,
      number: "03",
      title: "تشجير المكاتب بأحواض ذاتية الري",
      description: "حلول تشجير داخلي للشركات وقاعات الاجتماعات بأحواض هيدروليكية ذاتية التغذية تدوم 3 أسابيع بدون تعب المتابعة اليومية، مع عقود صيانة وزيارات شهرية.",
      deliverables: ["أحواض ذاتية الري بنظام مؤشر منسوب الماء", "أصناف تنقي الهواء وتتحمل التكييف المستمر", "عقود صيانة وتسميد دوري لمقرات الرياض"],
      cta: "اطلب تسعيرة تأثيث مكتبي",
      whatsappMsg: "مرحباً بصمة ايما، أود عرض سعر لتشجير مقر شركتنا بالرياض بأحواض ذاتية الري.",
      image: "/images/plant-areca.jpg",
    },
    {
      id: "nursery-supply",
      icon: Sprout,
      number: "04",
      title: "توريد الشتلات المؤصلة وتربة نجد المخصبة",
      description: "نوفر للأفراد والمشاريع شتلات مجربة خضعت لتقْسية الجذور في مشتلنا على طريق أبو بكر الصديق، مع خلطات تربة غنية بالبرلايت والسماد العضوي المعالج.",
      deliverables: ["شتلات معتادة على شمس وجفاف الرياض", "خلطات تربة خاصة تطرد ترسبات الأملاح", "توصيل وتنزيل مباشر للموقع بالرياض"],
      cta: "استفسر عن توفر الأصناف والكميات",
      whatsappMsg: "مرحباً بصمة ايما، أود الاستفسار عن توفر كميات شتلات وتربة زراعية للتوريد بالرياض.",
      image: "/images/nursery-greenhouse.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-[#faf8f5] text-[#1c1f1d] border-b border-[#e8dfd3]"
      aria-labelledby="services-heading"
    >
      <div className="container-main">
        
        {/* Section Header */}
        <div className="max-w-2xl text-right mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8dfd3] text-[#183324] text-xs font-bold mb-3">
            <span>{services.title}</span>
          </div>

          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#102117] leading-tight mb-4 font-heading"
          >
            {services.subtitle}
          </h2>

          <p className="text-sm sm:text-base text-[#424944] leading-relaxed">
            {services.description}
          </p>
        </div>

        {/* 4 Distinct Field Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {fieldServices.map((srv) => {
            const Icon = srv.icon;

            return (
              <div
                key={srv.id}
                className="editorial-card rounded-2xl p-6 sm:p-7 border border-[#e8dfd3] bg-white flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#e8dfd3] mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#e9f2ec] text-[#183324] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-[#102117] font-heading">
                        {srv.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#b8603d] bg-[#f7ebe5] px-2 py-1 rounded">
                      {srv.number}
                    </span>
                  </div>

                  {/* Photo Preview */}
                  <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden mb-5 border border-[#e8dfd3]">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#424944] leading-relaxed mb-5">
                    {srv.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6">
                    {srv.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1c1f1d]">
                        <Check className="w-3.5 h-3.5 text-[#183324] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-[#e8dfd3]">
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

      </div>
    </section>
  );
}
