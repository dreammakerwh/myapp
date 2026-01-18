import { defineConfig } from 'vite'

export default defineConfig({
  root: './src',
  base: './',
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: './src/index.html',
      output: {
        manualChunks: {
          // 将多语言文件分块
          locales: ['./src/locales/index.js']
        }
      }
    }
  },
  server: {
    port: 3000
  }
})