"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Skeleton } from "@/components/ui/Skeleton";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="testimonials" className="section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What our learners and parents say."
            description="Real feedback from students, alumni, and parents who trusted us with their CDM career start."
            centered
          />
        </Reveal>

        <div
          className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Reveal>
            {!ready ? (
              <Skeleton className="h-72 w-full rounded-3xl" />
            ) : (
              <article
                key={active}
                className="animate-route-fade relative h-full rounded-3xl border border-cream-100 bg-white p-7 shadow-md sm:p-9"
                aria-live="polite"
              >
                <Quote className="h-10 w-10 text-gold-400" />
                <p className="mt-4 font-display text-xl font-bold leading-8 text-navy-900 sm:text-2xl">
                  “{testimonials[active]!.quote}”
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-navy-700 font-display text-base font-black text-white">
                    {testimonials[active]!.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-sm font-black text-navy-900">{testimonials[active]!.name}</p>
                    <p className="text-xs font-semibold text-slate-600">{testimonials[active]!.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5" aria-label={`${testimonials[active]!.rating ?? 5} of 5 stars`}>
                    {Array.from({ length: testimonials[active]!.rating ?? 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                </div>
              </article>
            )}
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-3" role="tablist" aria-label="Testimonials">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`text-left rounded-2xl border px-4 py-3 transition ${
                    active === i
                      ? "border-gold-500 bg-cream-50 shadow-sm"
                      : "border-cream-100 bg-white hover:border-navy-200"
                  }`}
                >
                  <p className="font-display text-sm font-black text-navy-900">{t.name}</p>
                  <p className="mt-0.5 text-xs text-slate-600 line-clamp-2">{t.quote}</p>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {/* TODO: Replace placeholder testimonials in /data/testimonials.ts with real consented quotes */}
          Quotes shown are illustrative pending consented student quotes
        </p>
      </div>
    </section>
  );
}
