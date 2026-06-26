# Drop your real photos here

This folder is where the client's real photos live. Nothing else references
these paths except `lib/content.ts`, so swapping photos never touches code logic.

## Where each photo shows up

| Put the file in | Then set, in `lib/content.ts` | Shows up |
|---|---|---|
| `public/images/tiers/` | `tiers[].img = "/images/tiers/pro.jpg"` | pricing card (16:9 looks best) |
| `public/images/events/` | `events[] = { src: "/images/events/party.jpg", alt: "..." }` | "Real events" masonry |
| `public/images/built-for.jpg` | `BuiltFor.tsx` `<PhotoSlot src="/images/built-for.jpg" .../>` | "Built for" section |
| `public/images/equipment.jpg` | `Equipment.tsx` `<PhotoSlot src="/images/equipment.jpg" .../>` | "Equipment" section |

Reference every path with a leading slash — Next.js serves `/public` at the site root,
so `public/images/events/party.jpg` is reachable at `/images/events/party.jpg`.

Until a `src` is set, an on-brand "Real Photo" placeholder shows in its place.
Use real photos only — the brand rule is no stock, no staged shots.

Tip: large images? Drop them in, then swap `<img>` for Next's `<Image>` in
`PhotoSlot.tsx` for automatic optimization. Plain `<img loading="lazy">` is the
zero-config default and works fine to launch.
