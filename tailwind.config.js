/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: "1024px",
      lg: "750px",
      md: "600px",
      sm: "480px",
    },
    extend: {
      aspectRatio: {
        "1/1.2": "1/1.2",
      },
    },
  },
  plugins: [],
};
