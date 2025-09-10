/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8b5cf6',      // Vibrant purple
        'secondary': '#d946ef',    // Glowing magenta
        'dark-slate': '#111827',  // Our new, more attractive dark background
      },
    },
  },
  plugins: [],
}
