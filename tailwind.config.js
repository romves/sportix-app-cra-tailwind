/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors:{
      'primary-50': '#fff7ed',
      'primary-100': '#ffedd5',
      'primary-200': '#fed7aa',
      'primary-300': '#fdba74',
      'primary-400': '#fb923c',
      'primary-500': '#f97316',
      'primary-600': '#ea580c',
      'primary-700': '#c2410c',
      'primary-800': '#9a3412',
      'primary-900': '#7c2d12',

      'white': '#FAFAFA',
      'neutral-100': '#D4D4D4',
      'neutral-200': '#A3A3A3',
      'neutral-300': '#737373',
      'neutral-400': '#525252',
      'neutral-500': '#262626',
      'black': '#171717',
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
