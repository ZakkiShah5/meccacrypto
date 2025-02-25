/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["'DM Sans'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      colors: {
        primaryBlue: "#2979FF",
        primaryPurple: "#8E44AD",
        primaryOrange: "#FF5722",
        primaryGreen: "#4CAF50",
        magenta: {
          50: "#df2fff",
          100: "#fbe3ff",
          200: "#f8c7ff",
          300: "#f59bff",
          400: "#f060ff",
          500: "#e245ff",
          600: "#d107fb",
          700: "#ad00cc",
          800: "#9002a6",
          900: "#780887",
          950: "#51005d",
        },
        light: {
          100 : "#FCFCFD",
          200 : "#F4F5F6",
          300 : "#E6E8EC",
          400 : "#B1B5C3",
          500 : "#777E90"
        }
      },

    },
  },
  plugins: [],
};

export default config;
