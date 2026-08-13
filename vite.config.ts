import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jaydeep-senma-portfolio/', // Explicit GitHub Pages repository base path
  server: {
    port: 3000,
    host: true
  }
})
