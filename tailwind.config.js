/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      blue: "#3F8CFF",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "930px",
      xl: "1280px",
      ["2xl"]: "1540px",
      ["3xl"]: "1920px",
    },
  },
  extend: {
    padding: {
      "120px": "120px",
    },
  },
  plugins: [],
};
