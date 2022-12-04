import {
    Scene,
    OrthographicCamera,
    WebGLRenderer,
    Vector4,
    Mesh,
    PlaneGeometry,
    ShaderMaterial,
    DoubleSide,
    Clock,
} from "three";
import basicVertex from './basic.vertex.glsl';
import fragment from './04.fragment.glsl';
import { parse } from './../04.js'

import data from './data.js';
const pairs = parse(data);
console.log(pairs.length);

const container = document.querySelector("#shader");

const defaultUniforms = {
    u_time: { value: 0 },
    iResolution: { value: [container.clientWidth, container.clientHeight, 0] }
};

let width = container.clientWidth / 100 * .99;
console.log(width);

const mapPairs = () => pairs.map(pair => {
    return new Vector4(pair.a.x1*width, pair.a.x2*width, pair.b.x1*width, pair.b.x2*width);
});

const materialOptions = {
    vertexShader: basicVertex,
    fragmentShader: fragment,
    uniforms: {
        u_time: { value: 0 },
        u_speed: { value: 1.0 },
        width: { value: width },
        pairs: {
            value: mapPairs()
        }
    }
}

let material = { materialOptions };
let mat = {};

function resize() {
    width = container.clientWidth / 100 * .99;
    materialOptions.uniforms.width.value = width;
    materialOptions.uniforms.pairs.value = mapPairs();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
    requestAnimationFrame(animate);
    mat.uniforms.u_time.value = clock.getElapsedTime();
    mat.uniforms.iResolution.value = [container.clientWidth, container.clientHeight, 0];
    renderer.render(scene, camera);
}

function createMaterial() {
    const opts = Object.assign(
        {
            side: DoubleSide
        },
        material.materialOptions
    );
    Object.assign(opts.uniforms, defaultUniforms);

    return new ShaderMaterial(opts);
}

const scene = new Scene();
const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new WebGLRenderer();

const geo = new PlaneGeometry(2, 2);

mat = createMaterial();
const plane = new Mesh(geo, mat);
scene.add(plane);

const clock = new Clock();
clock.start();

container.appendChild(renderer.domElement);
window.addEventListener("resize", resize);

resize();
animate();
