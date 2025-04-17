/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F6BE00", // Gold
        secondary: "#C8102E", // Red
        contrast: "#0033A0", // Blue
        neutral: "#101820", // Black
        white: "#FFFFFF", // White
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
