import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { WhatsAppFab } from "@/components/sections/WhatsAppFab";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Medsafe Solutions website and CDM programme."
};

export default function Terms() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen pt-28 sm:pt-32">
        <section className="section-pad animate-route-fade">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-black tracking-tight text-navy-900">Terms of Use</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {/* TODO: Replace with reviewed terms from your legal counsel. */}
              By using this site you agree to use it only for lawful purposes. Programme content, materials, and
              branding are the property of Medsafe Solutions. Fees, batch dates, and scholarships are subject to
              change; refunds and cancellations are governed by the policy in your enrolment agreement.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
      <StickyCallBar />
    </>
  );
}
