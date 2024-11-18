/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
        segoe: ['Segoe UI', 'sans-serif'],
        museo: ['Museo Sans Rounded', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

