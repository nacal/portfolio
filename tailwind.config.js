module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#99B5AD',
        primary: '#7B8E89',
        secondary: '#6F7F7A',
        accent: '#99ACA7',
      },
      maxWidth: {
        container: '90%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
