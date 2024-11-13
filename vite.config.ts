import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// @ts-expect-error No se puede asegurar que el campo exista
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ts-expect-error Solo para desarrollo
      '@': path.resolve(__dirname, './src'),
    }
  },
})
