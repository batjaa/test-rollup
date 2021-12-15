import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: [
    // {
    //   file: 'dist/arbTools.cjs.js',
    //   format: 'cjs'
    // },
    {
      file: 'dist.esm.js',
      format: 'esm'
    },
    // {
    //   name: 'ArbTools',
    //   file: 'dist/arbTools.umd.js',
    //   format: 'umd'
    // }
  ],
  plugins: [
    // nodePolyfills(),
    resolve(),
    commonjs(),
    // json(),
    // typescript({ tsconfig: './tsconfig.json' }),
  ],
  // external
}
