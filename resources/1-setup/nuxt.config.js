export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,900&subset=latin-ext' }
    ]
  },
  css: [
    'normalize.css',
    '~/assets/css/variables.css'
  ],
  modules: [
    ['@nuxtjs/pwa']
  ]
}
