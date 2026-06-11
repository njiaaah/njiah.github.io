// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'


function markdownRoutes(subdir: string, urlPrefix: string) {
  const dir = join(process.cwd(), subdir)
  return readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => `${urlPrefix}/${name.replace(/\.md$/, '')}`)
}

function staticPageRoutes() {
  return [
    '/',
    '/timeline',
    '/tools',
    '/tools/ds-structure-calc',
    ...markdownRoutes('content/works', '/works'),
    ...markdownRoutes('content/jobs', '/jobs'),
  ]
}

function indexableSitemapRoutes() {
  return [
    '/',
    '/timeline',
    '/tools',
    '/tools/ds-structure-calc',
    ...markdownRoutes('content/jobs', '/jobs'),
  ]
}

function sitemapUrls() {
  const buildDate = new Date().toISOString()
  const calcPath = '/tools/ds-structure-calc'

  return indexableSitemapRoutes().map((route) => {
    let lastmod = buildDate

    if (route.startsWith('/jobs/')) {
      const slug = route.replace('/jobs/', '')
      const mdPath = join(process.cwd(), 'content/jobs', `${slug}.md`)
      lastmod = statSync(mdPath).mtime.toISOString()
    }

    if (route === calcPath) {
      return { loc: route, lastmod, priority: 0.9 as const }
    }
    return { loc: route, lastmod }
  })
}

function portfolioIpxRoutes() {
  const portfolio = JSON.parse(
    readFileSync(join(process.cwd(), 'public/portfolio.json'), 'utf-8'),
  ) as { works: { imageUrl: string }[] }
  return portfolio.works.map((w) => `/_ipx/fit_cover${w.imageUrl}`)
}
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',  devtools: { enabled: true },
  site: {
    url: 'https://njiah.ru',
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://njiah.ru',
    },
  },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
  ],
  content: {
    experimental: {
      nativeSqlite: true,
    },
  },
  sitemap: {
    zeroRuntime: true,
    excludeAppSources: true,
    exclude: ['/portfolio.json', '/_ipx/**'],
    urls: sitemapUrls(),
  },
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
        ...staticPageRoutes(),
        '/portfolio.json',
        ...portfolioIpxRoutes(),
        '/sitemap.xml',
      ],
    },
  },
  routeRules: {
    '/works/**': { prerender: true },
    '/jobs/**': { prerender: true },
    '/tools': { prerender: true },
    '/tools/ds-structure-calc': { prerender: true },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: '%s | njiah.ru',
      meta: [
        {
          name: 'description',
          content: 'Portfolio timeline, work history, and practical game tools by njiah.',
        },
      ],
    },
  },
  css: ['~/assets/main.css'],
})