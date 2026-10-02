/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        civic: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a8f6',
          500: '#0e8ce4',
          600: '#026fc3',
          700: '#03589e',
          800: '#074a82',
          900: '#0a3f6d',
          950: '#062848',
        },
        andhra: {
          navy: '#0A2540',
          deep: '#061727',
          teal: '#0F766E',
          gold: '#D97706',
          saffron: '#EA580C',
          slate: '#F8FAFC',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'civic': '0 4px 20px -2px rgba(10, 37, 64, 0.08), 0 2px 6px -1px rgba(10, 37, 64, 0.04)',
        'civic-lg': '0 12px 32px -4px rgba(10, 37, 64, 0.12), 0 4px 12px -2px rgba(10, 37, 64, 0.06)',
        'civic-gold': '0 8px 24px -4px rgba(217, 119, 6, 0.25)',
      }
    },
  },
  plugins: [],
}
