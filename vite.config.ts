import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
//import { defineConfig } from 'vite'
import { defineConfig, configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, '**/playwright-tests/**'],
  },
})
