/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      veryDarkBlue: "hsl(233, 47%, 7%)",
      darkBlue: "hsl(244, 38%, 16%)",
      softViolet: "hsl(277, 64%, 61%)",
      white: "hsl(0, 0%, 100%)",
      whiteTransparentMainP: "hsla(0, 0%, 100%, 0.75)",
      whiteTrasnparentStats: "hsla(0, 0%, 100%, 0.6)",
    },
    fontFamily: {
      inter: ["Inter"],
      lexand: ["Lexend Deca"],
    },
  },
  plugins: [],
};
