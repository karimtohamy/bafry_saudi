/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        'main':'#f0ebd8',
        'primary':'#0d1321',
        'sec':'#3e5c76'
      }
    },
  },
  plugins: [],
}

