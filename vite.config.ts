import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative base path works universally across all GitHub Pages domains and subpaths
  server: {
    port: 3000,
    host: true
  }
})
