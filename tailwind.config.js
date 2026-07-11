/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          vanilla: '#FDF1E7',
          strawberry: '#Ffb8b8',
          chocolate: '#6E4B3A',
          caramel: '#D98F4F',
          dark: '#3A2820'
        }
      }
    },
  },
  plugins: [],
}

