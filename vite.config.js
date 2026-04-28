import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/merge-tactics-vue/',
  plugins: [vue(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
