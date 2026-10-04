"use client";

import { AlertTriangle, CheckCircle2, ShieldCheck, Flame } from "lucide-react";

export function WhyWeSurvive() {
  return (
    <section 
      id="why-we-survive" 
      className="py-16 sm:py-24 bg-[#faf8f5] text-[#1c1f1d] border-b border-[#e8dfd3]"
      aria-labelledby="why-heading"
    >
      <div className="container-main">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#f7ebe5] text-[#9c4c2d] text-xs font-bold mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>الحقيقة التي لا تخبرك بها مشاتل الشوارع</span>
          </div>

          <h2 
            id="why-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#102117] leading-tight mb-4 font-heading"
          >
            ليه أغلب نباتات الرياض تموت بعد أسبوعين؟<br />
            <span className="text-[#b8603d]">وكيف نضمن في بصمة ايما أنها تعيش معك؟</span>
          </h2>

          <p className="text-base text-[#424944] leading-relaxed">
            الرياض ليست كالمدن الساحلية أو الجبلية؛ هنا تجتمع شمس الظهر الجافة، الرياح الرملية، ملوحة المياه، والتكييف البارد بالصالات. الشتلة التي لم تؤهل لهذه الظروف مصيرها الموت السريع مهما كانت عنايتك بها.
          </p>
        </div>

        {/* Real Comparison Grid (Asymmetric & Honest) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: What happens with typical street nurseries */}
          <div className="editorial-card-warm bg-[#fdfbf7] p-6 sm:p-8 rounded-2xl border border-[#e8dfd3] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-[#e8dfd3] mb-5">
                <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#102117]">مشاتل الشوارع والتطبيقات العشوائية</h3>
                  <p className="text-xs text-[#6f7872]">شكل جذاب وقت الشراء، وذبول محتوم بالمنزل</p>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-[#424944]">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span><strong>صدمة حرارية مفاجئة:</strong> تُحفظ النباتات في غرف زجاجية رطبة ومكيفة جداً، وأول ما تنقلها لحوشك أو صالتك بالرياض تتساقط أوراقها بالكامل.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span><strong>تربة بيتموس رخيصة:</strong> تربة زراعية خفيفة مخصصة للبلدان الرطبة، في شمس الرياض تجف وتتصلب خلال ساعتين وتخنق الجذور.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span><strong>بيع بدون سؤال عن الإضاءة:</strong> يبيعك نبتة استوائية ضعيفة لوضعها في حوش مشمس، أو شجرة محبة للشمس ليضعها في صالة معتمة.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span><strong>انعدام الدعم بعد الدفع:</strong> إذا بدأت الأوراق تصفر أو تتعفن الجذور بعد أسبوع، لا تجد من يجيبك أو يعوضك.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e8dfd3] text-xs text-rose-800 font-medium">
              النتيجة: إهدار للمال، وتكرار تجربة الإحباط والذبول كل موسم.
            </div>
          </div>

          {/* Card 2: The Emma Smile Difference */}
          <div className="bg-[#183324] text-white p-6 sm:p-8 rounded-2xl border border-[#2f5d43] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-[#2f5d43] mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#b8603d] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">منهجية مشتل بصمة ايما بالرياض</h3>
                  <p className="text-xs text-[#d6c7b5]">نباتات مروّضة تدريجياً لتعيش وتنمو في منزلك</p>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-[#e8dfd3]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span><strong>مرحلة التقْسية والتأصيل:</strong> كل شتلة تمر في بيوت استنباتنا ببرنامج تعويد تدريجي على درجات حرارة وهواء الرياض الفعلي.</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span><strong>خلطات تربة نجدية خاصة:</strong> نخلط التربة ببرلايت وسماد عضوي معالج يحتفظ بالرطوبة المناسبة ويمنع تراكم أملاح مياه الشبكة.</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span><strong>تشخيص صادق قبل البيع:</strong> نطلب صورة مساحتك؛ إذا كان المكان لا يناسب النبتة التي اخترتها، ننصحك فوراً بالبديل الأقوى.</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span><strong>ضمان نمو واستشارة مستمرة:</strong> تواصل معنا على واتساب في أي وقت لنتابع معك تطور نموها خطوة بخطوة.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2f5d43] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs text-emerald-300 font-medium">النتيجة: نبتة خضراء قوية تدوم لسنوات وتمنح بيتك حياة حقيقية.</span>
              <a
                href="https://wa.me/966563340109?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%B9%D9%86%D8%AF%D9%8A%20%D9%86%D8%A8%D8%AA%D8%A9%20%D8%AA%D8%B9%D8%A7%D9%86%D9%8A%20%D9%88%D8%A3%D9%88%D8%AF%20%D8%AA%D8%B4%D8%AE%D9%8A%D8%B5%D9%87%D8%A7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#faf8f5] bg-[#b8603d] hover:bg-[#9c4c2d] px-3.5 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>عندك نبتة تعاني؟ استشرنا مجاناً</span>
                <span>←</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
