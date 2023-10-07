const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: { "3/10": "30%", "165px": "165px" },
      width: { "1/3-vw": "30vw" },
      height: { 22: "22rem/* 352px */", "95/100": "95%", "5/100": "5%" },
      transitionDuration: { 6000: "6s" },
      margin: { "6px": "6px" },
      fontFamily: { "open-condense": ['"Open Sans Condensed"', "serif"] },
      colors: {
        subColor: colors.gray,
        mainColor: colors.black,
      },
    },
  },
  plugins: [],
};
