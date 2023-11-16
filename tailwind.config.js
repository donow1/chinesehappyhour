/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome': "url('/public/welcome.png')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'culpa': ['"Mea Culpa"', 'cursive'],
        "third": ["Agbalumo"]
      },
    },
  },
  plugins: [],
}

