const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkText: "#3a3a3a",
        whiteText: "#F1F1F1",
        terracota: "#B36A5E",
        gray: "#EEE2DF",
        beige: "#EED7C5",
      },
      fontFamily: {
        imprima: ["imprima", "sans serif"],
        ibarra: ["ibarra", "sans serif"],
        IBMONOPLEX: ["IBM PLEX MONO", "sans serif"],
        MrsSaintDelafield: ["Mrs Saint Delafield", "sans serif"],
      },
      backgroundImage: {
        background: "url('/assets/fondsym.jpg')",
        banniere: "url('/assets/photoHome.png')",
      },
    },
  },
  plugins: [],
};
