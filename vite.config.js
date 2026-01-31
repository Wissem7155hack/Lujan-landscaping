import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use a relative base so `dist` works when served from root or a subpath
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})