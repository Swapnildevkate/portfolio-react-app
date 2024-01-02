/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    
    extend: {
      colors: {
        'cream': '#f7f0ea',
      },
    },
    fontFamily:{
      signature:["Great Vibes"],
      ubuntu:['Ubuntu'],
    }
  },
  plugins: [],
}