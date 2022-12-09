/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        pastel1: "#809bce",
        pastel2: "#95b8d1",
        pastel3: "#b8e0d2",
        pastel4: "#d6eadf",
        pastel5: "#eac4d5",
      },
    },
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      display: ["Author-Medium", "ui-sans-serif", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};
