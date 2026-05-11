import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Program() {
  return (
    <section id="program" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Program Architecture"
              title="A premium, single-domain learning path for Clinical Data Management."
              description="The program is structured to reduce ambiguity. Learners start with the role of CDM in trials, then move into EDC logic, query management, standards awareness, and interview-level articulation."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { title: "What you learn", text: "Clinical data flow, review logic, discrepancies, standards orientation, and documentation thinking." },
                { title: "How you practice", text: "Through EDC-style workflow understanding, review scenarios, trackers, and process-first exercises." },
                { title: "Where it applies", text: "CROs, sponsors, biotech operations, research support teams, and data-facing trial functions." }
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="panel h-full rounded-2xl p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy-700">{item.title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="program-img-wrap">
              <Image
                src="/images/training-classroom.png"
                alt="CDM training classroom with students learning clinical data management"
                width={900}
                height={700}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent rounded-2xl pointer-events-none z-10" />
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <div className="rounded-xl border border-white/20 bg-white/[0.12] px-4 py-3 backdrop-blur-md">
                  <p className="text-sm font-bold text-white">Live Online CDM Program</p>
                  <p className="mt-0.5 text-xs text-cream-50/90">Hands-on EDC &amp; CDISC training by industry experts</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
