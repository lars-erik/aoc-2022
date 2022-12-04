import {
    Scene,
    OrthographicCamera,
    WebGLRenderer,
    Vector2,
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

/*
import { GUI } from 'dat.gui';

import shaders from './shaders';
*/

import data from './data.js';
const pairs = parse(data);
console.log(pairs.length);

const container = document.querySelector("#shader");


/*
const reqShader = (location.hash || "#").substring(1);

const current = {
    shader: shaders[reqShader] ? reqShader : 'tmcurve01'
};
*/

const defaultUniforms = {
    u_time: { value: 0 },
    iResolution: { value: [container.clientWidth, container.clientHeight, 0] }
};


const materialOptions = {
    vertexShader: basicVertex,
    fragmentShader: fragment,
    uniforms: {
        u_time: { value: 0 },
        u_speed: { value: 1.0 },
        width: { value: 20 },
        pairs: {
            value: pairs.map(pair => {
                const wr = 20;
                return new Vector4(pair.a.x1*wr, pair.a.x2*wr, pair.b.x1*wr, pair.b.x2*wr);
            })
        }
    }
}

/*
function buildGui(gui, mat) {
    gui.add(mat.uniforms.u_speed, 'value', 0.1, 5.0, .1).name('Speed');
    gui.add(mat.uniforms.scale, 'value', 0.1, 20.0, .1).name('Scale');
    gui.add(mat.uniforms.octaves, 'value', 1.0, 10.0, 1).name('Octaves');
    gui.add(mat.uniforms.turbulence, 'value').name('Turbulence');
}
*/

let material = { materialOptions };
//let gui = new GUI();
let mat = {};

function resize() {
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

//gui.add(current, 'shader', Object.keys(shaders)).onChange(shaderChanged);
//material.buildGui(gui, mat);

container.appendChild(renderer.domElement);
window.addEventListener("resize", resize);

resize();
animate();
