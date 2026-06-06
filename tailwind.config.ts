import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm dark navy — lifted from pitch-black, closer to project_wanderers' #0d1b2a warmth
        navy: {
          950: "#08121E",
          900: "#0D1828",
          800: "#121E2E",
          700: "#192A3C",
          600: "#1E334C",
          500: "#254A68",
          400: "#3A6688",
          300: "#6A90AB",
          200: "#A4BAC8",
          100: "#D8E2EB",
          50:  "#EFF3F6",
        },
        // Deeper wine-crimson — same hue, lower intensity than searing #C0152A
        crimson: {
          900: "#280610",
          800: "#4E0E1C",
          700: "#781526",
          600: "#A81A2C",   // primary — wine-crimson, not searing red
          500: "#C02238",
          400: "#D63E50",
          300: "#E57080",
          200: "#F0A0AE",
          100: "#FAD8DE",
        },
        gold: {
          700: "#7A5C10",
          600: "#9E7820",
          500: "#C49028",
          400: "#D8AA42",
          300: "#EAC86A",
        },
        // Warm cream text scale — drawn from project_wanderers' #f5ead0 warmth
        cream: {
          100: "#F0E8D8",
          200: "#E4DAC8",   // primary text (replaces cold navy-100)
          300: "#C8B898",   // muted body text
          400: "#A09078",   // dimmed labels
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter:    ["var(--font-inter)", "system-ui", "sans-serif"],
        mono:     ['"Courier New"', "Courier", "monospace"],
      },
      backgroundImage: {
        "hero-spotlight":
          "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(168,26,44,0.10) 0%, transparent 68%)",
        "section-glow":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(168,26,44,0.05) 0%, transparent 60%)",
        "card-shimmer":
          "linear-gradient(135deg, rgba(25,42,60,0.6) 0%, rgba(18,30,46,0.8) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        blink: "blink 1.2s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
