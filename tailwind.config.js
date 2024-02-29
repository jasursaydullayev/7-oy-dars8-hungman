import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontFamily: {
    //   'main': ['Mouse Memoirs', "sans-serif"],
    // },
    extend: {
      strokeWidth: {
        '2': '8px',
      }
    },
    backgroundImage: {
      'main-bg': "url('./src/img/cite-bg-img.png')"
    },
  },
  plugins: [daisyui],
};
