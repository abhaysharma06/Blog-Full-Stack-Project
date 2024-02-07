/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      "header-bg": "#2d3035",
      "color-white": "#ffffff",
      "color-black": "#00000",
      "main-bg": "#24262B",
      "main-gray": "#CFD8DF",
      "secondary-bg": "#1E2024",
      "hover-bg": "#2D3035",
      "main-green": "#43C111",
      "main-yellow": "#DBB42",
      "primary-green": "#1E8139",
      "secondary-green": "#088348",
      "border-color": "#9CA4AB",
    },
  },
  plugins: [require("flowbite/plugin")],
};
