import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learnerCards } from "@/data/sections";

export function Audience() {
  return (
    <section className="section-pad overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Who Is This Program For"
            title="Designed for pharmacy and allied health graduates entering CDM."
            description="Tailored for graduates looking to build a focused, job-oriented CDM career from a strong scientific base."
            centered
          />
        </Reveal>
        <div className="eligibility-marquee mt-10">
          <div className="eligibility-track">
            {[...learnerCards, ...learnerCards].map((item, i) => (
              <div key={`${item.title}-${i}`} className="eligibility-card group">
                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-cream-50 to-white">
                  <Image
                    src={item.image}
                    alt={`${item.title} audience illustration`}
                    width={320}
                    height={176}
                    loading="lazy"
                    className="elig-img h-44 w-full object-contain p-2"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-black tracking-tight text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
