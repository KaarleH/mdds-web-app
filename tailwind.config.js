/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    colors: {
      "dark": "#0c013b",
      "primary": "#04118a",
      "light": "#142172",
      "danger": "#B40305",
      "secondary": "#d25866",
      "white": "#ffffff",
      "gray": "#b9b1b1"
    },
    extend: {
      height: {
        '76': '18.75rem',
      }
    },
  },
  plugins: [],
}

