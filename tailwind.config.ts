import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // Deep Navy
        foreground: "#f8fafc", // Off-white
        accent: "#3b82f6",     // Electric Blue
      },
    },
  },
  plugins: [],
};
export default config;