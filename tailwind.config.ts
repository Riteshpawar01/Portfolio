import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hobroBlack: "#050505",
        hobroPink: "#FF2BBF",
        paper: "#F4F2EC",
        soft: "#E9E6DC",
        ink: "#10110E",
        muted: "#6F7069",
        lime: "#92D957",
        cream: "#F4F2EC",
        red: "#92D957",
        yellow: "#D8EBC3",
        green: "#274633",
        primary: "#10110E",
        secondary: "#92D957",
        accent: "#274633",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
        mono: ["Cascadia Code", "Consolas", "monospace"],
      },
      boxShadow: {
        hard: "0 18px 50px rgba(16, 17, 14, 0.08)",
        "hard-xl": "0 28px 80px rgba(16, 17, 14, 0.10)",
        red: "0 22px 70px rgba(16, 17, 14, 0.12)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        scan: "scan 4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
