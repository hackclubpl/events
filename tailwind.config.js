module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hc-gradient': 'radial-gradient( ellipse farthest-corner at top left, #ff8c37, #ec3750)'
      }),
      colors: {
        light: '#f9fafc',
        hcPrimary: '#ec3750'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
