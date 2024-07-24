import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // To support .wasm files
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  server: {
    // mimeTypes: {
    //   'application/wasm': ['.wasm']
    // }
  }
})
