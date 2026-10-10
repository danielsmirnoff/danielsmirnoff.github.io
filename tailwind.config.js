/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#000000',
        'b0': '#14213d',
        'b1': '#fca311',
        'b2': '#e5e5e5',
        'b2': '#ffffff',
      },
    },
  },
  plugins: [],
}

