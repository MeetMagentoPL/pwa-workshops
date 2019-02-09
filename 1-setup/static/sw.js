importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/108c613684d5d175b3a9.js",
    "revision": "ea82dbca026467f822a202efdefc7a8c"
  },
  {
    "url": "/_nuxt/169d1d4bc75e89867cd1.js",
    "revision": "dfbf99cb3fa3d94d1365428e255b9a4a"
  },
  {
    "url": "/_nuxt/2e8e8d5b2a297ff08a9b.js",
    "revision": "d02d5518cbb74fdfc4e3b21c009045b1"
  },
  {
    "url": "/_nuxt/411eb452a31085b21a6d.js",
    "revision": "b49bcd17ee444dae551a3b62e8ff9489"
  },
  {
    "url": "/_nuxt/841ce7c986e02df6542a.js",
    "revision": "c3caa3bff49c0c1e16c1f53d04d1028f"
  },
  {
    "url": "/_nuxt/bb68ebb978e7c2b24c18.js",
    "revision": "c060f0824571b8996b56e057ac51fa14"
  },
  {
    "url": "/_nuxt/d50b656404333f04a22b.js",
    "revision": "2e9ea5b8beb5db416cd92bf08304223e"
  },
  {
    "url": "/_nuxt/dc6e03694181765a46a6.js",
    "revision": "44efc1d4c92696f579ada5ed43d38c53"
  }
], {
  "cacheId": "pwa-workshops",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





