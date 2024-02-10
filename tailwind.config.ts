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
        primary: "#A2A2A2",
        secondary: "#E2E2D5"
      },
      padding: {
        "mobile": "20px",
        "tablet": "48px",
        "desktop": "64px",
      },
      maxWidth: {
        maxSectionWidth: "1440px",
      }
    },
  },
  plugins: [],
};
export default config;
