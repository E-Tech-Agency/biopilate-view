/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: '#EBDCCD', // Adding custom color with the name 'customColor'
        marron: '#756E66',
        blueText:'#666975',
        grayText: '#495057',
                
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        ebGaramond: ['"EB Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}

