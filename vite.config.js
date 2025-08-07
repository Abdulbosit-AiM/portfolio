import { defineConfig } from 'vite';

export default defineConfig({
  root: 'dist',
  build: {
    outDir: '../build',
    emptyOutDir: true
  },
  server: {
    port: 3000
  }
});