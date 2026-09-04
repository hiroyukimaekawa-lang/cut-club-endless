import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static build for Cloudflare Pages: output -> dist
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
