/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "innov8DarkGreen":"#172518"
      },
      keyframes: {
        selector: {
          '0%': { left: "25%" },
          '100%': { left: "75%" },
        }
      },
      animation: {
        'selector': 'selector 200ms linear forwards',
      } 
    },
  },
  plugins: [],
}
