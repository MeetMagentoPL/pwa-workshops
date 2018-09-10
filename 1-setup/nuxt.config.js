export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,900&subset=latin-ext' }
    ]
  },
  css: [
    'normalize.css',
    'alpaca-components/public/styles/variables.css'
  ],
  modules: [
    ['@nuxtjs/pwa']
  ],
  build: {
    transpile: ['alpaca-components']
  }
}
