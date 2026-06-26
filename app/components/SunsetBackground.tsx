"use client";

import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";

/**
 * The signature element: a single fixed backdrop that progresses through an
 * Arizona sunset into night as the visitor scrolls the whole page.
 *   hero      → warm Amber / Flame
 *   middle    → deepening Flame / Ember
 *   lower     → Desert Violet transition
 *   footer    → Asphalt night (stars emerge)
 *
 * Implemented as stacked gradient layers whose opacity is cross-faded against
 * overall scroll progress, so the colour shift reads as one orchestrated
 * descent rather than discrete swaps. Asphalt is the permanent base, so a
 * reduced-motion visitor simply gets the static warm-over-night sunset.
 */
export default function SunsetBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Warm sunset wash — dominant up top, gone by the lower third.
  const warm = useTransform(scrollYProgress, [0, 0.3, 0.58], [1, 0.72, 0]);
  // Ember mid-band — peaks through the middle of the page.
  const ember = useTransform(scrollYProgress, [0.16, 0.44, 0.76], [0, 0.9, 0]);
  // Desert Violet — only appears as the sunset resolves toward night.
  const violet = useTransform(scrollYProgress, [0.54, 0.8, 1], [0, 0.72, 0.3]);
  // Stars — emerge only in the final descent into Asphalt night.
  const stars = useTransform(scrollYProgress, [0.72, 0.92, 1], [0, 0.55, 0.9]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-asphalt"
    >
      {/* Static fallback gradient for reduced motion / no-JS */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FFC247 0%, #FF7A28 18%, #E22D17 42%, #5B2D8E 72%, #0E0E11 100%)",
          opacity: reduce ? 1 : 0,
        }}
      />
      {!reduce && (
        <>
          <motion.div
            className="absolute inset-0"
            style={{
              opacity: warm,
              background:
                "linear-gradient(180deg, #FFC85A 0%, #FF8A33 32%, #E5571E 62%, #2A150C 100%)",
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              opacity: ember,
              background:
                "linear-gradient(180deg, #E5571E 0%, #E22D17 38%, #3A1430 78%, #0E0E11 100%)",
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              opacity: violet,
              background:
                "linear-gradient(180deg, #6A3499 0%, #2E1A45 55%, #0E0E11 100%)",
            }}
          />
          {/* Star field — tiny warm-white points, parallax-free, night only */}
          <motion.div
            className="absolute inset-0"
            style={{
              opacity: stars,
              backgroundImage:
                "radial-gradient(1px 1px at 12% 18%, rgba(245,242,236,0.9), transparent)," +
                "radial-gradient(1px 1px at 28% 42%, rgba(245,242,236,0.7), transparent)," +
                "radial-gradient(1.4px 1.4px at 47% 12%, rgba(255,194,71,0.9), transparent)," +
                "radial-gradient(1px 1px at 63% 33%, rgba(245,242,236,0.8), transparent)," +
                "radial-gradient(1px 1px at 78% 22%, rgba(245,242,236,0.6), transparent)," +
                "radial-gradient(1.4px 1.4px at 88% 48%, rgba(245,242,236,0.85), transparent)," +
                "radial-gradient(1px 1px at 36% 64%, rgba(245,242,236,0.55), transparent)," +
                "radial-gradient(1px 1px at 7% 72%, rgba(245,242,236,0.6), transparent)," +
                "radial-gradient(1.2px 1.2px at 70% 70%, rgba(255,194,71,0.7), transparent)," +
                "radial-gradient(1px 1px at 55% 85%, rgba(245,242,236,0.5), transparent)",
            }}
          />
        </>
      )}
      {/* Subtle vignette so text always holds contrast over the wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, rgba(14,14,17,0.45) 100%)",
        }}
      />
    </div>
  );
}
