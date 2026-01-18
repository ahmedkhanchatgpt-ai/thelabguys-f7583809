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
        "button-glow": {
          "0%, 100%": { boxShadow: "0 0 20px 0 hsl(270 95% 65% / 0.4), 0 0 40px 0 hsl(340 95% 60% / 0.2)" },
          "50%": { boxShadow: "0 0 40px 5px hsl(270 95% 65% / 0.6), 0 0 80px 10px hsl(340 95% 60% / 0.4)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        "accordion-up": "accordion-up 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
        "float": "float 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "pulse-slow": "pulse-slow 5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "spin-slow": "spin-slow 25s linear infinite",
        "bounce-soft": "bounce-soft 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "wiggle": "wiggle 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "pulse-glow": "pulse-glow 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "icon-dance": "icon-dance 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "twinkle": "twinkle 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "zap": "zap 0.4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "shield-pulse": "shield-pulse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "chart-rise": "chart-rise 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "palette-spin": "palette-spin 10s linear infinite",
        "brain-think": "brain-think 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "button-glow": "button-glow 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "shimmer": "shimmer 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
