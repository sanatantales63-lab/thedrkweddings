/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shutter: {
          bg: '#F5F5F0',
          card: '#FBFBFA',
          dark: '#1c1917',
          black: '#0c0a09',
          border: '#e7e5e4',
          muted: '#57534e',
          accent: '#FF3B30',
          whatsapp: '#25D366',
        },
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
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-hotc': '0.18em',
        'super-wide': '0.25em',
        'editorial': '0.3em',
        'ultra-wide': '0.5em',
      }
    },
  },
  plugins: [],
}
