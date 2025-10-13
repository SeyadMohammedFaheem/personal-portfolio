import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // ✅ Automatic image compression + WebP conversion
    ViteImageOptimizer({
      jpeg: {
        quality: 75,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 80, // 👈 generates .webp versions
      },
      svg: {
        multipass: true,
      },
    }),
  ],

  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096, // Inline small images (<4KB)
  },

  server: {
    open: true,
  },

  define: {
    global: 'globalThis', // Polyfill for React libraries
  },
});
