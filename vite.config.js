import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,tsx}",
      babel: {
        plugins: [],
        presets: []
      }
    })
  ],
  base: '/hillside-medical/',
  server: {
    port: 3000
  }
})
