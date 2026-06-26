/* PRICING (handoff §6-D / F2) — the #1 differentiator. 80% of competitors
   hide prices; we publish all three tiers openly, styled as a telemetry panel.
   Cards are mapped from `tiers` in lib/content.ts (edit prices there). The
   recommended tier (config.recommendedTier) gets the glow + badge. */
import { tiers, config, addOnsLine, copy } from "@/lib/content";
import BookButton from "../BookButton";

export default function Pricing() {
  return (
    <section className="section" id="pricing" style={{ scrollMarginTop: "var(--nav-h)" }}>
      <div className="container">
        <p className="eyebrow" data-reveal>Transparent pricing</p>
        <h2 className="h2" data-reveal style={{ maxWidth: "18ch" }}>{copy.pricing.h2}</h2>

        <div className="pricing-grid">
          {tiers.map((t) => {
            const rec = t.id === config.recommendedTier;
            return (
              <article className={`tier ${rec ? "tier--rec" : ""}`} key={t.id} data-reveal>
                {rec && (
                  <span className="tier__badge">
                    {t.id === "PRO" ? "Most popular" : "Recommended"}
                  </span>
                )}

                {/* Per-tier photo (optional — set `img` in content). */}
                {t.img && (
                  <div className="tier__photo">
                    <img src={t.img} alt={`${t.name} rig`} loading="lazy" />
                  </div>
                )}

                <div className="tier__head">
                  <span className="tier__name">{t.name}</span>
                  <span className="tier__index">{t.index}</span>
                </div>
                <div className="tier__best">{t.bestFor}</div>

                <div className="tier__prices">
                  <div>
                    <span className="tier__price-label">Half day</span>
                    <span className="tier__half">${t.half}</span>
                  </div>
                  <div>
                    <span className="tier__price-label">Full day</span>
                    <span className="tier__full">${t.full}</span>
                  </div>
                </div>

                <p className="tier__includes">{t.includes}</p>
                <BookButton tier={t.id} variant={rec ? "flame" : "outline"}>
                  Book {t.name}
                </BookButton>
              </article>
            );
          })}
        </div>

        <div className="pricing-foot" data-reveal>
          <span className="pricing-foot__addons">{addOnsLine}</span>
          <span className="pricing-foot__ok">
            <span className="dot-go" /> {copy.pricing.reassurance}
          </span>
        </div>
      </div>
    </section>
  );
}
