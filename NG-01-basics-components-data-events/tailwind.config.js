/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'ng-dark': '#2f3542',
        'ng-primary': '#ff4757',
        'ng-accent': '#2ed573',
      }
    },
  },
  plugins: [],
}

