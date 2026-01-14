/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige-light': '#f7f2ed',
        'beige-medium': '#e8d8c9',
        'beige-dark': '#d9bda5',
        'brown-light': '#caa381',
        'brown-medium': '#a16f44',
        'brown-dark': '#5a3e26',
        'brown-darker': '#362517',
        'gray-light': '#e5e2de',
        'gray-medium': '#b2b0ad',
        'gray-dark': '#4d4b4a',
        'green-success': '#295120',
        'red-error': '#4d0d0d',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
