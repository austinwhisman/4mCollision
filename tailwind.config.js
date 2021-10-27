module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        inherit: 'inherit'
      },
      minHeight: {
        '0': '0',
        '19': '19rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      invert: {
        '4': '.4'
      },
      saturate: {
        '14': '14.25'
      },
      hueRotate: {
        '316': '316deg'
      },
      backgroundImage: {
        '4m-collision': "url('../images/4mcollisionheader.png')"
      }
    }
  },
  variants: {
    extend: {
      sepia: ['hover'],
      brightness: ['hover'],
      saturate: ['hover'],
      filter: ['hover'],
      invert: ['hover'],
      hueRotate: ['hover'],
      display: ['group-hover'],
    },
  },
  plugins: ['gatsby-plugin-postcss'],
}
