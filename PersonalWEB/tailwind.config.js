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
        'typing': 'typing 5s steps(30,end), blink .5s step-end alternate',
      },
      keyframes: {
        typing: {
          'from': { width: '100%' },
          'to': { width: '0' },
        }
      }
    },
  },
  plugins: [],
}

