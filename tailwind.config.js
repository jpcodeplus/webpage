/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f3f7fc',
          '100': '#e6eff8',
          '200': '#c7dcf0',
          '300': '#96bfe3',
          '400': '#5e9ed2',
          '500': '#3b86c3',
          '600': '#2968a0',
          '700': '#225382',
          '800': '#20476c',
          '900': '#1f3d5b',
          '950': '#15273c'
      }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}