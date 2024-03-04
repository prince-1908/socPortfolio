/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'tablet': { 'max': '1370px' },
        'phone': { 'max': '770px' },
      },
      colors: {
        'red': '#ED0C32',
        'white': 'white',
        'black': 'black',
        'transparent': 'transparent'
      }
    },
  },
  plugins: [],
}

