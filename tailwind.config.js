/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primaryBold: ['Quicksand-Bold'],
        primarySemibold: ['Quicksand-SemiBold'],
        primaryMedium: ['Quicksand-Medium'],
        primaryRegular: ['Quicksand-Regular'],
        primaryLight: ['Quicksand-Light'],

        secondaryBold: ['Spartan-Bold'],
        secondarySemibold: ['Spartan-SemiBold'],
        secondaryMedium: ['Spartan-Medium'],
        secondaryRegular: ['Spartan-Regular'],
        secondaryLight: ['Spartan-Light'],
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
