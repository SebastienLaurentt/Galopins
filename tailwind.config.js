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
      '4xl': '4rem',
      '5xl': '5rem',
    }
  },
  plugins: [],
}

