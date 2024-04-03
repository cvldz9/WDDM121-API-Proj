import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': {
      target: 'http://localhost:3000', // Your backend server URL
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '') // Remove the '/api' prefix when proxying
    }
  }
})
