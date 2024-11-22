/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pt_san: ['PT Sans', "sans-serif"],
        pop: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: '#27272A',
        secondary: '#3F3F46',
        txtFav: '#7AB2D3'
      }
    },
  },
  plugins: [],
}

