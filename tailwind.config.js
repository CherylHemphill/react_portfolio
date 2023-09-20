/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
       bright: '#defff2',
       secondary: '#464f51',
       dark: '#000009',
       light: '#a599b5',
       accent: '#0ff4c6',
       offWhite: '#f2f6f8'

      }
    },
  },
  plugins: [],
}

