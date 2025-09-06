/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        omniGreen: {
          200: '#66FF66',
          300: '#4DFF4D',
          400: '#33FF33',
          500: '#00FF00',
          600: '#00CC00',
        },
        omniBlack: {
          700: '#2A2A2A',
          800: '#1A1A1A',
          900: '#121212',
          950: '#0A0A0A',
        },
        omniSilver: {
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'audiowide': ['Audiowide', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}


