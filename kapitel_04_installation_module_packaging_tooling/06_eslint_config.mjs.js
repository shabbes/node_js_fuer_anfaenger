// eslint.config.mjs
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    languageOptions: {
      globals: {
        var1: 'writable',
        var2: 'readonly',
      },
    },
  },
]);