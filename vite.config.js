import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  logLevel: 'error',
  resolve: { alias: { '@': path.resolve(process.cwd(), 'src') } },
  plugins: [react()],
  preview: {
    allowedHosts: ['cqtjix2256-lcevz5j4za-uk.a.run.app'],
  },
});
