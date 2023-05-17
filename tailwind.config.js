/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    maxWidth: {
      100: "1920px",
    },
    padding: {
      "120px": "120px",
    },
    theme: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        blue: "#3F8CFF",
      },
    },
  },
};
export const plugins = [];
