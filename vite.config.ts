import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['pdfjs-dist']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});