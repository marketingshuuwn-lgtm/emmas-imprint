"use client";

import { businessHours, readableHours } from "@/content/business-hours";


import { Phone, MapPin, Clock, Navigation, MessageCircle } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Contact() {
  const { contact, business } = siteContent;

  const conversationStarters = [
    { need: "نباتات للبيت", send: "وصف المكان والإضاءة والحجم؛ الصورة اختيارية" },
    { need: "نباتات للخارج", send: "وصف الموقع والتعرض للشمس والكمية" },
    { need: "تنسيق مكتب", send: "مساحة المكتب وإضاءته وطريقة العناية المطلوبة" },
    { need: "تنسيق حديقة", send: "الموقع والمساحة والعمل المطلوب لترتيب المعاينة" },
    { need: "شبكة ري أو صيانة", send: "وصف الاحتياج وحالة الحديقة أو الشبكة" },
  ];

  return (
    <section
      id="visit"
      className="py-12 sm:py-16 lg:py-20 bg-[#102117] text-[#faf8f5] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="container-main relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl text-right mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#183324] border border-[#2f5d43]/50 text-[#d6c7b5] text-sm font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#d6c7b5]" />
            <span>{contact.title}</span>
          </div>

          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug mb-3 font-heading"
          >
            {contact.subtitle}
          </h2>

          <p className="text-sm sm:text-base text-[#e8dfd3]/95 leading-relaxed">
            {contact.description}
          </p>
        </div>

        {/* 2 Big Blocks: Conversation Starters + Google Maps */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8">
          
          {/* Action & Visit Info (6 cols) */}
          <div className="lg:col-span-6 bg-[#183324] p-6 sm:p-7 rounded-2xl border border-[#2f5d43] flex flex-col justify-between">
            <div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading leading-snug">
                اختر بداية الحديث معنا
              </h3>
              <p className="text-sm text-[#d6c7b5] leading-relaxed mb-5">
                ابدأ بوصف احتياجك عبر واتساب. يمكن إرفاق الصور إذا رغبت.
              </p>

              {/* Starters List */}
              <div className="space-y-2.5 mb-6">
                {conversationStarters.map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/5 border border-[#2f5d43]/60 text-sm">
                    <span className="font-bold text-[#faf8f5] shrink-0">{item.need}:</span>
                    <span className="text-[#d6c7b5] text-left leading-relaxed">{item.send}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={contact.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#9c4c2d] hover:bg-[#7f3d25] text-white font-bold text-sm sm:text-sm shadow-md transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>تواصل عبر الواتساب</span>
                </a>

                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-[#faf8f5] border border-[#2f5d43] text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{business.phoneDisplay}</span>
                </a>
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-[#2f5d43] space-y-2 text-sm text-[#d6c7b5]">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#d6c7b5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-0.5">ساعات العمل:</strong>
                    {businessHours.map(hours => <p key={hours.label} className="leading-relaxed">{hours.label}: {readableHours(hours)}</p>)}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-0.5">الموقع:</strong>
                    <span className="leading-relaxed">{business.address}</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-5 pt-3.5 border-t border-[#2f5d43] flex items-center justify-between text-sm text-[#d6c7b5]">
              <span>مرحب بكم دائماً في المشتل</span>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d6c7b5] hover:text-[#d6c7b5] font-bold underline underline-offset-4 inline-flex items-center gap-1"
              >
                <span>فتح بالخرائط</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Embed (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#2f5d43] bg-[#183324] flex flex-col min-h-[340px]">
            <iframe
              src={business.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px", flex: 1 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع بصمة ايما الزراعية على طريق أبو بكر الصديق بالرياض"
              className="w-full h-full grayscale-[20%] contrast-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
