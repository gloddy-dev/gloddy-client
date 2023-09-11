const {
  colors,
  boxShadow,
  pxToRemTailwind,
  keyframes,
  animation,
  fontSize,
} = require('./src/style/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...pxToRemTailwind,
      colors,
      boxShadow,
      keyframes,
      animation,
      fontSize,
      zIndex: {
        modal: '10000000',
      },
    },
  },
};
