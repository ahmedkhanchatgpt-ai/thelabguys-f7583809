import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        neon: {
          cyan: "hsl(180 100% 50%)",
          purple: "hsl(270 100% 60%)",
          pink: "hsl(340 100% 60%)",
          amber: "hsl(40 100% 50%)",
          green: "hsl(150 100% 50%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 60px -10px hsl(var(--accent) / 0.5)",
        "glow-sm": "0 0 30px -5px hsl(var(--accent) / 0.4)",
        neon: "0 0 5px currentColor, 0 0 20px currentColor, 0 0 40px currentColor",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "25%": { transform: "translateY(-8px) scale(1.05)" },
          "50%": { transform: "translateY(0) scale(1)" },
          "75%": { transform: "translateY(4px) scale(0.98)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-8px) scale(1.05)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px 0 currentColor", opacity: "1" },
          "50%": { boxShadow: "0 0 40px 10px currentColor", opacity: "0.8" },
        },
        "icon-dance": {
          "0%": { transform: "translateY(0) rotate(0deg) scale(1)" },
          "20%": { transform: "translateY(-10px) rotate(5deg) scale(1.1)" },
          "40%": { transform: "translateY(-5px) rotate(-3deg) scale(1.05)" },
          "60%": { transform: "translateY(-12px) rotate(3deg) scale(1.08)" },
          "80%": { transform: "translateY(-3px) rotate(-2deg) scale(1.02)" },
          "100%": { transform: "translateY(0) rotate(0deg) scale(1)" },
        },
        "twinkle": {
          "0%, 100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
          "50%": { transform: "scale(1.15) rotate(15deg)", opacity: "0.8" },
        },
        "zap": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
        },
        "shield-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
        "chart-rise": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "palette-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "brain-think": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "25%": { transform: "scale(1.05)", opacity: "0.9" },
          "50%": { transform: "scale(1)", opacity: "1" },
          "75%": { transform: "scale(1.05)", opacity: "0.9" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "icon-dance": "icon-dance 3s ease-in-out infinite",
        "twinkle": "twinkle 2s ease-in-out infinite",
        "zap": "zap 0.3s ease-in-out infinite",
        "shield-pulse": "shield-pulse 2.5s ease-in-out infinite",
        "chart-rise": "chart-rise 1.5s ease-in-out infinite",
        "palette-spin": "palette-spin 8s linear infinite",
        "brain-think": "brain-think 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
