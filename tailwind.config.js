/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
        josefin: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        sm: '0 0px 2px rgba(0, 0, 0, 0.50)',
        DEFAULT: '0 0px 3px rgba(0, 0, 0, 0.50)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.50)',
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        'white-100': '#FBFDFF',
        gray: '#2E353E',
        'gray-400': '#72859A',
        blue: '#145CA8',
        'blue-300': '#5AA1EC',
        'blue-200': '#98C4F2',
        'blue-100': '#B5D4F6',
        yellow: '#F9DB6D',
        'yellow-100': '#FDEAB6',
      },
      screens: {
        sm: '768px',
        md: '991px',
        lg: '1024px',
        xl: '1250px',
        xxl: '1400px',
      },
      fontSize: {
        xs: '12px',
        base: '14px',
        sm: '16px',
        md: '20px',
        lg: '24px',
        xl: '40px',
      },
      height: {
        'screen-header': 'calc(100vh - 80px)',
      },
      container: {
        center: true,
        padding: '15px',
        screens: {
          sm: '640px',
          md: '991px',
          lg: '1024px',
          xl: '1250px',
        },
      },
      lineHeight: {
        none: 1,
        tight: 1.25,
        normal: 1.5,
        loose: 2,
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
