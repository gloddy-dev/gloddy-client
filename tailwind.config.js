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
        slideUp: 'slideUp 0.5s ease-in-out',
      },
    },
    fontSize: fontSizes,
  },
};
