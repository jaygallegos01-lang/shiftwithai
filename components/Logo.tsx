/* LOGO (handoff §10.4)
   ---------------------------------------------------------------------------
   Currently a flame-gradient "sun" + the wordmark. TO SWAP IN THE REAL LOGO:
   replace the inner markup with <img src="/logo.svg" alt="Sonoran Sims" /> (or
   an inline SVG). If your logo includes the wordmark, drop the <span>. */
import { brand } from "@/lib/content";

export default function Logo() {
  return (
    <span className="logo">
      {/* client supplies final SVG — swap this <span> for an <img>/<svg> */}
      <span className="logo__sun" aria-hidden="true" />
      <span className="logo__word">{brand.name}</span>
    </span>
  );
}
