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
      },
      borderRadius: {
        '1/2': '50%',
        8: '40px',
      },
    },
  },
  plugins: [],
};
