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
        manrope: ["var(--font-manrope)"],
      },
      colors: {
        colorOne: "#d87d4a",
        colorTwo: "#101010",
        colorThree: "#f1f1f1",
        colorFour: "#fafafa",
        colorFive: "#fbaf85",
      },
      backgroundImage: () => ({
        bgImage: "url('/public/images/home/desktop/pattern-circles.svg')",
      }),
    },
  },
  plugins: [],
};
export default config;
