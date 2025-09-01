const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/app.js',
    platform: 'node',
    target: 'node18',
    sourcemap: true,
    minify: false,
    format: 'cjs',
  })
  .catch(() => process.exit(1));