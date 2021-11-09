module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#000024',
     'secondary': '#ffed4a',
     'danger': '#e3342f',
    }),
    extend: {
      fontFamily: {
        Rampart: ["Press Start 2P", "cursive"],
       },
    },
  }
}
