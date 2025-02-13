/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production", // Solo purga en producción
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: ["bg-[#0e292d]"], // Asegúrate de que esta clase no se purgue
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Asegura que Tailwind se aplique a tus componentes
  ],
  mode: "jit", // Habilita el modo JIT
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {fontFamily: {
      pokemon: ['Pokemon', 'sans-serif'],
      comic: ['Comic Neue', 'sans-serif'],}},
  },
  plugins: [],
};