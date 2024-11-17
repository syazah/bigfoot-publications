/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: "Cormorant Garamond",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      colors: {
        primary: "#f7f7f7",
        primaryDark: "#f5dc21",
        secondary: "#0c356a",
        tertiary: "#1e71dd",
        dark: "#080704",
      },
    },
  },
  plugins: [],
};
