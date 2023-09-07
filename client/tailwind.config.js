/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        tour: "url('./src/assets/tours/tour-1-cover.jpg')",
      },
      fontFamily: {
        shadows: ['Shadows Into Light', 'cursive'],
      },
    },
  },
  plugins: [],
};
