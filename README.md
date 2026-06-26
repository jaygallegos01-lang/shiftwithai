# Sonoran Sims

**Arizona's only mobile racing simulator rental.** Pro-grade sims delivered,
set up, and run anywhere in the Phoenix Valley. Published pricing from $175.
Any Sim, Anywhere.

Launch website — built with Next.js 16, Tailwind CSS, and Framer Motion.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build   # production build
npm start       # serve the build
```

---

## Design system

Dark-first on **Asphalt** with the warm flame palette. The one bold move is a
**scroll-driven sunset → night** background (Amber → Flame → Ember → Desert
Violet → Asphalt) with a stylized Sonoran mountain horizon and a flame-gradient
sun that sets behind the range as you scroll. Everything stays disciplined
around it. `prefers-reduced-motion` gets a static sunset.

| Token | Hex | Role |
|---|---|---|
| Flame Core | `#FF7A28` | Primary orange — CTAs, links, accents |
| Amber | `#FFC247` | Gradient start, highlights |
| Ember | `#E22D17` | Gradient end, urgency |
| Asphalt | `#0E0E11` | Primary dark background |
| Ink | `#1C1C22` | Card / elevated surfaces |
| Sand | `#F5F2EC` | Primary text on dark |
| Ash | `#8B8B97` | Secondary text, captions |
| Desert Violet | `#5B2D8E` | Sunset→night transition only |
| Go Green | `#37D98B` | "Booking confirmed" success only |

**Type:** Barlow Condensed (display) · IBM Plex Sans (body) · IBM Plex Mono
(eyebrows / data / pricing). Loaded via `next/font` — self-hosted, no banned
defaults.

---

## What the client still supplies

- **Logo SVGs** — primary (on Asphalt) and alternate (on Sand). Labeled slots
  sit in the nav and footer (`app/components/Nav.tsx`, `Sections.tsx`).
- **Real event photos** — every image is a clearly-labeled `REAL PHOTO:` slot
  (`app/components/PhotoSlot.tsx`). No stock or AI imagery is used.
- **Booking widget** — embed a Calendly or Square widget in the booking slot
  (`app/components/BookingSection.tsx`). The Go Green instant-confirm state is
  already designed.
- **Google Reviews embed** — slot in the Real Events section.

---

## Structure

```
app/
├── layout.tsx                # fonts + SEO metadata
├── globals.css               # tokens, type primitives, buttons
├── page.tsx                  # section assembly + JSON-LD
└── components/
    ├── SunsetBackground.tsx  # the scroll-driven signature
    ├── Hero.tsx              # thesis + setting sun + horizon
    ├── MountainHorizon.tsx   # stylized vector range
    ├── Nav.tsx
    ├── Pricing.tsx           # published tiers + price-anchor strip
    ├── BookingSection.tsx    # widget slot + success state
    ├── StickyBookBar.tsx     # persistent mobile Book bar
    ├── Sections.tsx          # why-mobile, built-for, equipment, data,
    │                         #   real-events, rig-owners, service area,
    │                         #   what's-next, footer
    ├── PhotoSlot.tsx         # labeled real-photo placeholder
    └── Reveal.tsx            # scroll-reveal (reduced-motion aware)
```

---

## Deploy

Push to GitHub → import on Vercel → set `NEXT_PUBLIC_SITE_URL=https://sonoransims.com`
→ deploy. Point the domain's DNS at Vercel.
