import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

export default {
    input: './src/index.ts',
    output: {
        name: 'whc',
        format: 'umd',
        file: './build/bundle.js',
        sourcemap: true,
    },
    plugins: [
        svelte({
            preprocess: sveltePreprocess(),
        }),
        resolve({
            browser: true,
        }),
        commonjs(),
        typescript(),
        alias({
            entries: [
                { find: '$components', replacement: path.resolve(__dirname, 'src/components') },
            ]
        }),
        postcss({
            minimize: true,
            plugins: [
                tailwind,
                autoprefixer,
            ],
        }),
    ],
};
