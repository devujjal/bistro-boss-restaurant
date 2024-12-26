/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'},
    },
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

