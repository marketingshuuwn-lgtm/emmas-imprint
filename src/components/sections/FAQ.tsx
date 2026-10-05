"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function FAQ() {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 lg:py-20 bg-[#faf8f5] text-[#1c1f1d] border-b border-[#e8dfd3]"
      aria-labelledby="faq-heading"
    >
      <div className="container-main">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8dfd3] text-[#183324] text-sm font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#9c4c2d]" />
            <span>{faq.title}</span>
          </div>

          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#102117] leading-snug mb-3 font-heading"
          >
            {faq.subtitle}
          </h2>
          <p className="text-sm sm:text-sm text-[#5b655e] leading-relaxed">
            إجابات واضحة تساعدك على اتخاذ قرارك قبل أن تبدأ
          </p>
        </div>

        {/* FAQ Accordion Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl border border-[#e8dfd3] overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-4.5 text-right text-sm sm:text-base font-bold text-[#102117] hover:bg-[#faf8f5] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="flex-1 font-heading leading-snug">{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-[#9c4c2d] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  hidden={!isOpen}
                  inert={!isOpen}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="faq-answer"
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 sm:px-6 sm:pb-5 text-[#424944] prose-ar text-sm sm:text-sm leading-relaxed border-t border-[#f4efea] pt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Prompt */}
        <div className="mt-8 text-center text-sm text-[#5b655e]">
          <span>لديك سؤال يخص مكانك؟ </span>
          <a
            href="https://wa.me/966563340109"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9c4c2d] font-bold underline hover:text-[#183324] mr-1"
          >
            تحدث مباشرة مع مهندسنا الزراعي عبر الواتساب
          </a>
        </div>

      </div>
    </section>
  );
}
