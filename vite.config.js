import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Prerender({
      // List the routes you want to pre-render
      routes: [
        '/en/home',
        '/en/products',
        '/en/studies',
        '/en/studies/chlorine-study',
        '/en/studies/peracetic-acid-study',
        '/en/studies/study-in-fish',
        '/en/faq',
        '/en/contact-us',
        '/en/tools',
        '/ar/home',
        '/ar/products',
        '/ar/studies',
        '/ar/studies/chlorine-study',
        '/ar/studies/peracetic-acid-study',
        '/ar/studies/study-in-fish',
        '/ar/faq',
        '/ar/contact-us',
        '/ar/tools',
      ],
      outputDir: 'dist', 
    })
  ],
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
