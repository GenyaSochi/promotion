// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  srcDir: 'app/',
  css: [
    '~/assets/reset.css',
    '~/assets/style.css',
    '~/assets/css/main.css'
  ],
  app: {
    baseURL: process.env.BASE_URL || '/',
    head: {
      title: 'Веб Промоушн - Цифровые решения для вашего бизнеса',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover' },
        { name: 'description', content: 'Мы создаём качественные цифровые решения для вашего бизнеса' },
        { name: 'theme-color', content: '#0a0a0f' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})