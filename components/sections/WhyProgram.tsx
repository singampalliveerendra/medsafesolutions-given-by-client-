import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyProgram } from "@/data/sections";
import { getIcon } from "@/lib/icons";

export function WhyProgram() {
  return (
    <section className="section-pad why-bg">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why This Program Stands Out"
            title="AI-enabled CDM training — end-to-end, job-oriented, pharma-aligned."
            description="Not a generic certification. Every module is built to match real CRO and pharma hiring expectations with hands-on software exposure and strong regulatory grounding."
            centered
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyProgram.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={i * 60}>
                <div className="panel h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-white shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="mt-5 inline-flex rounded-full bg-gold-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
                    {item.label}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-black tracking-tight text-navy-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
