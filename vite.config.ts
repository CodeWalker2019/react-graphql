import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      views: path.resolve(__dirname, './src/views'),
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
});
