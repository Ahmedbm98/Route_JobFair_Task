/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "728px",
          lg: "1000px",
          xl: "1100px"
        }
      },
      colors: {
        maincolor: "#0BAF9A",
        secondColor: "#3fcc3f",
        whiteColor: "#f3f3f3ee"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
