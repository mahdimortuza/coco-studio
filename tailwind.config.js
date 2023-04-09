/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mistyrose: {
          100: '#FCE5E3',
          200: '#F8C6C4',
          300: '#F3A8A5',
          400: '#EA6B67',
          500: '#E32E29',
          600: '#CC2A25',
          700: '#881A18',
          800: '#661310',
          900: '#440D0D',
        },
      },
    },
  },
  plugins: [],
}

