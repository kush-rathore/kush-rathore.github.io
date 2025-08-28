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
          400: '#33FF33',
          500: '#00FF00',
          600: '#00CC00',
        },
        omniBlack: {
          700: '#2A2A2A',
          800: '#1A1A1A',
          900: '#121212',
          950: '#0A0A0A',
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'audiowide': ['Audiowide', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


