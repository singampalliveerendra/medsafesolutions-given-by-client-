import Image from "next/image";
import { BriefcaseBusiness, CheckCircle2, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { careerRoles, placementSupport } from "@/data/sections";

export function Career() {
  return (
    <section
      id="careers"
      className="section-pad bg-[radial-gradient(ellipse_at_bottom_right,rgba(244,180,0,0.06),transparent_55%)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Career + Placement"
            title="Built to help learners translate CDM training into job conversations."
            description="The placement layer is designed around credibility: workflow fluency, clearer resume positioning, and more confident interview explanations."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="panel rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {careerRoles.map((role) => (
                  <div
                    key={role}
                    className="rounded-2xl border border-white/75 bg-white/85 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <BriefcaseBusiness className="h-6 w-6 text-navy-700" />
                    <h3 className="mt-3 font-display text-base font-black text-navy-900">{role}</h3>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-3">
                {placementSupport.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-cream-100 bg-cream-50/80 px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-sm font-semibold leading-6 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-5 h-full">
              <div className="module-img-wrap flex-1 min-h-[16rem]">
                <Image
                  src="/images/cdm-placement.webp"
                  alt="CDM placement and career support"
                  width={900}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
              <div className="panel rounded-2xl p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Placement Visual</p>
                </div>
                <Image
                  src="/images/cdm-general.webp"
                  alt="CDM placement support overview"
                  width={900}
                  height={500}
                  loading="lazy"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
