/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '250': '1000px',
        // '75': '500px'
      },
      height: {
        // '75':'300px'
      }
    },
  },
  plugins: [],
}