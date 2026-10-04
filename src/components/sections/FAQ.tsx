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
      className="py-16 sm:py-24 bg-[#faf8f5] text-[#1c1f1d] border-b border-[#e8dfd3]"
      aria-labelledby="faq-heading"
    >
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8dfd3] text-[#183324] text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#b8603d]" />
            <span>{faq.title}</span>
          </div>

          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#102117] leading-tight mb-3 font-heading"
          >
            {faq.subtitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#6f7872]">
            تجارب وحلول عملية من واقع خدمة عملاء مشتلنا اليومية بالرياض
          </p>
        </div>

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
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-right text-sm sm:text-base font-bold text-[#102117] hover:bg-[#faf8f5] transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="flex-1 font-heading">{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-[#b8603d] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-[#424944] prose-ar text-xs sm:text-sm leading-relaxed border-t border-[#f4efea] pt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Help Note */}
        <div className="mt-10 text-center text-xs text-[#6f7872]">
          <span>عندك سؤال مختلف؟ </span>
          <a
            href="https://wa.me/966563340109"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b8603d] font-bold underline hover:text-[#183324] mr-1"
          >
            تحدث مباشرة مع مهندسنا الزراعي على واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
