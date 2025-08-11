// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monda: ["var(--font-monda)", "sans-serif"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        anta: ["var(--font-anta)", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
  // @ts-ignore: DaisyUI is not part of Tailwind type
  daisyui: {
    themes: ["synthwave", "dark"],
  },
};

export default config;
