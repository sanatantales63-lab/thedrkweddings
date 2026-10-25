/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          dark: '#1A1A1A',
          gold: '#C89B3C',
          sand: '#9E855A',
          bg: '#F9F8F6',
          ivory: '#F0E9E0',
          border: '#EAE5DE',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          linen: '#FAF8F5',
          muted: '#F6F5F2',
          border: '#E8E5DF',
        },
        hotc: {
          dark: '#1A1A1A',
          body: '#2D2D2D',
          muted: '#707070',
          light: '#9E9E9E',
          border: '#E0E0E0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Poppins"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-hotc': '0.18em',
        'super-wide': '0.25em',
      }
    },
  },
  plugins: [],
}
