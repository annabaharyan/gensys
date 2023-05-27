/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#3F8CFF",
      darkBlue: "#00003C",
      activeBlue: "#0066FF",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
      ["2xl"]: "1540px",
      ["3xl"]: "1920px",
    },
    extend: {
      padding: {
        "120px": "120px",
      },
      margin: {
        "120px": "120px",
      },
      maxWidth: {
        "1200px": "1200px",
        "948px": "948px",
        "588px": "588px",
      },
      width: {
        "588px": "588px",
        "466px": "466px",
        "296px": "296px",
        "282px": "282px",
        "167px": "167px",
      },
      height: {
        "576px": "576px",
        "456px": "456px",
        "200px": "200px",
      },
      minHeight: {
        "576px": "576px",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)"],
        raleway: ["var(--font-raleway)"],
      },
      fontSize: {
        "56px": "56px",
        "80px": "80px",
      },
    },
  },
  plugins: [],
};
