module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
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
    })
  }
}
