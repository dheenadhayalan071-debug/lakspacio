import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0a0a0a",
          yellow: "#eab308", 
          red: "#dc2626"     
        }
      }
    },
  },
  plugins: [],
};
export default config;

