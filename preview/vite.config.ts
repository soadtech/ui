import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'soadtech-ui': resolve(__dirname, '../packages/ui/src/index.ts'),
    },
  },
  server: {
    port: 5174,
  },
});
