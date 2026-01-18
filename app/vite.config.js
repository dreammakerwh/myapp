import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: './src',
  base: './',
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './src/index.html'),
        privacy: path.resolve(__dirname, './src/privacy.html'),
        terms: path.resolve(__dirname, './src/terms.html')
      },
      output: {
        manualChunks: {
          locales: ['./src/locales/index.js']
        }
      }
    }
  },
  server: {
    port: 3000
  }
})