import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { WhatsAppFab } from "@/components/sections/WhatsAppFab";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Medsafe Solutions collects, uses, and protects your data."
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen pt-28 sm:pt-32">
        <section className="section-pad animate-route-fade">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-black tracking-tight text-navy-900">Privacy Policy</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {/* TODO: Replace with reviewed privacy text from your legal counsel. */}
              We collect basic enquiry information (name, contact, qualification, city) to respond to your CDM
              programme application. We do not sell or share this with third parties. Email forwarding is handled
              through Resend; no data is retained beyond what is necessary to follow up on your enquiry. Contact
              medsafesolutions2023@gmail.com to request deletion.
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
