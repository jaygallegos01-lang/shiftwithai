import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sonoran Sims tokens — warm, dark-first
        flame: "#FF7A28", // Flame Core — primary brand orange
        amber: "#FFC247", // gradient start, highlights
        ember: "#E22D17", // gradient end, urgency
        asphalt: "#0E0E11", // primary dark background
        ink: "#1C1C22", // card / elevated surfaces
        sand: "#F5F2EC", // primary text on dark / light-mode bg
        ash: "#8B8B97", // secondary text, captions, labels
        violet: "#5B2D8E", // Desert Violet — sunset→night transition only
        go: "#37D98B", // Go Green — booking confirmed only
      },
      backgroundImage: {
        // The one signature gradient — always Amber → Flame → Ember
        flame: "linear-gradient(135deg, #FFC247 0%, #FF7A28 52%, #E22D17 100%)",
        "flame-text":
          "linear-gradient(120deg, #FFC247 0%, #FF7A28 50%, #E22D17 100%)",
      },
      fontFamily: {
        display: ["var(--font-barlow)", "Barlow Condensed", "sans-serif"],
        sans: ["var(--font-plex-sans)", "IBM Plex Sans", "sans-serif"],
        mono: ["var(--font-plex-mono)", "IBM Plex Mono", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.34em",
      },
      keyframes: {
        haze: {
          "0%, 100%": { transform: "translateY(0) scaleY(1)", opacity: "0.5" },
          "50%": { transform: "translateY(-2px) scaleY(1.03)", opacity: "0.8" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        haze: "haze 6s ease-in-out infinite",
        rise: "rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
