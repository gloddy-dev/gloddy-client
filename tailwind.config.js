const { colors, pxToRem, animations } = require('./style/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      spacing: pxToRem,
      maxWidth: pxToRem,
      maxHeight: pxToRem,
      minWidth: pxToRem,
      minHeight: pxToRem,
      fontSize: pxToRem,
      borderRadius: pxToRem,
      keyframes: animations,
      animation: {
        slideUp: 'slideUp 0.5s ease-in-out',
      },
    },
    fontWeight: {
      100: '100',
      300: '300',
      350: '350',
      400: '400',
      700: '700',
      900: '900',
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
