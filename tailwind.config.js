/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#F9E8C9',
          500: '#D4AF37',
          900: '#8B6914',
        },
        dark: {
          100: '#1a1a1a',
          500: '#0a0a0a',
          900: '#000000',
        }
      },
      backgroundImage: {
        'marble': "url('/marble-pattern.png')",
      },
    },
  },
  plugins: [],
};
