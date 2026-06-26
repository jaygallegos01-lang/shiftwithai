/* =============================================================================
   SONORAN SIMS — single-page launch site
   -----------------------------------------------------------------------------
   Composition order = handoff §6. The fixed sunset/vehicle/tach backdrop sits
   behind a `.content` scrim wrapper; sections render in reading order. All
   editable content lives in lib/content.ts — this file just wires components.
============================================================================= */
import SkyBackdrop from "@/components/SkyBackdrop";
import RevealInit from "@/components/RevealInit";
import BookingProvider from "@/components/BookingProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StickyBar from "@/components/StickyBar";

import WhyMobile from "@/components/sections/WhyMobile";
import BuiltFor from "@/components/sections/BuiltFor";
import Pricing from "@/components/sections/Pricing";
import Equipment from "@/components/sections/Equipment";
import YourData from "@/components/sections/YourData";
import RealEvents from "@/components/sections/RealEvents";
import RigOwners from "@/components/sections/RigOwners";
import ServiceArea from "@/components/sections/ServiceArea";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      {/* Fixed scroll-driven sunset + tachometer (z-index:0, behind everything) */}
      <SkyBackdrop />

      <BookingProvider>
        <Nav />

        {/* Scrim wrapper keeps the sky visible at seams + guarantees contrast */}
        <main className="content">
          <Hero />
          <WhyMobile />
          <BuiltFor />
          <Pricing />
          <Equipment />
          <YourData />
          <RealEvents />
          <RigOwners />
          <ServiceArea />
          <Footer />
        </main>

        <StickyBar />
      </BookingProvider>

      {/* Sets up the IntersectionObserver for every [data-reveal] element */}
      <RevealInit />
    </>
  );
}
