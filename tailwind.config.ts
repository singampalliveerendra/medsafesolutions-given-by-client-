import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f5fc",
          100: "#d9e9ff",
          200: "#b9d4f5",
          300: "#8db5e8",
          400: "#4a87cf",
          500: "#1f6cba",
          600: "#165aa7",
          700: "#0f427e",
          800: "#0a315f",
          900: "#061f3f",
          950: "#04132a"
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#ffd35a",
          400: "#ffc629",
          500: "#f4b400",
          600: "#d99700",
          700: "#b27800"
        },
        cream: {
          50: "#fdfaf3",
          100: "#f9f3e6",
          200: "#f0e6cf"
        },
        signal: "#d92332",
        whatsapp: "#25d366"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem"
      },
      boxShadow: {
        xs: "0 1px 2px rgba(6, 31, 63, 0.06)",
        sm: "0 4px 12px rgba(6, 31, 63, 0.06)",
        md: "0 10px 24px rgba(6, 31, 63, 0.08)",
        lg: "0 18px 40px rgba(6, 31, 63, 0.10)",
        xl: "0 28px 60px rgba(6, 31, 63, 0.12)",
        premium: "0 24px 70px rgba(6, 31, 63, 0.16)",
        soft: "0 14px 40px rgba(6, 31, 63, 0.10)"
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease both",
        "float-soft": "floatSoft 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 80s linear infinite",
        skeleton: "skeleton 1.4s ease-in-out infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        },
        skeleton: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
