// const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Pt: ['PT Mono', 'monospace'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
