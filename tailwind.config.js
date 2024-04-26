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
        "transparent-black": "rgba(0, 0, 0, 0.2)"
        
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(14rem, 1fr))',
      },
      colors:{
        "dark-blue": "#19302e"
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif', // Adds a new `font-display` class
        "poppins-bold": 'Poppins-bold, sans-serif', // Adds a new `font-display` class
        "poppins-light": 'Poppins-light, sans-serif', // Adds a new `font-display` class
      },
      animation:{
        drawer: 'drawer 500ms ease-in-out',
      },
      keyframes: {
        drawer: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}