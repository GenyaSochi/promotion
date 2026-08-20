import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth' as ScrollBehavior
      }
    }
    return { top: 0, left: 0, behavior: 'instant' as ScrollBehavior }
  }
} satisfies RouterConfig
