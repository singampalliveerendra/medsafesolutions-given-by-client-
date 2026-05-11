import { BriefcaseBusiness, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { placements, recruiters } from "@/data/placements";

export function Placements() {
  const doubled = [...recruiters, ...recruiters];
  return (
    <section id="placements" className="section-pad bg-[linear-gradient(180deg,transparent,rgba(15,66,126,0.04))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Alumni & Placements"
            title="Where our learners go after the program."
            description="A snapshot of recent CDM placements across CROs, sponsors, and biotech operations."
            centered
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="logo-marquee mt-10 rounded-2xl border border-cream-100 bg-white py-5 shadow-sm">
            <div className="logo-track">
              {doubled.map((r, i) => (
                <div
                  key={`${r.name}-${i}`}
                  className="grid h-12 w-32 shrink-0 place-items-center rounded-xl border border-navy-100 bg-navy-50 font-display text-sm font-black tracking-wide text-navy-700"
                  aria-label={r.name}
                >
                  {r.initials}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {placements.map((p, i) => (
            <Reveal key={`${p.name}-${i}`} delay={i * 50}>
              <div className="h-full rounded-2xl border border-cream-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-navy-700 text-white">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-gold-50 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold-700">
                    Batch {p.batch}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-black text-navy-900">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-navy-700">{p.role}</p>
                <p className="mt-1 text-sm text-slate-600">{p.company}</p>
                {p.city && (
                  <p className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" /> {p.city}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {/* TODO: Replace placeholder placements in /data/placements.ts with consented real data */}
          Names anonymised pending consent
        </p>
      </div>
    </section>
  );
}
