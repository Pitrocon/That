import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#000000",
        surface: {
          DEFAULT: "#0a0a0c",
          elevated: "#121216",
          contrast: "#16161b",
        },
        titanium: {
          DEFAULT: "#f5f5f7",
          muted: "#a1a1aa",
          gold: "#e8c97a",
        },
        apple: {
          blue: "#0071e3",
          blueHover: "#0077ed",
          link: "#2997ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(41, 151, 255, 0.25)",
        card: "0 20px 50px -24px rgba(0, 0, 0, 0.85)",
      },
    },
  },
  plugins: [],
};

export default config;
