import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { WhatsAppFab } from "@/components/sections/WhatsAppFab";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog · CDM Career, CDISC, EDC & Exam Updates",
  description:
    "Articles on Clinical Data Management careers, CDISC standards, EDC workflows, and the path from B.Pharm/M.Pharm to CDM roles."
};

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen pt-28 sm:pt-32">
        <section className="section-pad animate-route-fade">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-navy-700">Blog</p>
            <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-900 sm:text-5xl">
              CDM career, standards, and exam updates.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Practical reads on Clinical Data Management — career roadmaps, CDISC and EDC explainers, and the path
              from a pharmacy or life-science degree into a CDM role.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-cream-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {p.cover && (
                    <div className="relative aspect-[16/9] overflow-hidden bg-cream-100">
                      <Image
                        src={p.cover}
                        alt={p.title}
                        fill
                        sizes="(max-width:768px) 100vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(p.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {p.readingMinutes} min read
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-xl font-black tracking-tight text-navy-900 group-hover:text-navy-700">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{p.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold-700">
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
      <StickyCallBar />
    </>
  );
}
