const { createPortal } = require('react-dom')
const { white } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.purple,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      purple: colors.purple,
      pink: colors.pink,
      white: white
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
