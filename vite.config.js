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
                d04: './04/viz/index.html'
            }
        }
    }
});