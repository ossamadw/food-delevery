/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{html,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primaryColor: '#FF6B00',      // Orange
        secondaryColor: '#2F2F2F',    // Dark gray
        accentColor: '#FFA500',       // Light orange
        backgroundColor: '#FFF7F1',   // Soft off-white
        textColor: '#333333',
      }
    },
  },
  plugins: [],
}

