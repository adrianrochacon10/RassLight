/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nosotros: '#26ADE4',
        infoms: '#D1E751'
      },
    },
  },
  plugins: [],
}

