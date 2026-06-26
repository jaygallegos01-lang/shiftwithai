import type { Config } from "tailwindcss";

/* Most styling lives in app/globals.css as semantic classes + CSS variables
   (the single source of truth for the brand). These Tailwind tokens mirror
   them so utility classes stay on-brand if you reach for them. */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: "#0E0E11",
        card: "#1C1C22",
        bone: "#F5F2EC",
        muted: "#8B8B97",
        amber: "#FFC247",
        flame: "#FF7A28",
        ember: "#E22D17",
        violet: "#5B2D8E",
        go: "#37D98B",
      },
      backgroundImage: {
        flame: "linear-gradient(135deg, #FFC247 0%, #FF7A28 52%, #E22D17 100%)",
      },
      fontFamily: {
        display: ["'Barlow Condensed'", "sans-serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
