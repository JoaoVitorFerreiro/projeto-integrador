/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#146131',
          light: '#105027',
          dark: '#0c3c1d',
        },
        secondary: {
          yellow: '#FBBF24',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
