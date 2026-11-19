import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  logLevel: 'error',
  resolve: { alias: { '@': path.resolve(process.cwd(), 'src') } },
  plugins: [react()],
});
