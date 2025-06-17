
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Charging-Station-Locator/',
  build: {
    outDir: 'dist',
  }
});
