"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
      className="section-padding"
      aria-labelledby="faq-heading"
    >
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-secondary tracking-wide mb-2">
            {faq.title}
          </p>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
          >
            {faq.subtitle}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-right text-base md:text-lg font-semibold text-foreground hover:bg-muted/50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="flex-1">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-primary transition-transform duration-200 ${
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
                    <p className="px-5 pb-5 md:px-6 md:pb-6 text-muted-foreground prose-ar text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
