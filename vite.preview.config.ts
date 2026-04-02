import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'preview',
  resolve: {
    alias: {
      'soadtech-ui': resolve(__dirname, 'src/index.ts'),
    },
  },
  server: {
    port: 5174,
  },
});
