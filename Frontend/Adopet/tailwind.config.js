/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-size': '40px',
      },
      colors: {
        'custom-purple': '#7F265B',
      },
    },
  },
  plugins: [],
}

