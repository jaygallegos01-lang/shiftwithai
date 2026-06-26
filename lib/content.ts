/* =============================================================================
   SONORAN SIMS — SITE CONTENT (single source of truth)
   -----------------------------------------------------------------------------
   THIS IS THE FILE YOU EDIT to change copy, prices, photos, reviews, cities,
   contact details and social links. Nothing here is wired to the complex
   scroll / sunset / vehicle background logic — that lives in
   components/SkyBackdrop.tsx and never needs touching to update content.

   HOW TO SWAP IN REAL ASSETS (quick map — full notes inline below):
     - Tier photos ....... tiers[].img  -> "/images/tiers/pro.jpg"
     - Event photos ...... events[]     -> { src:"/images/events/party.jpg", alt:"..." }
     - Reviews ........... reviews[]     -> real Google review quotes (no invented ones)
     - "Built for" shot .. builtForPhoto
     - Equipment shot .... equipmentPhoto
     - Contact / socials . contact, socials
   Drop image files into /public/images/... and reference them with a leading
   slash (Next.js serves /public at the site root).
============================================================================= */

/* ----------------------------------------------------------------------------
   GLOBAL CONFIG (the "tweakable props" from the handoff §9)
---------------------------------------------------------------------------- */
export const config = {
  // Sunset drama. 'Off' freezes a static warm sunset (also forced under
  // prefers-reduced-motion). 'Restrained' | 'Balanced' | 'Dramatic'.
  motion: "Balanced" as "Off" | "Restrained" | "Balanced" | "Dramatic",
  // Which pricing card glows + gets the badge.
  recommendedTier: "PRO" as "STARTER" | "PRO" | "MOTION",
  // Mobile sticky "Book" bar (<820px). High-intent affordance for phone traffic.
  showStickyBar: true,
  // Where every "Book" button points. Leave "modal" to use the built-in quote
  // modal. To go live instantly, set to a Calendly/Square URL string and the
  // buttons will open it in a new tab instead (see components/BookingModal).
  bookingUrl: "modal" as "modal" | (string & {}),
};

/* ----------------------------------------------------------------------------
   BRAND / NAV
---------------------------------------------------------------------------- */
export const brand = {
  name: "Sonoran Sims",
  tagline: "Any Sim · Anywhere",
  startingPrice: 175, // drives the hero + sticky bar "from $X" copy
};

export const navLinks = [
  { label: "Why mobile", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Equipment", href: "#equipment" },
  { label: "The Valley", href: "#service" },
];

/* ----------------------------------------------------------------------------
   PRICING TIERS  (handoff §10.2)  — the brand's #1 differentiator: PUBLISHED.
   80% of competitors hide pricing behind a quote form. We don't.
   `id` must stay STARTER | PRO | MOTION (the live quote + recommended logic
   key off it). Add `img:"/images/tiers/pro.jpg"` to show a photo on a card.
---------------------------------------------------------------------------- */
export type Tier = {
  id: "STARTER" | "PRO" | "MOTION";
  name: string;
  index: string; // mono "01 / 03" index label
  bestFor: string;
  half: number;
  full: number;
  includes: string;
  img?: string; // optional per-tier photo (16:9 looks best)
};

export const tiers: Tier[] = [
  {
    id: "STARTER",
    name: "Starter",
    index: "01 / 03",
    bestFor: "Best for first-timers & birthday parties",
    half: 175,
    full: 299,
    includes:
      "PS5 + racing wheel + pedals + monitor, delivered & set up.",
    // img: "/images/tiers/starter.jpg",
  },
  {
    id: "PRO",
    name: "Pro",
    index: "02 / 03",
    bestFor: "Best for serious play & corporate events",
    half: 299,
    full: 499,
    includes:
      "PC + direct-drive wheel + load-cell pedals + triple screens + live tournament leaderboard.",
    // img: "/images/tiers/pro.jpg",
  },
  {
    id: "MOTION",
    name: "Motion",
    index: "03 / 03",
    bestFor: "Best for the full-send, can't-fake-it experience",
    half: 449,
    full: 799,
    includes:
      "Everything in Pro + full-motion platform + dedicated operator.",
    // img: "/images/tiers/motion.jpg",
  },
];

// Price table used by the live booking quote. Derived from `tiers` so you only
// edit prices in one place (above).
export const PRICES = Object.fromEntries(
  tiers.map((t) => [t.id, { half: t.half, full: t.full }])
) as Record<Tier["id"], { half: number; full: number }>;

export const addOnsLine =
  "Add VR · an extra rig · extended hours · a sunset night-race package.";

/* ----------------------------------------------------------------------------
   "WHAT WE HANDLE" — the anti-template manifest (handoff §6-B)
---------------------------------------------------------------------------- */
export const weHandle = [
  "Load the rigs",
  "Drive to your venue",
  "Set up & calibrate",
  "Run the whole session",
  "Pack it out",
];

/* ----------------------------------------------------------------------------
   USE CASES — vertical index (handoff §6-C). Market intel: birthday parties &
   corporate are the two money lanes nobody serves well at once.
---------------------------------------------------------------------------- */
export const useCases = [
  { title: "Birthday parties", note: "Kids to adults — everyone gets laps" },
  { title: "Corporate team-building", note: "Leaderboards beat trust falls" },
  { title: "Bachelor & bachelorette", note: "The pre-game everyone remembers" },
  { title: "Brewery & car-club activations", note: "Foot traffic that stays" },
  { title: "F1 watch parties", note: "Watch the race, then drive it" },
];

/* ----------------------------------------------------------------------------
   EQUIPMENT spec tags (handoff §6-E)
---------------------------------------------------------------------------- */
export const equipmentTags = [
  "Direct-drive wheels",
  "Load-cell pedals",
  "Triple screens",
  "Full-motion platform",
];

/* ----------------------------------------------------------------------------
   SESSION RESULTS card (handoff §6-F / Blue Ocean #8: data-driven race).
   Swap these for real telemetry later, or feed from your timing software.
---------------------------------------------------------------------------- */
export const results = {
  meta: "SONORAN SIMS · BACKYARD GP · 12 LAPS · SAMPLE",
  leaderboard: [
    { pos: "P1", driver: "M. Reyes", best: "1:41.882", gap: "" },
    { pos: "P2", driver: "J. Catalano", best: "1:42.140", gap: "+0.258" },
    { pos: "P3", driver: "A. Powell", best: "1:42.703", gap: "+0.821" },
    { pos: "P4", driver: "D. Nakamura", best: "1:43.519", gap: "+1.637" },
  ],
  sectors: [
    { label: "S1", pct: 64, time: "27.418" },
    { label: "S2", pct: 92, time: "41.092" },
    { label: "S3", pct: 74, time: "33.372" },
  ],
};

/* ----------------------------------------------------------------------------
   REAL EVENTS gallery (handoff §6-G / §10.1).
   Brand rule: REAL photos only — no stock, no staged.
   To go live: set each item's `src` to your photo path. While `src` is empty
   the on-brand "Real Photo" placeholder shows. `h` just seeds the masonry
   rhythm; with real photos you can delete it and let images size themselves.
---------------------------------------------------------------------------- */
export type EventPhoto = { src?: string; alt: string; h?: number };

export const events: EventPhoto[] = [
  { src: "", alt: "Backyard birthday party — kids racing", h: 280 },
  { src: "", alt: "Corporate team-building tournament", h: 236 },
  { src: "", alt: "Triple-screen Pro rig under string lights", h: 320 },
  { src: "", alt: "Brewery activation — crowd around the rig", h: 212 },
  { src: "", alt: "Bachelor party night race", h: 300 },
  { src: "", alt: "Full-motion platform in action", h: 264 },
];

/* ----------------------------------------------------------------------------
   REVIEWS (handoff §10.3). Brand rule: NEVER invent testimonials.
   Leave this array empty to show the "connect Google" placeholder card.
   When you have REAL Google reviews, add them here and they interleave into
   the events masonry automatically.
---------------------------------------------------------------------------- */
export type Review = {
  author: string;
  rating: number; // 1-5
  quote: string;
  date: string;
  source: "google";
};

export const reviews: Review[] = [
  // Example shape (delete the comment and paste real reviews):
  // { author: "Sarah M.", rating: 5, quote: "Best party we've thrown.", date: "May 2026", source: "google" },
];

/* ----------------------------------------------------------------------------
   FOR RIG OWNERS (Blue Ocean #2/#7: consignment fleet — nobody else recruits
   rigs through their site).
---------------------------------------------------------------------------- */
export const owners = {
  heading: "Own a sim rig? Put it to work.",
  body:
    "We run a consignment fleet. List your rig with Sonoran Sims, we book it, deliver it, run the session, and you earn passive income — zero hustle, zero overhead. As the network grows, so does your slice of the Valley.",
};

/* ----------------------------------------------------------------------------
   SERVICE AREA (handoff §6-I). First city is highlighted/filled.
---------------------------------------------------------------------------- */
export const serviceCities = [
  "Phoenix",
  "Scottsdale",
  "Tempe",
  "Mesa",
  "Gilbert",
  "Chandler",
  "Glendale",
];

/* ----------------------------------------------------------------------------
   CONTACT / SOCIAL / FOOTER
---------------------------------------------------------------------------- */
export const contact = {
  person: "Julio Gallegos · CEO",
  email: "hello@sonoransims.com",
  site: "sonoransims.com",
};

export const socials = [
  { label: "Instagram", href: "https://instagram.com/sonoransims" },
  { label: "TikTok", href: "https://tiktok.com/@sonoransims" },
];

export const legalLine = "© 2026 Sonoran Sims · Phoenix Valley, Arizona";

/* ----------------------------------------------------------------------------
   EDITORIAL COPY used across sections (kept here so non-devs can tweak voice).
---------------------------------------------------------------------------- */
export const copy = {
  hero: {
    eyebrow: "Phoenix Valley · Mobile Sim Rental",
    h1: "We bring the track to you.",
    lead:
      "Pro-grade racing rigs delivered, set up, and run at your home, office, or venue across the Valley of the Sun. Racing today. Flight sims tomorrow.",
    priceNote: `Starting at $${brand.startingPrice}.`,
    cornerTag: "Any Sim · Anywhere",
  },
  why: {
    h2: "Everyone else makes you drive to them.",
    body:
      "Fixed lounges, gaming trucks, quote forms, callbacks. We flipped it: you book a price you can actually see, we show up, and you just race.",
  },
  built: {
    h2: "Birthday parties to boardrooms.",
    weekendBig: "FRI → MON",
    weekendTitle: "Drop off Friday. Pick up Monday.",
    weekendBody:
      "Your living room becomes the track all weekend. Nobody else in the Valley does this.",
  },
  pricing: {
    h2: "Here's the price. Most of our competitors won't show you theirs.",
    reassurance: "Book online with a deposit in under two minutes.",
  },
  equipment: {
    h2: "Direct-drive. Load-cell. Full-motion.",
    body:
      "No arcade toys. Real direct-drive wheels, load-cell brakes, triple screens, and a full-motion platform that puts you in the seat — the same gear sim racers train on.",
  },
  data: {
    h2: "Leave with your lap times.",
    body:
      "Every session is timed. Guests walk away with a leaderboard and their personal best — the bragging rights that get shared, tagged, and rebooked.",
  },
  events: {
    h2: "Real events. Real photos.",
    body: "No stock images. No staged testimonials. Just the Valley, racing.",
  },
  service: {
    h2: "Born in the Sonoran Desert. Serving the whole Valley.",
    seo:
      "Mobile racing simulator rental in Phoenix, Scottsdale, Tempe, Mesa, Gilbert, Chandler, Glendale — and everywhere between.",
  },
  footer: {
    h2line1: "Ready to race?",
    h2line2: "Pick a date.",
  },
};
