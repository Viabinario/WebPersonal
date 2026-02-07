
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    // En CI (GitHub Pages) usar subpath del repo; en local base '/' para dev
    base: process.env.VITE_BASE_PATH ? `/${process.env.VITE_BASE_PATH.replace(/^\/|\/$/g, '')}/` : '/',
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
    outDir: 'dist',
    sourcemap: true,
    },
    server: {
      port: 3000,
      open: true,
    },
  });