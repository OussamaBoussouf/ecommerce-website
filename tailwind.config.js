/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // height:{
      //   "hero-height": calc(100)
      // },
      fontFamily: {
        poppins: 'Poppins, sans-serif', // Adds a new `font-display` class
        "poppins-bold": 'Poppins-bold, sans-serif', // Adds a new `font-display` class
        "poppins-light": 'Poppins-light, sans-serif', // Adds a new `font-display` class
      }
    },
  },
  plugins: [],
}