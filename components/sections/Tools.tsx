import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { toolCards, masterTools } from "@/data/sections";
import { getIcon } from "@/lib/icons";

export function Tools() {
  return (
    <section id="tools" className="section-pad bg-[radial-gradient(ellipse_at_top,rgba(15,66,126,0.05),transparent_60%)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="CDM Tools & Skills"
            title="The toolset focus is narrow by design."
            description="This section stays aligned to Clinical Data Management operations, standards, and data review habits instead of mixing unrelated modules."
            centered
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {toolCards.map(({ title, text, icon, image }, i) => {
            const Icon = getIcon(icon);
            return (
              <Reveal key={title} delay={i * 60}>
                <div className="tool-card group relative h-full rounded-3xl p-6 overflow-hidden">
                  {image && (
                    <div className="absolute right-4 top-4 h-20 w-20 opacity-20 group-hover:opacity-30 transition duration-500">
                      <Image src={image} alt="" aria-hidden width={80} height={80} className="h-full w-full object-contain" />
                    </div>
                  )}
                  <div className="relative z-10">
                    <div className="inline-flex rounded-2xl border border-white/70 bg-white/85 p-3 text-navy-700 shadow-md transition duration-300 group-hover:scale-105 group-hover:text-gold-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-black tracking-tight text-navy-900">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <a href="/#register" className="gradient-button inline-flex items-center gap-2">
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ToolsMaster() {
  return (
    <section className="section-pad tools-master-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Tools You Will Master"
            title="Hands-on experience with industry-standard software."
            description="Build practical proficiency with the tools that CDM teams use every day across CROs, sponsors, and research organizations."
            centered
          />
        </Reveal>
        <div className="mt-12 flex flex-wrap items-stretch justify-center gap-5">
          {masterTools.map((tool, i) => {
            const Icon = getIcon(tool.icon);
            return (
              <Reveal key={tool.name} delay={i * 80}>
                <div className="tool-master-card group">
                  <div className={`tool-master-icon bg-gradient-to-br ${tool.grad}`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="tool-master-name">{tool.name}</h3>
                  <p className="tool-master-desc">{tool.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
