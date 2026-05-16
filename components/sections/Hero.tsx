import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { heroBullets, programPillars } from "@/data/sections";
import { getIcon } from "@/lib/icons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden hero-dark-bg pt-28 sm:pt-32 min-h-[100svh] flex flex-col justify-center"
    >
      <div className="hero-blob -top-48 -left-48" />
      <div className="hero-blob -bottom-48 -right-48 opacity-70" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24">
        <Reveal className="max-w-[680px]">
          <div className="badge-pill-dark">
            <Sparkles className="h-4 w-4" />
            AI-Enabled CDM Program · Visakhapatnam
          </div>
          <h1 className="mt-6 max-w-[640px] text-balance font-display text-4xl font-black leading-[1.07] tracking-tight text-white sm:text-5xl lg:text-[3.8rem]">
            Clinical Data Management <span className="gradient-text">training built for a sharper, job-ready future.</span>
          </h1>
          <p className="mt-5 max-w-[580px] text-base leading-7 text-cream-50 sm:text-lg">
            Build a CDM career with structured training in EDC workflows, query handling, data review, CDISC orientation,
            and interview preparation.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {heroBullets.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                  <span className="text-sm font-semibold text-cream-50">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/#register" className="gradient-button-gold inline-flex items-center gap-2">
              Book Free Counselling
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="/#syllabus" className="outline-button-white inline-flex items-center gap-2">
              Download Syllabus
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {programPillars.map(({ title, text, icon }, i) => {
              const Icon = getIcon(icon);
              return (
                <Reveal key={title} delay={i * 70}>
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm hover:bg-white/10 transition duration-300">
                    <Icon className="h-7 w-7 text-gold-300" />
                    <h2 className="mt-3 text-sm font-black text-white">{title}</h2>
                    <p className="mt-1.5 text-xs leading-5 text-cream-50/90">{text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative">
            <div className="floating-badge -left-2 top-8 animate-float">
              <span className="mr-1.5 text-emerald-400">✓</span>EDC Workflow Ready
            </div>
            <div className="floating-badge -right-2 top-[40%] animate-float-alt">
              <span className="mr-1.5 text-gold-300">✓</span>CDISC-Aware
            </div>
            <div className="floating-badge bottom-12 left-4 animate-float">
              <span className="mr-1.5 text-gold-300">✓</span>Job-Ready Graduate
            </div>

            <div className="hero-img-frame">
              <div className="overflow-hidden rounded-2xl relative">
                <Image
                  src="/images/hero-student.png"
                  alt="CDM professional working on clinical trial data"
                  width={760}
                  height={760}
                  priority
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {["EDC workflow", "CDISC-aware", "Query resolution"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-center text-xs font-bold text-cream-50 backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />
    </section>
  );
}
