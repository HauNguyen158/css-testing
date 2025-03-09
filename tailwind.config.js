/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk, sans-serif"],
        "big-shoulders": ["Big Shoulders Text, sans-serif"],
        'big-shoulders-display': ['"Big Shoulders Display"', 'sans-serif'],
      },
      skew: {
        '-25': '-25deg',
      },
    },
  },
  plugins: [

    function ({ addUtilities }) {
      addUtilities({
        '.text-box-trim-both': {
          'text-box-trim': 'trim-both',
        },
      });
    }
  ],
};

