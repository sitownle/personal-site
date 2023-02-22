/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        fill: "fill 5s infinite"
      },
      keyframes: {
        fill: {
          "0%": { width: "0%" },
          "33%": { width: "20%" },
          "50%": { width: "40%" },
          "66%": { width: "60%" },
          "80%": { width: "75%" },
          "100%": { width: "80%" }
        }
      }
    }
  },
  plugins: []
};
