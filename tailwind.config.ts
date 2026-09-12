import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#020617",   // Deep space blue-black
          surface: "#0f172a", // Elevated card background
          blue: "#3b82f6",    // Electric blue
          neon: "#22c55e",    // Neon green indicator
        }
      }
    },
  },
  plugins: [],
};
export default config;

