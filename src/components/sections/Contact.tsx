"use client";

import { Phone, MapPin, Clock, Navigation, Camera } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Contact() {
  const { contact, business } = siteContent;

  return (
    <section
      id="visit"
      className="py-16 sm:py-24 bg-[#102117] text-[#faf8f5] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="container-main relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl text-right mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#183324] border border-[#2f5d43]/50 text-[#d6c7b5] text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#b8603d]" />
            <span>مشتلنا الميداني بالرياض</span>
          </div>

          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4 font-heading"
          >
            تفضل بزيارتنا في المشتل، <br />
            <span className="text-[#b8603d]">أو صوّر مساحتك واستشرنا فوراً.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#e8dfd3]/90 leading-relaxed max-w-2xl">
            مشتلنا على طريق أبو بكر الصديق مجهّز لتشاهد النباتات على الطبيعة في مناخ الرياض الفعلي، وبإشراف مهندسين زراعيين يقدمون لك النصيحة الصادقة.
          </p>
        </div>

        {/* 2 Big Editorial Blocks: Direct Action & Google Maps */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Action & Visit Info (6 cols) */}
          <div className="lg:col-span-6 bg-[#183324] p-6 sm:p-8 rounded-2xl border border-[#2f5d43] flex flex-col justify-between">
            <div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-heading">
                استشارة فورية لمساحتك
              </h3>
              <p className="text-xs sm:text-sm text-[#d6c7b5] leading-relaxed mb-6">
                التقط صورة واضحة لحوشك، زاويتك، أو نبتتك الذابلة، وسيجيبك مهندسنا الزراعي مجاناً بالتشخيص الدقيق.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3 mb-8">
                <a
                  href={contact.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#b8603d] hover:bg-[#9c4c2d] text-white font-bold text-sm shadow-md transition-all active:scale-98"
                >
                  <Camera className="w-5 h-5 text-white" />
                  <span>{contact.primaryCta.label}</span>
                </a>

                <a
                  href={`tel:${business.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-[#d6c7b5] border border-[#2f5d43] text-xs font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>اتصال هاتفي مباشر ({business.phoneDisplay})</span>
                </a>
              </div>

              {/* Working Hours Box */}
              <div className="pt-6 border-t border-[#2f5d43] space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-[#e8dfd3]">
                  <Clock className="w-4 h-4 text-[#b8603d] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-1">أوقات وساعات العمل اليومية:</strong>
                    <p className="text-[#d6c7b5] mb-1">السبت إلى الخميس: 8:00 ص – 12:30 ص (متواصل)</p>
                    <p className="text-[#d6c7b5]">يوم الجمعة: 12:30 ظهراً – 12:30 ص</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-[#e8dfd3] pt-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">العنوان الدقيق:</strong>
                    <span className="text-[#d6c7b5]">{business.address}</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-[#2f5d43] flex items-center justify-between text-xs text-[#d6c7b5]">
              <span>القهوة والتمر بانتظاركم في المشتل</span>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b8603d] hover:text-[#d6c7b5] font-bold underline underline-offset-4 inline-flex items-center gap-1"
              >
                <span>فتح بالخرائط</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#2f5d43] bg-[#183324] flex flex-col min-h-[360px]">
            <iframe
              src={business.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px", flex: 1 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع بصمة ايما الزراعية على طريق أبو بكر الصديق بالرياض"
              className="w-full h-full grayscale-[25%] contrast-110"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
