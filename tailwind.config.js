/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'customMd': '938px',
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        light: {
          bg: '#FFFFFF',
          card: '#F9FAFB',
          text: '#111827',
          'text-secondary': '#4B5563',
        },
        dark: {
          bg: '#111827',
          card: '#1F2937',
          text: '#F9FAFB',
          'text-secondary': '#D1D5DB',
        },
        pink: {
          500: '#ec4899',
        },
        purple: {
          500: '#a855f7',
        },
        red: {
          500: '#ef4444',
        },
        'react-blue': '#61DAFB',
        'nodejs-green': '#68A063',
        'angular-red': '#DD0031',
        'vuejs-green': '#42B883',
        'python-blue': '#3776AB',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'shine': 'shine 3s linear infinite',
        'rotate-360': 'rotate360 20s linear infinite',
        'move-circle-1': 'moveCircle1 8s linear infinite',
        'move-circle-2': 'moveCircle2 8s linear infinite',
        'move-circle-3': 'moveCircle3 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveCircle1: {
          '0%': { transform: 'rotate(0deg) translateY(-150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateY(-150px) rotate(-360deg)' },
        },
        moveCircle2: {
          '0%': { transform: 'rotate(120deg) translateY(-150px) rotate(-120deg)' },
          '100%': { transform: 'rotate(480deg) translateY(-150px) rotate(-480deg)' },
        },
        moveCircle3: {
          '0%': { transform: 'rotate(240deg) translateY(-150px) rotate(-240deg)' },
          '100%': { transform: 'rotate(600deg) translateY(-150px) rotate(-600deg)' },
        },
      },
    },
  },
  plugins: [],
} 