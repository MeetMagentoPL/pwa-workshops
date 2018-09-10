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
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/proxy'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:3000/graphql'
      }
    }
  },
  proxy: [
    'http://magento-2.3.test/graphql'
  ],
  build: {
    transpile: ['alpaca-components']
  }
}
