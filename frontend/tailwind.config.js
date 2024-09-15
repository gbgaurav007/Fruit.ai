/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
      },
      fontWeight: {
        "extra-light": 200,
        light: 300,
        normal: 400,
        medium: 500,
        "semi-bold": 600,
        bold: 700,
        "extra-bold": 800,
      },
      colors: {
        "custom-blue-1": "#3D52A0",
        "custom-blue-2": "#c2caff",
        "custom-blue-3": "#8697C4",
        "custom-blue-4": "#ADBBDA",
        "custom-blue-5": "#EDE8F5",
      },
    },
  },
  plugins: [],
};
