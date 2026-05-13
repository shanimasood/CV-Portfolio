import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f6f5f1',
          100: '#e8e4d8',
          200: '#c4bdab',
          300: '#9c9482',
          400: '#6e6757',
          500: '#403c34',
          600: '#2a2724',
          700: '#1a1816',
          800: '#0e0d0c',
          900: '#070605',
        },
        flame: {
          // Brass / amber accent — flame-* class names preserved
          50: '#fbf6e6',
          100: '#f6e8bf',
          200: '#ecd483',
          300: '#e0bf57',
          400: '#d4aa3c',
          500: '#b88c2a',
          600: '#946d1f',
          700: '#6f5217',
          800: '#4d3a13',
          900: '#2e220c',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.04)',
          strong: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        glow: 'glow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        glow: '0 0 60px -10px rgba(95, 100, 41, 0.30)',
        'glow-lg': '0 0 100px -10px rgba(95, 100, 41, 0.40)',
        'inner-glow': 'inset 0 1px 0 0 rgba(42, 31, 23, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
