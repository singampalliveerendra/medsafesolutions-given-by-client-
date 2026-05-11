import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="stats-band section-pad">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-300">By the Numbers</p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
              Outcomes that matter, measured.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-7 text-center backdrop-blur-md">
                <p className="stat-value">
                  <Counter end={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-cream-50/90">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
