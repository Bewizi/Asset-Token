/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Euclid: ['Euclid', 'sans-serif'],
        GoldWest: ['GoldWest', 'serif']
      },
      colors: {
        OxfordBlue: '#082552',
        RichBlack: {
          primary: '#010813',
          secondary: '#010813CC'
        },
        BlueRibbon: '#3A76F5',
        ColumbiaBlue: '#D7ECFC',
        Sunglow: '#FFCB35',
        Glaucous: '#6C82A3',
        AliceBlue: '#EBF1FE'
      }
    }
  },
  plugins: []
}
