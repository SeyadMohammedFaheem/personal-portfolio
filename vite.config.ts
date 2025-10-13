import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // ✅ Automatic image compression + forced WebP generation
    ViteImageOptimizer({
      jpeg: {
        quality: 75,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 80,
        lossless: false,
        force: true, // 👈 ensure WebP versions are always created
      },
      svg: {
        multipass: true,
      },
      // Optional: disable cache to always regenerate on build
      cache: false,
    }),
  ],

  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096, // Inline very small images
    rollupOptions: {
          input: '/index.html', // ✅ ensures query params like ?utm are preserved
      output: {
        // 👇 Always rewrite image extensions to .webp in production
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g)$/i.test(assetInfo.name || '')) {
            return 'assets/[name].[hash].webp';
          }
          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },

  server: {
    open: true,
  },

  define: {
    global: 'globalThis',
  },
});
