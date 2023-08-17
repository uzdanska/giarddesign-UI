/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black-100": "#111111",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "white-200": "#f5f0eC",
        "beige": "#fed7aa", 
        "green": "#1B5B31",
      },
      screens: {
        xs: "450px",
      },
      fontFamily :{
        inter: ["inter","sans"],
        montserrat: ["moonserrat", "sans"]
      }
    },
  },
  plugins: [],
}

