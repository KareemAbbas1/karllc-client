/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#fafafa",
        "blue": "#1869FE",
        "dark": "#0C1118",
      },
      screens: {
        'xmd': '1280px',
        'lmd':'1366px',
        'large': '1680px',
        'midLarge': '1440px',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}