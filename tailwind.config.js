/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "light-green": "#07a795",
        "light-blue": "#6ccdc2",
        
      },
      colors:{
        "dark-blue": "#19302e"
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif', // Adds a new `font-display` class
        "poppins-bold": 'Poppins-bold, sans-serif', // Adds a new `font-display` class
        "poppins-light": 'Poppins-light, sans-serif', // Adds a new `font-display` class
      }
    },
  },
  plugins: [],
}