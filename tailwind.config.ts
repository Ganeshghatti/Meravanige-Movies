import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        display: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        brand: {
          white: "#e7eceb",
          yellow: "#fccd18",
          blue: {
            DEFAULT: "#01569e",
            dark: "#002b4e",
            light: "#3377b1",
            accent: "#e6f0fa",
          },
        },
      },
      backgroundImage: {
        "dot-pattern": "radial-gradient(#01569e 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-pattern": "24px 24px",
      },
      animation: {
        blob: "blob 10s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
