/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        fill: "fill 5s linear infinite"
      },
      keyframes: {
        fill: {
          "0%": { transform: "scaleX(1)" },
          "33%": { transform: "scaleX(1.5)" },
          "50%": { transform: "scaleX(2)" },
          "66%": { transform: "scaleX(0.5)" },
          "80%": { transform: "scaleX(1.5)" },
          "100%": { transform: "scaleX(1)" }
        }
      }
    }
  },
  plugins: []
};
