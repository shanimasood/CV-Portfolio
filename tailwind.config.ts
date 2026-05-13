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
          // Light-mode mocha scale — 50 = darkest mocha (text), 900 = bone cream (bg)
          50: '#1c130c',
          100: '#2a1f17',
          200: '#4a392b',
          300: '#6f5c4a',
          400: '#917c66',
          500: '#b3a087',
          600: '#cdbfa6',
          700: '#dfd3bd',
          800: '#ebe1cd',
          900: '#f3ede0',
        },
        flame: {
          // Olive accent — flame-* class names preserved
          50: '#f4f2dc',
          100: '#e6e2b0',
          200: '#cfc77a',
          300: '#a8a04e',
          400: '#7c7637',
          500: '#5f6429',
          600: '#4a4f1f',
          700: '#373b18',
          800: '#272911',
          900: '#1a1c0a',
        },
        glass: {
          DEFAULT: 'rgba(42, 31, 23, 0.04)',
          strong: 'rgba(42, 31, 23, 0.07)',
          border: 'rgba(42, 31, 23, 0.12)',
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
