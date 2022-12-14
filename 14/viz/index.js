import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,

    Color,
    Fog,

    BoxGeometry,
    SphereGeometry,
    BufferGeometry,
    CylinderGeometry,
    PlaneGeometry,
    IcosahedronGeometry,
    AmbientLight,
    DirectionalLight,
    HemisphereLight,

    MeshStandardMaterial,
    MeshBasicMaterial,
    MeshLambertMaterial,
    ShaderMaterial,
    
    Object3D,
    Texture,
    BackSide,

    Clock,
    Vector3,

} from "three";

import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';

import Stats from 'three/addons/libs/stats.module.js';

import data from './input.js';
import { parse, Simulation } from './../14.js';

function resize() {
    renderer.setSize(container.clientWidth, container.clientHeight);
}

const speed = 100000;
const tickTime = 1;
let prevTick = -tickTime;
function animate() {
    const elapsed = clock.getElapsedTime() * speed;
    let t = Math.floor(elapsed);
    let ft = elapsed - t;
    let tick = (elapsed - prevTick) >= tickTime;
    let ticks = Math.max(1, Math.floor(elapsed - prevTick));

    if (tick) {
        prevTick = t;

        if (sim.grain[0] === 500 && sim.grain[1] === 0) {
            if (grain && prevTo) {
                console.log(`leaving ${grain} at ${prevTo.toArray()}`)
                grain.position.copy(prevTo);
            }

            grain = new Mesh(boxGeo, sandMat);
            grain.position.x = 500;
            scene.add(grain);
        }

        from = new Vector3(sim.grain[0], -sim.grain[1], 0);
        for(let j = 0; j<ticks; j++) {
            prevTo = to;
            sim.update();
            if (sim.grain[0] === 500 && sim.grain[1] === 0) {
                break;
            }
            to = new Vector3(sim.grain[0], -sim.grain[1], 0);
        }
    }
    
    grain.position.lerpVectors(from, to, ft);
    
    if (enableControls) {
        controls.update();
    }

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    stats.update();
}

let grain = null, 
    from = null,
    to = null,
    prevTo = null;

const complex = parse(data, true);
const sim = new Simulation(complex, 5_000_000);

const enableControls = false;

const container = document.querySelector("#scene");
const stats = new Stats();
container.appendChild( stats.dom );

const clock = new Clock();
const scene = new Scene();
const focusPoint = new Vector3(500, complex.bounding.maxY/-2, 0);

const renderer = new WebGLRenderer();
const camera = new PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.x = focusPoint.x;
camera.position.z = 210;
camera.position.y = focusPoint.y;
camera.lookAt(focusPoint);

const controls = null;
if (enableControls) {
    controls = new OrbitControls ( camera, renderer.domElement );
    controls.target = focusPoint;
}
const dirLight = new DirectionalLight( 0xf0f0f0, 1 );
dirLight.position.x = 5;
dirLight.position.z = 7;
dirLight.position.y = 1;
scene.add(dirLight);

const rockMat = new MeshLambertMaterial( {color: 0x808a80} );
const sandMat = new MeshLambertMaterial( {color: 0xe0ff0a} );
const boxGeo = new BoxGeometry( 1, 1, 1 );

for(let i = 0; i<complex.rockCoords.length; i++) {
    let box = new Mesh(boxGeo, rockMat);
    box.position.x = complex.rockCoords[i][0];
    box.position.y = -complex.rockCoords[i][1];
    scene.add(box);
}

container.appendChild(renderer.domElement);
window.addEventListener("resize", resize);

resize();

clock.start();
animate();

console.log(parse(data));