const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      ...colors
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
