/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerbg: "url('/src/Assets/img/header.png')",
        burgerbg: "url('/src/Assets/img/burger.png')"
      },

    },
  },
  plugins: [],
}

