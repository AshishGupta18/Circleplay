/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-dark": "#1B1B1B",
        "gradient-blue": "#3B95FF2B",
        desc: " #FCF1BB",
        "primary-blue": "#5AA5FD",
      },
    },
  },
  plugins: [],
}