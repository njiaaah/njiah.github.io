// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

function markdownRoutes(subdir: string, urlPrefix: string) {
  const dir = join(process.cwd(), subdir)
  return readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => `${urlPrefix}/${name.replace(/\.md$/, '')}`)
}

function portfolioIpxRoutes() {
  const portfolio = JSON.parse(
    readFileSync(join(process.cwd(), 'public/portfolio.json'), 'utf-8'),
  ) as { works: { imageUrl: string }[] }
  return portfolio.works.map((w) => `/_ipx/fit_cover${w.imageUrl}`)
}
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
  ],
  components: [
    {
      path: '~/components/global/content',
      pathPrefix: false,
      prefix: 'GlobalContent',
      global: true,
    },
    '~/components',
  ],
  tailwindcss: {
    config: {
      darkMode: 'class',
    },
  },
  image: {
    provider: 'ipxStatic',
  },
  nitro: {
    preset: 'github_pages',
    prerender: {
      routes: [
        '/',
        '/timeline',
        '/portfolio.json',
        ...portfolioIpxRoutes(),
        ...markdownRoutes('content/works', '/works'),
        ...markdownRoutes('content/jobs', '/jobs'),
      ],
    },
  },
  routeRules: {
    '/works/**': { prerender: true },
    '/jobs/**': { prerender: true },
  },
  app: {
    pageTransition: { name: 'page' },
  },
  css: ['~/assets/main.css'],
})