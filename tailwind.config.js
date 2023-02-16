/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        textPrimary : "#262524",
        bgColor : "#264373"
      },
      screens : {
        "xs" : "300px"
      },
      fontFamily : {
        "sgr" : ["SportingGrotesqueRegular"],
        "sgb" : ["SportingGrotesqueBold"],
        "popins" : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}