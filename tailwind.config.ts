import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef5ff",
          100: "#d9e9ff",
          600: "#165aa7",
          700: "#0f427e",
          800: "#0a315f",
          900: "#061f3f"
        },
        gold: {
          300: "#ffd35a",
          400: "#ffc629",
          500: "#f4b400"
        },
        signal: "#d92332"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(6, 31, 63, 0.14)",
        soft: "0 14px 40px rgba(6, 31, 63, 0.10)"
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease both",
        "float-soft": "floatSoft 6s ease-in-out infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
