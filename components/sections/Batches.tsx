import { ArrowRight, Calendar, Clock, IndianRupee, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { batches, feeNotes } from "@/data/batches";

function formatINR(n: number): string {
  return n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export function Batches() {
  return (
    <section id="batches" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Batches & Fees"
            title="Upcoming CDM batches"
            description="Transparent pricing, EMI options, and merit-based scholarships. Seats are limited to keep batches focused."
            centered
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {batches.map((b, i) => (
            <Reveal key={b.name} delay={i * 80}>
              <div className="relative h-full rounded-3xl border border-cream-100 bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">{b.mode}</p>
                    <h3 className="mt-2 font-display text-2xl font-black tracking-tight text-navy-900">{b.name}</h3>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    {b.seatsLeft} of {b.seats} seats left
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Stat label="Starts" value={formatDate(b.startDate)} icon={<Calendar className="h-4 w-4" />} />
                  <Stat label="Duration" value={`${b.durationWeeks} weeks`} icon={<Clock className="h-4 w-4" />} />
                  <Stat
                    label="Fee"
                    value={`₹${formatINR(b.fee)}`}
                    icon={<IndianRupee className="h-4 w-4" />}
                  />
                  <Stat
                    label="Capacity"
                    value={`${b.seats} learners`}
                    icon={<Users className="h-4 w-4" />}
                  />
                </div>

                {b.emiPerMonth && (
                  <p className="mt-5 rounded-xl bg-gold-50 px-4 py-3 text-sm font-semibold text-navy-900">
                    0% EMI from <span className="text-gold-700">₹{formatINR(b.emiPerMonth)}/mo</span>
                  </p>
                )}
                {b.scholarship && <p className="mt-3 text-sm font-semibold text-navy-700">🎓 {b.scholarship}</p>}

                <a href="/#register" className="gradient-button mt-6 inline-flex w-full items-center justify-center gap-2">
                  Reserve seat
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-2 text-center text-sm font-semibold text-slate-600">
            {feeNotes.map((n) => (
              <li key={n}>· {n}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-cream-100 bg-cream-50/60 px-4 py-3">
      <p className="flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
        {icon}
        {label}
      </p>
      <p className="mt-1 font-display text-base font-black text-navy-900">{value}</p>
    </div>
  );
}
