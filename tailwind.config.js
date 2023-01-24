/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primaryHeavy: ['Comfortaa-Black'],
        primaryBold: ['Comfortaa-Bold'],
        primaryLight: ['Comfortaa-Light'],
        primaryRegular: ['Comfortaa-Regular'],
        primarySemibold: ['Comfortaa-SemiBold'],

        secondaryHeavy: ['Spartan-ExtraBold'],
        secondaryBold: ['Spartan-Bold'],
        secondaryLight: ['Spartan-Light'],
        secondaryRegular: ['Spartan-Regular'],
        secondarySemibold: ['Spartan-SemiBold'],
      },

      width: {
        poster: '27px',
      },
      height: {
        poster: '40px',
      },
      aspectRatio: {
        poster: '48 / 36',
      },
    },
  },
  plugins: [],
}
