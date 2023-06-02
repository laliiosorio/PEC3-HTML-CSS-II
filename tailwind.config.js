/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        sm: '768px',
        md: '1024px',
        lg: '1440px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        primary: {
          300: '#808B9B',
          400: '#404D5F',
          500: '#314963'
        },
        secondary: {
          400: '#5498b0',
          500: '#49879e'
        },
        warning: {
          500: '#e6da90'
        },
        grey: {
          300: '#F7F9FB',
          400: '#D7D7D7',
          500: '#635B5B'
        }
      }
    }
  },
  plugins: []
}
