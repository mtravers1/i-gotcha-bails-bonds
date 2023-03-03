/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#295ee3',
        complimentary: '#E3AF2A',
        mono: '#1948C1',
        'primary-sharp': '#2ABBE3',
        'black-0.4': 'rgba(0, 0, 0, 0.4)',
        'white-0.6': 'rgba(255, 255, 255, 0.6)',
        'footer-pink': '#f86c57',
        blue: '#295ee3',
        txt: '#333',
      },
      maxWidth: {
        '1/4': '25%',
        '1/5': '20%',
        '3/10': '30%',
        '1/3': '33.33333333%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '7/10': '70%',
        '3/4': '75%',
        '4/5': '80%',
        vs: '12em',
        screen: '100vw',
      },
      borderRadius: {
        '1/2': '50%',
        8: '40px',
      },
    },
  },
  plugins: [],
};
