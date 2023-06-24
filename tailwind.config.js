/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        lineShadow:
          '0 3.4px 3.4px rgba(0 0 0 / 0.06), inset 0 -1.7px 3.4px #AE7BE3, inset 0 3.4px 2.5px #FBF8FF',
        userShadow:
          '0px 4.4px 4.4px rgba(0 0 0 / 0.06), inset 0px -2.2px 4.4px #AE7BE3, inset 0px 4.4px 3.3px #FBF8FF',
        btnShadow: '0px 3.43693px 3.43693px rgba(0 0 0 / 0.25)',
      },
      backgroundImage: {
        'blue-gradient':
          'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
        'arrow-down': "url('./src/assets/images/arrow-down.svg')",
        picture: "url('./src/assets/images/picture.webp')",
      },
      backgroundPosition: {
        'top-2': 'center top 0.5rem',
      },
      backgroundSize: {
        custom: '308px, 168px',
      },
      fontFamily: {
        sans: ['Montserrat Medium', ...defaultTheme.fontFamily.sans],
        semibold: ['Montserrat SemiBold'],
      },
      colors: {
        white: '#EBD8FF',
        whiteHover: '#d3c2e5',
        black: '#373737',
        green: '#5CD3A8',
        greenHover: '#8ce0c2',
        blue: '#471CA9',
      },
    },
  },
  plugins: [],
};
