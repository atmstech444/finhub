/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "480px",
      smallTablet: "576px",
      tablet: "770px",
      bigTablet: "992px",
      desktop: "1200px",
    },
    colors: {
      black: "#000",
      white: "#fff",
      gray: "#eee",
      red: "#CC0000",
      darkGray: "#888",
      menuColor: "#212529",
      borderGray: "#CDCDCD",
      dark: "#343a40",
      blue: "#001D3D",
      green: "#089981",
    },
  },
  plugins: [],
};
