/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "cinzel": ['"Cinzel", serif'],
      "inter": ['"Inter", serif']
    },
    letterSpacing: {
      veryTighter: '0.45rem'
    }

  },
  plugins: [],
}

