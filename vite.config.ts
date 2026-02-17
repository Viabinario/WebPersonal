  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    base: '/',
    plugins: [react()],
    // Inyectar variables de contacto en el bundle (build). Si no están en process.env, quedan ''.
    define: {
      'import.meta.env.VITE_CONTACT_API_URL': JSON.stringify(process.env.VITE_CONTACT_API_URL ?? ''),
      'import.meta.env.VITE_CONTACT_EMAIL': JSON.stringify(process.env.VITE_CONTACT_EMAIL ?? ''),
    },
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