/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-red": "#e50914",
      "primary-black": "#141010",
      "primary-white": "#f8f3e6",
      "primary-gray": "#3b3b3b",
      "seconday-gray": "#525252",
      "seconday-red": "#b81d24",
    },
    fontFamily: {
      bebas: ["Bebas Neue"] /*Titulos*/,
      raleway: ["Raleway"] /*SubTitulos*/,
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
