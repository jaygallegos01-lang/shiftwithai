# Sonoran Sims — Launch Website

**Arizona's premier mobile sim rental.** Pro-grade racing rigs delivered, set up, and
run across the Phoenix Valley. _Racing today. Flight sims tomorrow._

Built with **Next.js + React + TypeScript** (App Router) and plain, well-commented CSS.
The signature scroll-driven Sonoran sunset, the vehicle-highway hero, and the
booking modal are all built in — and the content is fully **decoupled** from that
logic so you can edit copy, prices, photos, and reviews without touching any code.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build && npm start   # production build
```

No environment variables are required to run or deploy. (Booking is a built-in
quote modal until you wire a real provider — see "Go live with real booking" below.)

---

## The one file you'll edit most: `lib/content.ts`

**Everything a non-developer needs to change lives here** — prices, copy, photos,
reviews, cities, contact info, social links, and the global config. It is completely
separate from the animated background. Open it and you'll find labeled sections:

| You want to change… | Edit in `lib/content.ts` |
|---|---|
| Prices / tiers / what's included | `tiers[]` (also drives the live booking quote) |
| Which pricing card glows | `config.recommendedTier` |
| Hero / section headlines & body copy | `copy` |
| Use-case list ("Built for") | `useCases[]` |
| Event gallery photos | `events[]` |
| Reviews | `reviews[]` |
| Service cities (first = highlighted) | `serviceCities[]` |
| Contact details / socials | `contact`, `socials` |
| Sunset intensity / sticky bar on-off | `config.motion`, `config.showStickyBar` |

---

## Swapping in real photos & videos

Every image is an on-brand **placeholder** until you give it a real file. There is
**no markup to edit** — just drop a file in `public/images/...` and set its path in
`lib/content.ts`. See `public/images/README.md` for the full table. The short version:

### Event gallery photos
1. Drop files into `public/images/events/` (e.g. `party.jpg`).
2. In `lib/content.ts`, set the `src` on each `events[]` entry:
   ```ts
   export const events = [
     { src: "/images/events/party.jpg", alt: "Backyard birthday party" },
     // ...
   ];
   ```
The "Real Photo" placeholder disappears and the image fills the frame.

### Per-tier rig photos (Starter / Pro / Motion)
Drop files in `public/images/tiers/`, then add `img` to the tier:
```ts
{ id: "PRO", name: "Pro", img: "/images/tiers/pro.jpg", /* ...prices... */ }
```
A 16:9 photo appears at the top of that pricing card automatically.

### "Built for" and "Equipment" section photos
Open `components/sections/BuiltFor.tsx` / `Equipment.tsx` and add a `src` to the
`<PhotoSlot>` (one line each), e.g. `<PhotoSlot src="/images/equipment.jpg" ... />`.

### Video testimonials
Add a video card to the events masonry — either embed (YouTube/Loom `<iframe>`) or a
self-hosted `<video>`. Put it in `components/sections/RealEvents.tsx` next to the
photo loop; the masonry handles any height automatically. Keep the brand rule:
**real footage only, no stock.**

---

## Go live with real booking (replace the quote modal)

By default, "Book" opens a quote modal that ends in a confirmation screen (no charge).
To connect a real booking system, pick one:

- **Easiest (Calendly / Square):** in `lib/content.ts`, set
  `config.bookingUrl = "https://calendly.com/sonoransims/booking"`. Every "Book"
  button then opens that link directly.
- **Embed inside the modal:** in `components/BookingModal.tsx`, find the
  `EMBED SLOT` comment and drop your Calendly/Square widget there.
- **Your own backend / email:** the `submit()` function in `BookingModal.tsx` already
  assembles the `payload` object — POST it to your endpoint (Formspree, Resend, a
  Next.js route) and keep the existing success state.

Full notes are in the comments of `components/BookingModal.tsx`.

---

## Project structure

```
app/
  layout.tsx          # <head>, SEO metadata, LocalBusiness structured data
  page.tsx            # composes the page (just wires components together)
  globals.css         # ALL styling: brand tokens (:root), resets, components
components/
  SkyBackdrop.tsx     # ★ the scroll-driven sunset + tachometer (imperative, rAF)
  VehicleHighway.tsx  # ★ cars/aircraft driving across the hero horizon
  Nav.tsx             # fixed nav + mobile dropdown
  Hero.tsx            # hero copy + CTAs
  BookingProvider.tsx # context so any "Book" button can open the modal
  BookingModal.tsx    # the quote modal (customer + rig-partner modes)
  BookButton.tsx      # reusable book button
  StickyBar.tsx       # mobile sticky "Book" bar
  PhotoSlot.tsx       # image placeholder -> real photo (no markup changes)
  RevealInit.tsx      # scroll-reveal (IntersectionObserver) for [data-reveal]
  Logo.tsx            # swap for the client's final SVG
  icons.tsx           # inline stroke SVGs (brand rule: no emojis)
  sections/           # one file per page section (WhyMobile, Pricing, …)
lib/
  content.ts          # ★ ALL editable content + config (you live here)
public/
  assets/vehicles/    # the four silhouette PNGs (f1, gt, heli, prop)
  images/             # drop your real photos here (see its README)
```

The **two starred files** are the only complex/animated code. Editing content never
requires opening them.

---

## Design & brand notes

- **Palette/type** come from the Logo Design Brief: warm desert flame colors, Barlow
  Condensed display, IBM Plex Sans/Mono. All tokens are CSS variables in `:root`
  (top of `globals.css`) — change a brand color in one place.
- **Mobile-first:** one breakpoint (820px) does the heavy lifting; every CTA is
  thumb-reachable, with a sticky Book bar on phones.
- **Accessibility:** focus-visible flame outlines, reduced-motion support (the sunset
  freezes to a static warm frame, vehicles/animation off), semantic SVG icons.
- **Future-proof / sim-agnostic:** the brand is "Any Sim · Anywhere" — flight-sim
  silhouettes already streak across the hero, and adding a flight-sim tier is just a
  new entry in `tiers[]`.

---

## Deploy to Vercel

1. Push to GitHub.
2. Import the repo at [vercel.com](https://vercel.com) → New Project → Deploy.
3. Point your domain at Vercel (CNAME `www` → `cname.vercel-dns.com`, A `@` → `76.76.21.21`).

Runs on the free tier; no server or database required.
