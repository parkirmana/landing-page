export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ParkirMana — Modern Parking Solution',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Single platform for connected mobility. Make it easy for you to find and pay for parking and book the best spot for you before you go.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
  ],

  googleFonts: {
    families: {
      Mulish: ['200','300','400','500','600','700','800']
    }
  },

  googleAnalytics: {
    options: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    }
  },



  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyC0LHNG-7X2KCSbJwYw0QQ-I77jJNjdQa0",
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: "parkirmana-id",
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: "1:953202040636:web:f1958bed2cdbccff170839",
          measurementId: "G-LN25333C5E",
        },
        services: {
          auth: true,
          firestore: true,
          analytics: true,
        }
      }
    ]
  ],

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
