import { Audience } from "@/components/sections/Audience";
import { Batches } from "@/components/sections/Batches";
import { Career } from "@/components/sections/Career";
import { Contact } from "@/components/sections/Contact";
import { Faculty } from "@/components/sections/Faculty";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Navbar } from "@/components/sections/Navbar";
import { Placements } from "@/components/sections/Placements";
import { Program } from "@/components/sections/Program";
import { Register } from "@/components/sections/Register";
import { RequirementsStrip } from "@/components/sections/RequirementsStrip";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { SyllabusCTA } from "@/components/sections/SyllabusCTA";
import { Testimonials } from "@/components/sections/Testimonials";
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
        <Faculty />
        <Batches />
        <Placements />
        <Testimonials />
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
