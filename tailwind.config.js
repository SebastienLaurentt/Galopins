/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      'md': '1.05rem',
      'lg': '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '3.5xl': '3.5rem',
      '4xl': '4.5rem',
      '5xl': '6rem',
      '6xl' : '7.5rem',
      '7xl' : '10rem',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2036px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

