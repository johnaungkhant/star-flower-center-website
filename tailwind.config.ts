import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "star-blue": "#2B82C8",
        "star-green": "#7CB342",
        "star-red": "#E53935",
        "star-yellow": "#FBC02D",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(43, 130, 200, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
