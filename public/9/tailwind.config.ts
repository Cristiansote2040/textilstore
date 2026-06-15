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
        primary: "#dc2626",
        "primary-dark": "#b91c1c",
        "primary-light": "#ef4444",
        secondary: "#64748b",
        accent: "#f59e0b",
        background: "#fffaf0",
        surface: "#ffffff",
        "surface-dark": "#f8f8f8",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;