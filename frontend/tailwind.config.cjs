/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        passage: ["Ephesis", "cursive"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",
          secondary: "#111827",
          accent: "#713f12",
          neutral: "#d1d5db",
          "base-100": "#FFFFFF",
          info: "#0ea5e9",
          success: "#4d7c0f",
          warning: "#eab308",
          error: "#b91c1c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
