import Image from "next/image";
import { Trees, Droplets, Sprout, Check, ArrowLeft, ShieldCheck, Wrench } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Services() {
  const { services } = siteContent;

  const icons = { "nursery-supply": Sprout, "garden-design": Trees, "smart-irrigation": Droplets, maintenance: Wrench };
  const fieldServices = services.items;

  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 bg-[#faf8f5] text-[#1c1f1d] border-b border-[#e8dfd3]"
      aria-labelledby="services-heading"
    >
      <div className="container-main">
        
        {/* Section Header */}
        <div className="max-w-2xl text-right mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8dfd3] text-[#183324] text-sm font-bold mb-3">
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
            const Icon = icons[srv.id as keyof typeof icons];

            return (
              <div
                key={srv.id}
                id={srv.id}
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
                    <span className="font-mono text-sm font-bold text-[#9c4c2d] bg-[#f7ebe5] px-2 py-0.5 rounded">
                      {srv.number}
                    </span>
                  </div>

                  {/* Photo Preview */}
                  <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden mb-4 border border-[#e8dfd3]">
                    <Image
                      src={srv.image}
                      alt={`صورة توضيحية لخدمة ${srv.title}`}
                      fill
                      className="object-cover"
                      quality={60}
                  sizes="(min-width: 1216px) 504px, (min-width: 768px) calc(50vw - 80px), calc(100vw - 80px)"
                    />
                  </div>

                  <p className="text-sm text-[#424944] mb-3">صورة توضيحية للخدمة</p>
                  {/* Description */}
                  <p className="text-sm sm:text-sm text-[#424944] leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-5">
                    {srv.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-[#1c1f1d]">
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
                    className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-[#faf8f5] hover:bg-[#183324] text-[#183324] hover:text-white border border-[#e8dfd3] hover:border-[#183324] text-sm font-bold transition-all duration-200"
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
            <div className="w-10 h-10 rounded-xl bg-[#9c4c2d] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg font-heading leading-snug">
                تفاصيل الخدمة قبل الاتفاق
              </h3>
              <p className="text-sm sm:text-sm text-[#d6c7b5] mt-0.5 leading-relaxed">
                ناقش نطاق العمل والسعر ومواعيد التنفيذ، وشروط الضمان إن كان مقدمًا، قبل تأكيد الطلب.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/966563340109?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A8%D8%B5%D9%85%D8%A9%20%D8%A7%D9%8A%D9%85%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%B6%D9%85%D8%A7%D9%86%20%D9%88%D8%A7%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#9c4c2d] hover:bg-[#7f3d25] text-white text-sm font-bold shrink-0 transition-colors"
          >
            استفسر عن تفاصيل الضمان
          </a>
        </div>

      </div>
    </section>
  );
}
