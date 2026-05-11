"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/sections";

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-pad relative overflow-hidden bg-cream-50/40">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Clear answers to questions learners ask before they commit."
            description="Honest, CDM-specific answers to help you make an informed decision about your next career step."
            centered
          />
        </Reveal>
        <div className="mt-10 grid gap-3.5">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} delay={i * 40}>
                <div className="faq-modern-panel" data-open={isOpen}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-bold tracking-tight text-navy-900 sm:text-[1.05rem]">
                      {item.question}
                    </span>
                    <ChevronDown className="faq-chevron h-5 w-5 text-navy-700" aria-hidden />
                  </button>
                  <div id={`faq-${i}`} className="faq-modern-answer" role="region">
                    <div className="px-6 pb-6 pt-0 text-[0.94rem] leading-relaxed text-slate-700">{item.answer}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
