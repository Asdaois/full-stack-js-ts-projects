const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      display: 'Inter var'
    },
    extend: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
}
