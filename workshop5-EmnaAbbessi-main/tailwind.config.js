/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*"],
  theme: {
    extend: {
      colors: {
        primary: "#314584",
        secondary: "#ff3946",
        tertiary: "",
      },
      fontFamily: {
        work: ["WorkSans,SemiBold"],
      },
      fontSize: {
        navSize: "24 px",
        heroSize: "",
        pSize: "",
        titleOne: "",
      },
    },
  },

  plugins: [],
};
