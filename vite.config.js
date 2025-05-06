import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  server:{
    port:3000,
    proxy: {
      '/api': {
        target:"http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/\api/, ''),
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 👈 This is the alias
    },
  },
})