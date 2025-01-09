/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 5s',
        'bounce-middle': 'bounce 3s',
        'bounce-fast': 'bounce 1s',
      },
    },
  },
  plugins: [],
};
