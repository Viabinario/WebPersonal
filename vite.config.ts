
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    // Base path para GitHub Pages (proyecto = subpath /WebPersonal/).
    // Con base correcto, los .js se piden en la ruta buena y el servidor devuelve MIME correcto.
    base: '/WebPersonal/',
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