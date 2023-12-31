/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#05478A",
        "light-blue": "#0070E0",
        "orange": "#FC8621",
        "gray": "#BDBDBD",
        "dark-gray": "#575759",
        "medium-gray": "#6A6F73",
        "light-gray": "#B5B5B5",
      },
      screens: {
        xsm: "380px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      boxShadow: {
        repo: "0 0 5px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
