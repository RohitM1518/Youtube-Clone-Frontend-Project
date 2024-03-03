/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'custom-gray-1':'#0f0f0f',
        'custom-gray-2':'#222222',
      }
    },
  },
  plugins: [],
}

