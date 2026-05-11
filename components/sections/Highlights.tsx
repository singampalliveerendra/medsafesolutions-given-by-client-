import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { highlightCards } from "@/data/sections";

export function Highlights() {
  return (
    <section id="highlights" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Program Highlights"
            title="Five comprehensive modules designed around real CDM job requirements."
            description="Not a generic certification. End-to-end, job-oriented Clinical Data Management training designed to match real CRO and pharma hiring expectations."
            centered
          />
        </Reveal>
        <div className="mt-12 grid gap-8">
          {highlightCards.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="glass-highlight-card rounded-3xl p-1.5">
                <div className="relative overflow-hidden rounded-3xl bg-white/85 p-6 sm:p-8">
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-gold-200/30 to-navy-200/20 blur-3xl" />
                  <div
                    className={`relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]${
                      i % 2 === 1 ? " lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-white shadow-md">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
                          {item.eyebrow}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-black tracking-tight text-navy-900 sm:text-[1.7rem] leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{item.description}</p>
                      <div className="mt-6 grid gap-2.5">
                        {item.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="flex items-start gap-3 rounded-xl border border-navy-50 bg-navy-50/60 px-4 py-2.5"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-navy-700" />
                            <span className="text-sm font-semibold text-slate-700">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="module-img-wrap aspect-[4/3]">
                      <Image
                        src={item.image}
                        alt={`${item.title} illustration`}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
