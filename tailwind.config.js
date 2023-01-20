/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primaryHeavy: ['Linotte-Black'],
        primaryBold: ['Linotte-Bold'],
        primaryLight: ['Linotte-Light'],
        primaryRegular: ['Linotte-Regular'],
        primarySemibold: ['Linotte-SemiBold'],

        secondaryHeavy: ['Spartan-ExtraBold'],
        secondaryBold: ['Spartan-Bold'],
        secondaryLight: ['Spartan-Light'],
        secondaryRegular: ['Spartan-Regular'],
        secondarySemibold: ['Spartan-SemiBold'],
      },
    },
  },
  plugins: [],
}
