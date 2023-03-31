/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,tsx,jsx}"
  ],
  theme: {
    fontFamily:{
    'Radnika':['Radnika'],
    },
    extend: {
      animation: {
        'typing': 'typing 5s steps(30), blink .5s step-end alternate',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        }
      }
    },
  },
  plugins: [],
}

