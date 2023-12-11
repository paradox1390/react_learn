/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
    },
    extend: {
      maxWidth: {
        150: "150px",
      },
    },
  },
  plugins: [],
};
