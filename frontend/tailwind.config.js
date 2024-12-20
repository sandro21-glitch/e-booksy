/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightGray: "#e0e0e0",
        mediumGray: "#d4d4d4",
        darkGray: "#a4a4a4",
        heroBg: "rgb(250 247 242 / 100%);",
        primaryPink: "#F4226A",
        lightPink: "#fde",
        darkYellow: "#F5A525",
        darkBrown: "#231E1A",
        shadeGray: "#18181B",
      },
    },
  },
  plugins: [require("daisyui")],
};
