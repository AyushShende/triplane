/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('./src/assets/bgfooter.jpg')",
        tour: "url('./src/assets/tours/tour-1-cover.jpg')",
      },
      fontFamily: {
        shadows: ['Shadows Into Light', 'cursive'],
      },
    },
  },
  plugins: [],
};
