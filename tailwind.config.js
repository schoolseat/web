const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'slateblue': '#6B63DD',
      'mediumseagreen': '#04c35c'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'lavander': '#e8e8e8',
      'thin': 'hsla(0, 0%, 100%, 0.06)'
    }),
    zIndex: {
      '1': 1
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  darkMode: false, // or 'media' or 'class'
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './public/index.html',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
