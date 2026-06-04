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
        navy: {
          950: "#060A14",
          900: "#0A0F1E",
          800: "#0F1829",
          700: "#162035",
          600: "#1E2D4A",
          500: "#2A3F66",
          400: "#3D5A8A",
          300: "#8A9BB8",
          200: "#B8C4D8",
          100: "#E8ECF4",
          50:  "#F4F6FA",
        },
        crimson: {
          900: "#3D0008",
          800: "#6B0010",
          700: "#8B0015",
          600: "#C0152A",
          500: "#D42035",
          400: "#E8354A",
          300: "#F06070",
          200: "#F59AA5",
          100: "#FDDDE0",
        },
        gold: {
          700: "#7A5C10",
          600: "#A07820",
          500: "#C9952A",
          400: "#E0AD40",
          300: "#EFC870",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter:    ["var(--font-inter)", "system-ui", "sans-serif"],
        mono:     ['"Courier New"', "Courier", "monospace"],
      },
      backgroundImage: {
        "hero-spotlight":
          "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(192,21,42,0.14) 0%, transparent 68%)",
        "section-glow":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(192,21,42,0.07) 0%, transparent 60%)",
        "card-shimmer":
          "linear-gradient(135deg, rgba(30,45,74,0.6) 0%, rgba(15,24,41,0.8) 100%)",
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
