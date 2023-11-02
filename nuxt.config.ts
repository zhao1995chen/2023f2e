// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    /**
     * 相對當前檔案路徑
     */
    '~': './',
    '@': './',
    // 'images': './assets/images',
    // 'style': './assets/style',
    // 'public': './public',
    // 'components': './src/components'
    /** 
     * 基於當前模組的 URL
     */
    'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
    'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
    'public': fileURLToPath(new URL('./public', import.meta.url)),
    'components': fileURLToPath(new URL('./src/components', import.meta.url)),
  },
  app: {
    head: {
      title: 'Nuxt 3',
      meta: [
        { charset: 'utf-8' }, // 預設
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }, // 預設
        // { hid: 'description', name: 'description', content: 'Nuxt 3 description' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
  /*
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    '/products/**': { swr: true },
    // Blog post generated on-demand once until next deploy
    '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Add cors headers on API routes
    '/api/**': { cors: true },
    // Redirects legacy urls
    '/old-page': { redirect: '/new-page' }
  }
  */
})
