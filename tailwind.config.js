const { colors } = require('./style/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: { colors },
  },
  // plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
}

