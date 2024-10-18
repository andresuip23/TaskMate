/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {   
    extend: {
      colors:{
        pink:{
          light:'#F9F5F6',
          medium:'#F8E8EE',
          semiheavy:'#FDCEDF',
          heavy:'#F2BED1',
        }
  
      },
    },
  },
  plugins: [],
}
