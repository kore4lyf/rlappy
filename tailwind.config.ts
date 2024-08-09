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
        rlappyGreen: "#3cb271"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#3cb271",
          secondary: "#000000",
          neutral: "#000000",
          default: "#000000"
        }
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#3cb271",
          secondary: "#000000",
          default: "#d1d5db"
        }
      }
    ],
  },
  darkMode: ["class", "[data-theme='dark']"] 
};

export default config;
