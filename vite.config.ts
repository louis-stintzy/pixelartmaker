import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3100,
    host: '0.0.0.0',
  },
  preview: {
    port: 3100,
    host: '0.0.0.0',
  },
});
