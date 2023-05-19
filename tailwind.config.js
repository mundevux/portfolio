/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2C3E50",
        "secondary": "#E74C3C",
        "tertiary": "#ECF0F1",
        "quaternary": "#3498DB",
        "quinary": "#2980B9",
      }
    },
  },
  plugins: [],
}