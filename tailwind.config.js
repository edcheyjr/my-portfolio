/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // media or class
  theme: {
    extend: {
      colors: {
        primary: '#F7ABBA',
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
