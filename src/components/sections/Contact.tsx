"use client";

import { MessageCircle, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Contact() {
  const { contact, business } = siteContent;

  return (
    <section
      id="contact"
      className="section-padding bg-[#071d12] text-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              {contact.title}
            </span>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight"
            >
              هل تتخيل مساحة أكثر <span className="text-emerald-400">خضرة وجمالاً</span> في منزلك؟
            </h2>
            <p className="text-base md:text-lg text-emerald-100/80 prose-ar max-w-2xl mx-auto leading-relaxed">
              {contact.description}
            </p>
          </div>

          {/* Action Box with Live WhatsApp & Direct Call */}
          <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  احجز موعد الزيارة الميدانية المجانية
                </h3>
                <p className="text-sm text-emerald-200/80 prose-ar mb-6">
                  يصلك مهندسنا الزراعي في أي حي داخل الرياض لرفع المقاسات، وفحص الموقع، وتقديم عرض تصميم مجاني.
                </p>

                <div className="space-y-3 text-xs text-emerald-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>فحص التربة ومصدر المياه مجاناً</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>تقديم مخطط مقترح لتوزيع النباتات والمسطحات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>تحديد التكلفة الدقيقة والجدول الزمني</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={contact.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-emerald-950 font-black text-base shadow-xl hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-950" />
                  <span>{contact.primaryCta.label}</span>
                </a>

                <a
                  href={contact.secondaryCta.href}
                  className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl border border-emerald-400/40 hover:bg-white/10 text-white font-bold text-base transition-all"
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>{contact.secondaryCta.label}</span>
                </a>

                <div className="text-center pt-2">
                  <span className="text-xs text-emerald-300/70 inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>أوقات العمل: يومياً من 8 صباحاً حتى 10 مساءً</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Address bar */}
            <div className="mt-8 pt-6 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/80">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{business.address}</span>
              </span>
              <a
                href={`tel:${business.phone}`}
                className="hover:text-emerald-300 font-mono font-bold"
              >
                {business.phoneDisplay}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
