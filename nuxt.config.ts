// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  
  css: [
    '~/assets/reset.css',
    '~/assets/style.css',
    '~/assets/css/main.css'
  ],
  ssr: true,
  nitro: {
    static: true,
    prerender: {
      failOnError: false
    }
  },
  app: {
    baseURL: '/promotion/',
    buildAssetsDir: '/assets/',
    head: {
      title: 'Веб Промоушн - Цифровые решения для вашего бизнеса',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Мы создаём качественные цифровые решения для вашего бизнеса' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})