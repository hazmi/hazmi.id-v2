const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')
const withOffline = require('next-offline')
const withManifest = require('next-manifest')

const nextConfig = {
  manifest: {
    start_url: "/",
    name: "Hazmi.ID",
    short_name: "Hazmi.ID",
    display: "standalone",
    orientation: "natural",
    background_color: "#ffffff",
    theme_color: "#cf257b",
    icons: [
      {
        "src": "/static/android-icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      },
      {
        "src": "/static/android-icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/static/apple-icon-180x180.png",
        "sizes": "180x180",
        "type": "image/png"
      },
      {
        "src": "/static/favicon-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "/static/favicon.ico",
        "sizes": "16x16",
        "type": "image/ico"
      }
    ]
  },
  workboxOpts: {
    swDest: 'service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

module.exports = withTypescript(withOffline(withManifest(withSass(nextConfig))))
