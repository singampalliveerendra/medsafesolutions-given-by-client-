import { Audience } from "@/components/sections/Audience";
import { Career } from "@/components/sections/Career";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Navbar } from "@/components/sections/Navbar";
import { Program } from "@/components/sections/Program";
import { Register } from "@/components/sections/Register";
import { RequirementsStrip } from "@/components/sections/RequirementsStrip";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { SyllabusCTA } from "@/components/sections/SyllabusCTA";
import { Tools, ToolsMaster } from "@/components/sections/Tools";
import { WhatsAppFab } from "@/components/sections/WhatsAppFab";
import { WhyProgram } from "@/components/sections/WhyProgram";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen overflow-x-hidden">
        <Hero />
        <Program />
        <Tools />
        <ToolsMaster />
        <Highlights />
        <Career />
        <RequirementsStrip />
        <WhyProgram />
        <Audience />
        <SyllabusCTA />
        <FAQ />
        <Register />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <StickyCallBar />
    </>
  );
}
