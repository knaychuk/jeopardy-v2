/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif'],
        Jeopardy: ['Swiss911 XCm BT', 'sans-serif']
      },
      colors: {
        primary: '#FFCC00',
        secondary: '#060CE9'
      }
    },
  },
  plugins: [],
}
