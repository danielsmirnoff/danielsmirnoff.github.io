/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#2C3930',
        'medium-green': '#3F4F44',
        'brown-tan': '#A27B5C',
        'light-beige': '#DCD7C9',
      },
    },
  },
  plugins: [],
}

