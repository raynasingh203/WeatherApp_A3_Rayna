/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

         "./node_modules/flowbite/**/*.js",
  ],
  theme: { 
    fontFamily: {
    
      notable: ["notable"],
      pixelsans: ["pixelsans"],
      orbitron: ["orbitron"], 
      orbitron1: ["orbitron1"], 

    },
    extend: {
      colors:
      {
        pinkSoft: '#EDC7B7',
        wheat: '#EEE2DC',
        gray: '#BAB2B5',
        blue: '#BADFE7',
        blue2: '#697184',
        pink: '#D8CFD0',
        bg: '#B1A6A4',
        bgDark: '#413F3D',
        blueg: '#BEE3FF',
        blue0: '#37B3FF',
        blue3: '#76CAFF',
        blue4: '#98D6FF',
        neon1: '#90F21B',
        neon2: '#B3F464',
        neon3: '#D5F6AE',
      },
    },
  },
  plugins: [ require('daisyui'),
    require('flowbite/plugin')],

}

