/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "480px",
      tablet: "768px",
      desktop: "1024px",
      bigdesktop: "1395px",
      custom1360: "1360px",
      custom1300: "1300px",
      custom1110: "1110px",
      custom1450: "1450px",
      largedesktop: "1525px",
    },
    colors: {
      black: "#000",
      white: "#fff",
    },
  },
  plugins: [],
};
