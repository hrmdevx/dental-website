import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/dental-website/',
  plugins: [
    tailwindcss(),
  ],
})