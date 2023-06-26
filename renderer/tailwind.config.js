const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // use colors only specified
        white: colors.white,
        gray: colors.gray,
        blue: colors.blue,
      },
    },
  },
  plugins: [],
};
