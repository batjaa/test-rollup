import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist.esm.js',
      format: 'esm'
    },
  ],
  plugins: [
    resolve({
      browser: true
    }),
  ],
}
