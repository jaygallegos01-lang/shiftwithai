import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const SITE_URL = "https://sonoransims.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sonoran Sims — Mobile Racing Simulator Rental in Phoenix, Arizona",
  description:
    "Arizona's only mobile racing simulator rental. Pro-grade sims delivered, set up, and run by us — anywhere in the Phoenix Valley. Published pricing from $175. Book in under two minutes.",
  keywords: [
    "racing simulator rental Phoenix",
    "sim racing party Arizona",
    "rent a racing simulator near me",
    "mobile racing simulator Phoenix",
    "racing simulator for corporate events Arizona",
    "sim racing birthday party Phoenix",
  ],
  authors: [{ name: "Sonoran Sims" }],
  openGraph: {
    title: "Sonoran Sims — We bring the track to you.",
    description:
      "Pro-grade racing simulators delivered anywhere in the Phoenix Valley. Published pricing from $175. Any Sim, Anywhere.",
    url: SITE_URL,
    siteName: "Sonoran Sims",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonoran Sims — We bring the track to you.",
    description:
      "Arizona's only mobile racing simulator rental. Published pricing from $175.",
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
