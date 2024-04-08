import { defineConfig } from 'vite';
import glob from 'glob';

export default defineConfig(({ command }) => {
  return {
    define: {
      'global': command === 'serve' ? 'window' : 'globalThis',
    },
    root: './src', // вказати шлях до кореневої папки проекту
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/*.js'), // вказати шлях до точок входу JavaScript
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [],
  };
});
