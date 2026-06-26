import type { Metadata, Viewport } from "next";
import "./globals.css";

/* SEO targets CONSUMER search intent (market intel "Website" tab) — the lane
   competitors ignore — not just corporate keywords. */
export const metadata: Metadata = {
  metadataBase: new URL("https://sonoransims.com"),
  title: "Sonoran Sims — Mobile Racing Simulator Rental | Phoenix Valley, AZ",
  description:
    "Arizona's premier mobile sim rental. Pro-grade racing rigs delivered, set up, and run at your home, office, or venue across the Phoenix Valley. Transparent pricing from $175. Book online in under two minutes.",
  keywords: [
    "racing simulator rental Phoenix",
    "sim racing party Arizona",
    "rent racing simulator near me",
    "mobile sim racing Scottsdale",
    "corporate sim racing Phoenix",
    "birthday party racing simulator Arizona",
  ],
  openGraph: {
    title: "Sonoran Sims — We bring the track to you.",
    description:
      "Pro racing rigs delivered across the Phoenix Valley. Transparent pricing from $175. Racing today. Flight sims tomorrow.",
    url: "https://sonoransims.com",
    siteName: "Sonoran Sims",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0E0E11",
  width: "device-width",
  initialScale: 1,
};

/* LocalBusiness structured data — boosts local consumer SEO ("near me"). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sonoran Sims",
  description:
    "Mobile racing simulator rental serving the Phoenix Valley of the Sun.",
  url: "https://sonoransims.com",
  email: "hello@sonoransims.com",
  areaServed: [
    "Phoenix", "Scottsdale", "Tempe", "Mesa", "Gilbert", "Chandler", "Glendale",
  ].map((c) => ({ "@type": "City", name: `${c}, AZ` })),
  priceRange: "$175–$799",
  address: { "@type": "PostalAddress", addressRegion: "AZ", addressLocality: "Phoenix" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
