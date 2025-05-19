import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import {resolve, dirname} from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  resolve : {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@constants': resolve(__dirname, 'src/constants'),
      // '@hooks': resolve(__dirname, 'src/hooks'),
      '@modules': resolve(__dirname, 'src/modules'),
      // '@api': resolve(__dirname, 'src/api'),
      // '@redux': resolve(__dirname, 'src/redux'),
      '@routes': resolve(__dirname, 'src/routes'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@sections': resolve(__dirname, 'src/sections'),

    },
  },
 
  
});