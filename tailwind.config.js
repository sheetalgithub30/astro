/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero' : "url('./assets/Hero.png')",
        'btm' :"url('./assets/bottom.png')",
      },
      fontFamily:{
        "Sora":'Sora',
      }
    },
  },
  plugins: [],
}

