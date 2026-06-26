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

## Booking — already wired

The "Book" modal **already submits real bookings** to a serverless endpoint
(`app/api/book/route.ts`). On submit it POSTs `{ tier, dur, quote, date, type,
name, contact }`, then shows the "You're on the grid" confirmation.

**To start receiving bookings by email (2 minutes):**
1. Create a free [Resend](https://resend.com) account and copy an API key.
2. Add these env vars (locally in `.env.local`, or in Vercel → Settings → Env Vars):
   ```
   RESEND_API_KEY=re_xxxxxxxx
   BOOKING_NOTIFY_EMAIL=hello@sonoransims.com
   BOOKING_FROM=Sonoran Sims <bookings@sonoransims.com>
   ```
3. Verify your domain in Resend so `BOOKING_FROM` can use `@sonoransims.com`.
   (For testing, leave `BOOKING_FROM` unset — it falls back to `onboarding@resend.dev`,
   which delivers only to your own Resend account email.)

Until a key is set, the site still works — bookings are logged to the server
console (the response reports `delivered:false`) so nothing breaks before you're ready.

**Prefer a calendar / deposit checkout instead?** Set `config.bookingUrl` in
`lib/content.ts` to a Calendly or Square link and every "Book" button opens it
directly (no env vars, no email). Or embed a widget inside the modal at the
`EMBED SLOT` comment in `components/BookingModal.tsx`. To add Stripe/Square
deposits later, extend the `POST` handler in `app/api/book/route.ts`.

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
