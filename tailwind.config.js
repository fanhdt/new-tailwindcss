/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
        Inter: ["inter"],
      },
      colors: {
        pink: "##f85e9f",
        orange: "#ff5722",
        ungu: "#5d50c6",
        abu: "#222831",
      },
    },
  },
  plugins: [],
};
