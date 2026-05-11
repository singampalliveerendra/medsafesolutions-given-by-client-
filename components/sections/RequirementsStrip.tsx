import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function RequirementsStrip() {
  return (
    <div className="image-strip">
      <Image
        src="/images/cdm-requirements.webp"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover"
      />
      <div className="image-strip-overlay">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-300">Real-World Requirements</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            What clinical data managers actually need on the job
          </h2>
          <p className="mt-4 text-base text-cream-50/95">
            Our curriculum is built directly from the skills employers expect at the interview table.
          </p>
          <a href="/#register" className="gradient-button-gold mt-7 inline-flex items-center gap-2">
            Start Your CDM Journey
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
