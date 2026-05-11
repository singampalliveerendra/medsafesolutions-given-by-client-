import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faculty } from "@/data/faculty";

export function Faculty() {
  return (
    <section id="faculty" className="section-pad bg-cream-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Faculty"
            title="Trainers with real CRO and sponsor experience."
            description="Every module is taught by practitioners who have actually run EDC workflows, owned standards mapping, and reviewed datasets for live trials."
            centered
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f, i) => (
            <Reveal key={f.name} delay={i * 70}>
              <article className="group h-full rounded-2xl border border-cream-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-cream-100">
                  <Image
                    src={f.photo}
                    alt={`${f.name}, ${f.role}`}
                    width={400}
                    height={500}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-black tracking-tight text-navy-900">{f.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-gold-700">{f.role}</p>
                <p className="mt-2 text-sm font-semibold text-navy-700">{f.experience}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{f.bio}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {f.credentials.map((c) => (
                    <span key={c} className="rounded-full bg-navy-50 px-2.5 py-1 text-[0.7rem] font-bold text-navy-700">
                      {c}
                    </span>
                  ))}
                </div>
                {f.linkedin && (
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${f.name} on LinkedIn`}
                    className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-navy-100 px-3 py-1.5 text-xs font-bold text-navy-700 transition hover:bg-navy-50"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.84v1.64h.05c.54-1 1.85-2.05 3.81-2.05 4.08 0 4.83 2.69 4.83 6.18V21h-4v-5.61c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {/* TODO: Replace placeholder profiles in /data/faculty.ts with real photos and credentials */}
          Profiles shown are placeholders pending real photos
        </p>
      </div>
    </section>
  );
}
