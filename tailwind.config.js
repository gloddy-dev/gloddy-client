const { colors, boxShadow, pxToRemTailwind, animations, fontSizes } = require('./src/style/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...pxToRemTailwind,
      colors,
      boxShadow,
      keyframes: animations,
      animation: {
        sizeUpAndDown1: 'sizeUpAndDown 2s ease infinite ',
        sizeUpAndDown2: 'sizeUpAndDown 2s 0.25s ease infinite ',
        sizeUpAndDown3: 'sizeUpAndDown 2s 0.5s ease infinite ',
        sizeUpAndDown: 'sizeUpAndDown 2s 0.75s ease infinite ',
      },
      zIndex: {
        modal: '10000000',
      },
    },
    fontSize: fontSizes,
  },
};
