/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'main-color' : '#1ABC9C'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

