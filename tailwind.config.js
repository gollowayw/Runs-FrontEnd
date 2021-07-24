module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myMetal: "#2B303A",
        myGray: "#7C7C7C",
        myOrange: "#FF934F",
        myBrown: "#F2A359",
        myWhite: "#FFFFFF",
        myTableRow: "#2B303A",
        myTableHeader: "#2B303A",
        myTableText: "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
