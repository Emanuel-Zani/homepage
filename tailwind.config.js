/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f4faf9",
          text: "#121c19",
          link: "#1d4ed8",
          accent: "#12bf88",
          primary: "#24755b",
          secondary: "#7ee7c7",
        },
        dark: {
          background: "#050a0a",
          text: "#e3edea",
          link: "#4f83cc",
          accent: "#40edb6",
          primary: "#8adbc1",
          secondary: "#188162",
        },
      },
    },
  },
  plugins: [],
};
