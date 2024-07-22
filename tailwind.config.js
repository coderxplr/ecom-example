/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
      },
      colors: {
        gold: {
          700: '#C5A467',
        },
        black: '#000000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
