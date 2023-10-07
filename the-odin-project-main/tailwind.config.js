module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      cursor: ["hover", "focus"],
      ringColor: ["hover", "active"],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }), // import tailwind forms
  ],
};
