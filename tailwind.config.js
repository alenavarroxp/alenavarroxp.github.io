/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,tsx,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
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
  plugins: [
    require("daisyui"),
    require("flowbite/plugin")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

