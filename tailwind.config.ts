import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#3C1E16", // SLU deep brown
        foreground: "#F9F9F9", // light text
        accent: "#AA182C", // SLU scarlet
        "accent-strong": "#820012", // SLU maroon
        surface: "#653A2B", // SLU brown
        muted: "#E4E4E4", // readable muted text
        border: "#665C52", // subtle border
      },
    },
  },
  plugins: [],
};
export default config;
