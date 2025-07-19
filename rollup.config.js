import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: false,
      name: 'react-ui-components'
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: false
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true
    }),
    commonjs(),
    typescript({
      clean: true,
      exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.story.tsx']
    }),
    json()
    // terser() - temporarily disabled if causing issues
  ],
  external: ['react', 'react-dom']
};