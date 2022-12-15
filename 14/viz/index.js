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

const tickTime = 1;
let speed = 20;
let prevTick = -tickTime;
function animate() {
    count.innerHTML = sim.resting.length;

    if (!sim.done) {
        camera.position.y -= .02;
        camera.position.z += .04;
        focusPoint.y += -.01; 

        const elapsed = clock.getElapsedTime() * speed;
        let t = Math.floor(elapsed);
        let ft = elapsed - t;
        let tick = (elapsed - prevTick) >= tickTime;
        let ticks = Math.max(1, t - prevTick);

        if (tick) {
            speed = Math.pow(speed, 1.001);

            for (let j = 0; j < ticks; j++) {
                if (sim.grain[0] === 500 && sim.grain[1] === 0) {
                    if (grain && prevTo) {
                        if (prevTo.y < -sim.complex.bounding.maxY - 5) {
                            scene.remove(grain);
                            grain = null;

                            if (!addedFloor && t > 200_000) {
                                addedFloor = true;
                                sim.enableFloor();
                                for(let k = 0; k<floor.length; k++) {
                                    floor[k].visible = true;
                                }
                            }

                        } else {
                            grain.position.copy(prevTo);
                        }
                    }

                    grain = new Mesh(boxGeo, sandMat);
                    grain.position.x = 500;
                    scene.add(grain);
                }

                from = new Vector3(sim.grain[0], -sim.grain[1], 0);
                prevTo = to;
                sim.update();
                to = new Vector3(sim.grain[0], -sim.grain[1], 0);
            }

            prevTick = t;
        }

        grain.position.lerpVectors(from, to, ft);
    }

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
sim.disableFloor();

const enableControls = true;

const container = document.querySelector("#scene");
const count = document.querySelector("#count");
const stats = new Stats();
container.appendChild(stats.dom);

const clock = new Clock();
const scene = new Scene();
const focusPoint = new Vector3(500, complex.bounding.maxY / -2 + 30, 0);

const renderer = new WebGLRenderer();
const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = focusPoint.x - 25;
camera.position.z = 100;
camera.position.y = focusPoint.y + 85;
camera.lookAt(focusPoint);

let controls = null;
if (enableControls) {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target = focusPoint;
}

const dirLightA = new DirectionalLight(0xf0f0f0, .9);
dirLightA.position.x = 5;
dirLightA.position.z = 7;
dirLightA.position.y = 1;
scene.add(dirLightA);

const dirLightB = new DirectionalLight(0xe0e0e0, .7);
dirLightB.position.x = -5;
dirLightB.position.z = -5;
dirLightB.position.y = 10;
scene.add(dirLightB);

const rockMat = new MeshLambertMaterial({ color: 0x808a80 });
const sandMat = new MeshLambertMaterial({ color: 0xe0ff0a });
const boxGeo = new BoxGeometry(1.01, 1.01, 1.01);

const floor = [];
let addedFloor = false;

for (let i = 0; i < complex.rockCoords.length; i++) {
    let box = new Mesh(boxGeo, rockMat);
    box.position.x = complex.rockCoords[i][0];
    box.position.y = -complex.rockCoords[i][1];

    if (box.position.y < -sim.complex.bounding.maxY) {
        box.visible = false;
        floor.push(box);
    }

    scene.add(box);
}

container.appendChild(renderer.domElement);
window.addEventListener("resize", resize);

resize();

clock.start();
animate();

console.log(parse(data));