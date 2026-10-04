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
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/20 text-xs text-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>نستقبلكم ونرد على استفساراتكم طوال أوقات العمل</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Maps & Working Hours Section */}
            <div className="mt-10 pt-8 border-t border-emerald-800/60">
              <div className="grid lg:grid-cols-12 gap-6 items-center">
                
                {/* Map Details & Hours */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      موقع المشتل والمعرض
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2 font-heading">
                      {business.address}
                    </h4>
                    <p className="text-xs text-emerald-200/80 leading-relaxed mb-4">
                      نسعد بزيارتكم لمعاينة كافة أصناف النباتات الداخلية، والأشجار، والمستلزمات الزراعية مباشرة في موقعنا على طريق أبو بكر الصديق.
                    </p>
                  </div>

                  {/* Working Hours Card */}
                  <div className="p-4 rounded-2xl bg-emerald-900/40 border border-emerald-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>أوقات العمل الرسمية:</span>
                    </div>
                    <div className="text-xs text-emerald-100 flex items-center justify-between py-1 border-b border-emerald-800/40">
                      <span className="font-bold">السبت إلى الخميس:</span>
                      <span className="font-mono text-emerald-300">8:00 ص – 12:30 ص</span>
                    </div>
                    <div className="text-xs text-emerald-100 flex items-center justify-between py-1">
                      <span className="font-bold text-amber-200">يوم الجمعة:</span>
                      <span className="font-mono text-amber-300">12:30 م – 12:30 ص</span>
                    </div>
                  </div>

                  {/* Navigation link */}
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-white font-bold text-xs border border-emerald-500/40 transition-colors shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-emerald-300" />
                    <span>فتح الموقع في خرائط Google (GPS)</span>
                  </a>
                </div>

                {/* Embedded Map Frame */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-xl bg-emerald-950 aspect-[16/10] sm:aspect-[16/9]">
                    <iframe
                      src={business.googleMapsEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="موقع بصمة ايما الزراعية على طريق أبو بكر الصديق بالرياض"
                      className="w-full h-full"
                    />
                    <div className="absolute bottom-3 right-3 bg-[#071d12]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-emerald-500/30 text-[11px] font-bold text-emerald-200 pointer-events-none shadow-md">
                      الرياض • طريق أبو بكر الصديق
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Phone bar */}
            <div className="mt-8 pt-6 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/80">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{business.address}</span>
              </span>
              <a
                href={`tel:${business.phone}`}
                className="hover:text-emerald-300 font-mono font-bold text-sm text-emerald-300"
              >
                اتصال مباشر: {business.phoneDisplay}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
