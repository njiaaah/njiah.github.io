// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
  ],
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  components: [
    { path: '~/components/content', global: true },
    '~/components',
  ],
  tailwindcss: {
    config: {
      darkMode: 'class',
    },
  },
  routeRules: {
    '/works/**': { ssr: true },
  },
  app: {
    pageTransition: { name: 'page' },
  },
  css: ['~/assets/main.css'],
})