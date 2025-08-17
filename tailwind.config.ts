import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        // Professional Brutal Color System
        // Primary Colors - For main CTAs and branding
        'brutal-primary': {
          DEFAULT: '#00FF88', // Lime green for high conversion CTAs
          dark: '#00CC6A',
          light: '#33FFB0',
        },
        
        // Action Colors - For different types of actions
        'brutal-action': {
          success: '#00FF88', // Green for positive actions
          warning: '#FFB800', // Orange for attention
          danger: '#FF0033', // Red for hot/urgent
          info: '#00D4FF', // Cyan for information
        },
        
        // Semantic Colors - For UI feedback
        'brutal-red': '#FF0033',
        'brutal-lime': '#00FF88',
        'brutal-orange': '#FF6B35',
        'brutal-yellow': '#FFD700',
        'brutal-cyan': '#00FFFF',
        'brutal-blue': '#0066FF',
        'brutal-purple': '#8B00FF',
        'brutal-pink': '#FF0099',
        
        // Trust & Authority Colors
        'trust-blue': '#0066FF',
        'premium-gold': '#FFD700',
        'security-green': '#00D67A',
        
        // Background Accents - For depth and sections
        'brutal-bg': {
          light: '#FFFBF5',
          yellow: '#FFF9E6',
          green: '#E6FFF4',
          blue: '#E6F4FF',
          pink: '#FFF0F7',
          purple: '#F5E6FF',
        },
        
        // Gradient Colors for modern appeal
        'gradient': {
          'lime-start': '#00FF88',
          'lime-end': '#00CC6A',
          'fire-start': '#FF6B35',
          'fire-end': '#FF0033',
          'ocean-start': '#00D4FF',
          'ocean-end': '#0066FF',
          'sunset-start': '#FFD700',
          'sunset-end': '#FF6B35',
        },
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
        // Brutal mode (activated via class)
        'brutal-none': '0',
        'brutal-sm': '0',
        'brutal': '0',
        'brutal-md': '0',
        'brutal-lg': '0',
        'brutal-xl': '0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      animation: {
        'glitch': 'glitch 0.5s infinite',
        'epic-glitch': 'epic-glitch 0.3s infinite',
        'typing-glitch': 'typing-glitch 2s infinite',
        'matrix-rain': 'matrix-rain 1s linear infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'rgb-shift': 'rgb-shift 3s ease-in-out infinite',
        'blink': 'blink 1s infinite',
        'slide': 'slide 20s linear infinite',
        'gradient': 'gradient 3s linear infinite',
        'float': 'float 15s infinite ease-in-out',
        'shimmer': 'shimmer 2s infinite',
        'glitch-1': 'glitch-1 2s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 2s infinite linear alternate-reverse',
        'scanline': 'scanline 8s linear infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        'holographicGrid': 'holographicGrid 20s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-left': 'scroll-left 30s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-10px) translateX(20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'glitch-1': {
          '0%, 100%': { clipPath: 'inset(0 0 0 0)', transform: 'translate(0)' },
          '20%': { clipPath: 'inset(20% 0 30% 0)', transform: 'translate(-2px, 2px)' },
          '40%': { clipPath: 'inset(50% 0 20% 0)', transform: 'translate(2px, -2px)' },
          '60%': { clipPath: 'inset(10% 0 60% 0)', transform: 'translate(-1px, 1px)' },
          '80%': { clipPath: 'inset(80% 0 5% 0)', transform: 'translate(1px, -1px)' },
        },
        'glitch-2': {
          '0%, 100%': { clipPath: 'inset(0 0 0 0)', transform: 'translate(0)' },
          '20%': { clipPath: 'inset(60% 0 10% 0)', transform: 'translate(2px, -2px)' },
          '40%': { clipPath: 'inset(20% 0 40% 0)', transform: 'translate(-2px, 2px)' },
          '60%': { clipPath: 'inset(70% 0 15% 0)', transform: 'translate(1px, -1px)' },
          '80%': { clipPath: 'inset(5% 0 85% 0)', transform: 'translate(-1px, 1px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        holographicGrid: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(-50px, -50px) rotate(0.5deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
