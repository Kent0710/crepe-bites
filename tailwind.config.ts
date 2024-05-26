import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 0, 0.35)",
          "0 0px 25px rgba(255, 255,0, 0.2)"
        ]
      },
      textColor : {
        chocolate : "#5e2d21",
        navy : "#161821"
      },
      borderColor : {
        chocolate : "#5e2d21",
        navy : "#161821"
      },
      backgroundColor : {
        chocolate : "#5e2d21",
        navy : "#161821"
      }
    },
  },
  plugins: [],
};
export default config;
