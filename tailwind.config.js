/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans'],
        'roboto': ['Roboto']
      },
      colors: {
        "orange-ff": "#FF9900",
        "orangef8": "#F85A47",
        "gray-31": "#31353B",
        "gray-da": "#DADADA",
        "indigo-db": "#BDCCFF",
        "gray-opacity": "rgba(0, 0, 0, 0.4)"
      },
      gridTemplateColumns: {
        'section-template': '1fr auto 1fr auto 1fr',
      }
    },
  },
  plugins: [],
}
