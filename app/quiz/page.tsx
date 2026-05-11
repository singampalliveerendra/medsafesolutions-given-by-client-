import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { WhatsAppFab } from "@/components/sections/WhatsAppFab";
import { QuizClient } from "./QuizClient";

export const metadata: Metadata = {
  title: "CDM Aptitude Quiz · Test your Clinical Data Management readiness",
  description:
    "A 7-question CDM aptitude quiz covering EDC, CDISC, queries, MedDRA, and database lock. Find out where you stand before applying."
};

export default function QuizPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen pt-28 sm:pt-32">
        <section className="section-pad animate-route-fade">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-navy-700">Aptitude Quiz</p>
            <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-navy-900 sm:text-5xl">
              CDM Readiness Quiz
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Seven multiple-choice questions covering EDC, CDISC, queries, MedDRA, and database lock. Takes about 5
              minutes. We'll send your detailed results to your email.
            </p>
            <div className="mt-10">
              <QuizClient />
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
