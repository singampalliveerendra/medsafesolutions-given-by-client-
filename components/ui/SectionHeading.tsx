export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-navy-700">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-display text-3xl font-black tracking-tight text-navy-900 sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>}
    </div>
  );
}
