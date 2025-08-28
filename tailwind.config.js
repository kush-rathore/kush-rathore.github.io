/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        brandBlack: '#0b0f14',
        brandBlue: {
          DEFAULT: '#2563eb',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        brandGreen: {
          DEFAULT: '#10b981',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Ben 10 Theme Colors
        omniGreen: {
          50: '#f0fff4',
          100: '#dcffe4',
          200: '#bbffcc',
          300: '#86ffa3',
          400: '#4dff7a',
          500: '#00ff41', // Main neon green
          600: '#00e639',
          700: '#00cc33',
          800: '#00b32e',
          900: '#009929',
        },
        omniBlack: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617', // Deepest black
        },
        omniSilver: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'monospace'],
        audiowide: ['Audiowide', 'cursive'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
        'transform': 'transform 0.6s ease-in-out',
        'scan': 'scan 2s linear infinite',
        'energy': 'energy 1.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41' },
          '100%': { boxShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 20px #00ff41, 0 0 30px #00ff41, 0 0 40px #00ff41',
            transform: 'scale(1.05)'
          },
        },
        hologram: {
          '0%, 100%': { opacity: '0.8', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.2)' },
        },
        transform: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(180deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        energy: {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #00ff41, #00e639, #00cc33)',
            backgroundSize: '200% 200%'
          },
          '50%': { 
            background: 'linear-gradient(45deg, #00cc33, #00ff41, #00e639)',
            backgroundSize: '200% 200%'
          },
        },
      },
      backgroundImage: {
        'cosmic': 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        'hologram': 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 65, 0.1) 50%, transparent 70%)',
        'tech-grid': 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'tech-grid': '20px 20px',
      }
    },
  },
  plugins: [],
}


