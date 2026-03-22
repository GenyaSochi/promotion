import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './nuxt.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'nuxt',
      include: ['**/*.test.{ts,js}'],
      exclude: [...configDefaults.exclude, 'e2e/**'],
      globals: true,
      coverage: {
        provider: 'v8',
        include: ['**/*.{ts,vue}'],
        exclude: ['**/*.d.ts', '**/*.config.*', 'e2e/**']
      }
    }
  })
)
