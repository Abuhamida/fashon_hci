import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#ff4400',
        'secondary': '#717275',
        'accent': '#f0f8ff',
        'white_gray':'#d0d1d1'
      },
    },
  },
  plugins: [require("daisyui"),],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
export default config;
