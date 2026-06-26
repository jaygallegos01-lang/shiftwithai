import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SunsetBackground from "./components/SunsetBackground";
import StickyBookBar from "./components/StickyBookBar";
import Pricing from "./components/Pricing";
import BookingSection from "./components/BookingSection";
import {
  WhyMobile,
  BuiltFor,
  Equipment,
  DataHook,
  RealEvents,
  RigOwners,
  ServiceArea,
  WhatsNext,
  Footer,
} from "./components/Sections";

export default function Home() {
  return (
    <>
      {/* The signature: one orchestrated sunset → night behind everything */}
      <SunsetBackground />
      <Nav />

      <main className="relative">
        <Hero />
        <WhyMobile />
        <BuiltFor />
        <Pricing />
        <Equipment />
        <DataHook />
        <RealEvents />
        <RigOwners />
        <ServiceArea />
        <WhatsNext />
        <BookingSection />
        <Footer />
      </main>

      <StickyBookBar />

      {/* JSON-LD — local business for consumer-intent search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Sonoran Sims",
            description:
              "Arizona's only mobile racing simulator rental. Pro-grade racing simulators delivered, set up, and run anywhere in the Phoenix Valley. Published pricing from $175.",
            url: "https://sonoransims.com",
            areaServed: [
              "Phoenix",
              "Scottsdale",
              "Tempe",
              "Mesa",
              "Gilbert",
              "Chandler",
              "Glendale",
            ].map((c) => ({ "@type": "City", name: c })),
            priceRange: "$$",
            slogan: "Any Sim, Anywhere",
          }),
        }}
      />
    </>
  );
}
