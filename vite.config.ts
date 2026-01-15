
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    // Base path para GitHub Pages
    // Si tu repo es 'username.github.io', usa: base: '/'
    // Si tu repo tiene otro nombre, usa: base: '/nombre-del-repo/'
    base: process.env.GITHUB_PAGES === 'true' ? '/DEV_WebPersonal/' : '/',
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