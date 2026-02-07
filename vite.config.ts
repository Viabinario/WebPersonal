
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    // Rutas relativas para evitar MIME/octet-stream en GitHub Pages con dominio propio
    base: './',
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