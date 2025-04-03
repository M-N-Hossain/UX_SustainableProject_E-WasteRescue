module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-green': '#1a2e29',
        'medium-green': '#2b4c43',
        'light-green': '#5b7b6f',
        'accent-green': '#8cc3a1',
        green: {
          50: "#f0fdf4",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
};
