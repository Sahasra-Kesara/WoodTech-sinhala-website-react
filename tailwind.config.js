/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        maname: ['"Maname"', 'serif'], // Define the font family
      },
    },
  },
  plugins: [],
}

