"use client";

import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";

/**
 * The signature element: a single fixed backdrop that progresses through an
 * Arizona sunset into night as the visitor scrolls the whole page.
 *   hero      → warm Amber / Flame
 *   middle    → deepening Flame / Ember
 *   lower     → Desert Violet transition
 *   footer    → Asphalt night
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
  const warm = useTransform(scrollYProgress, [0, 0.32, 0.6], [1, 0.7, 0]);
  // Ember mid-band — peaks through the middle of the page.
  const ember = useTransform(
    scrollYProgress,
    [0.15, 0.45, 0.78],
    [0, 0.85, 0],
  );
  // Desert Violet — only appears as the sunset resolves toward night.
  const violet = useTransform(
    scrollYProgress,
    [0.55, 0.82, 1],
    [0, 0.7, 0.32],
  );

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
                "linear-gradient(180deg, #FFC247 0%, #FF8A33 30%, #E5571E 60%, #2A150C 100%)",
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              opacity: ember,
              background:
                "linear-gradient(180deg, #E5571E 0%, #E22D17 40%, #3A1430 80%, #0E0E11 100%)",
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              opacity: violet,
              background:
                "linear-gradient(180deg, #5B2D8E 0%, #2E1A45 55%, #0E0E11 100%)",
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
