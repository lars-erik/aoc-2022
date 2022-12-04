import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
    base: './',
    plugins:[
        glsl()
    ],
    build: {
        lib: {
            entry: {
                d04: './04/viz/index.html'
            }
        }
    }
});