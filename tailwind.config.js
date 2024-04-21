/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5FFEF',
          100: '#ECFFDF',
          200: '#E2FFCF',
          300: '#ECFFDF',
          400: '#CEFFAD',
          500: '#C3FF9A',
          600: '#B9FF87',
          700: '#AEFF71',
          800: '#A3FF57',
          900: '#97FE33',
          950: '#97FE33', // Same as the original color
        },
        secondary: {
          50: '#104534',
          100: '#000201',
          200: '#000503',
          300: '#010C07',
          400: '#02150E',
          500: '#041E15',
          600: '#06271C',
          700: '#093124',
          800: '#0C3B2C',
          900: '#000000', // Darkest shade
        },
        black: {
          950: '#1a1a1a'
        },
        red: {
          50: '#FFEAD4',
          100: '#FFECD8',
          200: '#FFEEDD',
          300: '#FFF0E1',
          400: '#FFF2E5',
          500: '#FFF5EA',
          600: '#FFF7EE',
          700: '#FFF9F2',
          800: '#FFFBF6',
          900: '#FFFDFB',
        },
        gray: {
          50: '#F1F2ED',
          100: '#D2D2CE',
          200: '#B3B4B0',
          300: '#959693',
          400: '#797977',
          500: '#5D5E5C',
          600: '#434342',
          700: '#2B2B2A',
          800: '#141414',
          900: '#030303',
        },
      }
    },
  },
  plugins: [],
}

