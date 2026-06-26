/* HERO (handoff §6). Bottom-aligned headline over the mountains; the vehicle
   highway streaks across the horizon behind the copy. */
import { copy } from "@/lib/content";
import VehicleHighway from "./VehicleHighway";
import { IconArrowRight } from "./icons";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* z1: the near desert floor the highway sits on (grounds the road) */}
      <div className="hero-floor" aria-hidden="true" />

      {/* z2: cars on the ground-level road, behind the headline (z3 via stacking) */}
      <VehicleHighway />

      <div className="hero__tag">{copy.hero.cornerTag}</div>

      <div style={{ position: "relative", zIndex: 3 }}>
        <p className="eyebrow">{copy.hero.eyebrow}</p>
        <h1 className="h1 hero__h1">{copy.hero.h1}</h1>
        <p className="lead hero__lead">
          {copy.hero.lead}{" "}
          <span className="mono" style={{ color: "var(--amber)" }}>{copy.hero.priceNote}</span>
        </p>
        <div className="hero__cta">
          <a href="#pricing" className="btn btn--flame">
            See pricing &amp; book <IconArrowRight />
          </a>
          <a href="#why" className="btn btn--outline">How it works</a>
        </div>
      </div>
    </section>
  );
}
