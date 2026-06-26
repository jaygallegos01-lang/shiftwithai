/**
 * Stylized Sonoran range — angular, 4 clean peaks, not a realistic trace.
 * Pure vector in the flame palette. Used as the hero horizon (the sun sets
 * behind it) and echoed, flattened, in the service-area band.
 */
export default function MountainHorizon({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "flat";
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden
      role="presentation"
    >
      <defs>
        <linearGradient id="ridge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C1C22" />
          <stop offset="100%" stopColor="#0E0E11" />
        </linearGradient>
        <linearGradient id="ridgeRim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFC247" />
          <stop offset="55%" stopColor="#FF7A28" />
          <stop offset="100%" stopColor="#E22D17" />
        </linearGradient>
      </defs>

      {variant === "hero" ? (
        <>
          {/* far ridge — softer */}
          <path
            d="M0 240 L210 150 L430 215 L640 120 L880 205 L1090 140 L1280 210 L1440 165 L1440 320 L0 320 Z"
            fill="#241218"
            opacity="0.85"
          />
          {/* near ridge — angular hero peaks with a flame rim light */}
          <path
            d="M0 300 L180 205 L360 270 L560 150 L740 260 L940 175 L1140 268 L1320 200 L1440 250 L1440 320 L0 320 Z"
            fill="url(#ridge)"
          />
          <path
            d="M0 300 L180 205 L360 270 L560 150 L740 260 L940 175 L1140 268 L1320 200 L1440 250"
            fill="none"
            stroke="url(#ridgeRim)"
            strokeWidth="2.5"
            opacity="0.9"
          />
        </>
      ) : (
        <path
          d="M0 280 L240 210 L470 265 L700 195 L930 258 L1160 205 L1440 255 L1440 320 L0 320 Z"
          fill="url(#ridge)"
          stroke="url(#ridgeRim)"
          strokeWidth="1.5"
        />
      )}
    </svg>
  );
}
