/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Asegura que Tailwind se aplique a tus componentes
  ],
  theme: {
    extend: {fontFamily: {
      pokemon: ['Pokemon', 'sans-serif'],
      comic: ['Comic Neue', 'sans-serif'],}},
  },
  plugins: [],
};