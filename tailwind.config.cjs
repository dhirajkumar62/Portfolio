/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00F5D4',
          purple: '#7C3AED',
          indigo: '#6366F1'
        },
        surface: {
          900: '#071025',
          800: '#0b1724',
          700: '#0f2431'
        }
      },
      boxShadow: {
        'neon-sm': '0 6px 30px rgba(0,245,212,0.08)',
        'neon-md': '0 20px 60px rgba(124,58,237,0.12)',
        'glass': '0 6px 30px rgba(2,6,23,0.6)'
      }
    }
  },
  plugins: []
};
