import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
    base: './',
    plugins:[
        glsl()
    ],
    build: {
        lib: {
            name: 'aoc-2022',
            formats: ['es'],
            entry: {
                m: './index.html',
                d04: './04/viz/index.html',
                d08: './08/viz/index.html',
                d14: './14/viz/index.html',
            }
        }
    }
});