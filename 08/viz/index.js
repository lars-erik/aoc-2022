import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,
    CylinderGeometry,
    PlaneGeometry,
    AmbientLight,
    Clock,
    DirectionalLight,
    MeshStandardMaterial,
    Object3D,
} from "three";

import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';

//import basicVertex from './basic.vertex.glsl';
//import fragment from './04.fragment.glsl';

import Stats from 'three/addons/libs/stats.module.js';
import { discover } from './../08.js'

import data from './data.js';
const forest = discover(data);
console.log(forest.trees.length * forest.trees[0].length);

let houseTree = forest.trees.reduce((max, row) => 
    row.reduce((max, tree) => {
        if (tree.scenicScore > max.m)
        {
            max.m = tree.scenicScore;
            max.tree = tree;
        }
        return max;
    }, max)
, {tree:null,m:0}).tree;
console.log(houseTree);

const container = document.querySelector("#scene");
const stats = new Stats();
container.appendChild( stats.dom );

function resize() {
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    stats.update();
    controls.update();
}

function createHouse() {
    const house = new Object3D();

    const bodyHeight = 3.5;
    const roofHeight = 2.5;

    const roofWidth = 4.5;
    const roofGeo = new CylinderGeometry(0.1, roofWidth, roofHeight, 16);
    const roofMat = new MeshStandardMaterial({color: 0x2a1a05});
    const roof = new Mesh(roofGeo, roofMat);
    roof.position.y = bodyHeight + roofHeight / 2;
    house.add(roof);

    const bodyWidth = 3;
    const bodyGeo = new CylinderGeometry(bodyWidth, bodyWidth, bodyHeight, 16);
    const bodyMat = new MeshStandardMaterial({color: 0x2a1a05});
    const body = new Mesh(bodyGeo, bodyMat);
    body.position.y = bodyHeight / 2;
    house.add(body);

    return house;
}

function createTree(canopyHeight, origHeight, i) {
    const tree = new Object3D();

    const trunkHeight = canopyHeight / 5;
    const trunkWidth = origHeight / 9 * .7;
    const trunkGeo = new CylinderGeometry(trunkWidth, trunkWidth + .1, trunkHeight, 16);
    const trunkMat = new MeshStandardMaterial({color: 0x40250a});
    const trunk = new Mesh(trunkGeo, trunkMat);
    trunk.position.y = trunkHeight / 2;
    tree.add(trunk);
 
    let rand = Math.sin(i * 3457.3937) * 2543.137;
    rand = rand - parseInt(rand);
    let col = Math.floor(0x0ac01a + (rand * 0x052005));
   
    const canopyGeo = new CylinderGeometry(0.01, .9 + (canopyHeight / 30), canopyHeight, 16);
    const canopyMat = new MeshStandardMaterial({color: col});
    const canopy = new Mesh(canopyGeo, canopyMat);
    canopy.position.y = trunkHeight + canopyHeight / 2;
    tree.add(canopy);

    return tree;
}

const scene = new Scene();
const renderer = new WebGLRenderer();
const camera = new PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 500 );
camera.position.x = 0; // 50;
camera.position.z = 0; // -75;
camera.position.y = 50;

const light = new AmbientLight( 0x606060, 0.9 ); // soft white light
scene.add( light );

const dirLight = new DirectionalLight( 0xf0f0c0, 1 );
dirLight.position.x = .3;
dirLight.position.z = .7;
scene.add(dirLight);

let i = 0; 
let treeHouse;
forest.trees.forEach((row, y) => {
    row.forEach((tree, x) => {
        let treeObj = createTree(Math.max(1, tree.height*2), tree.height, i++);
        treeObj.position.x = (x - 49) * 4;
        treeObj.position.z = (y - 49) * 4;

        if (tree === houseTree) {
            let house = createHouse();
            house.position.y = tree.height * 2 - 1;
            treeObj.add(house);
            treeHouse = treeObj;
            console.log('translated ', x, y, ' to ', treeObj.position.x, treeObj.position.z);
        }

        scene.add(treeObj);
    });
});

const planeGeo = new PlaneGeometry(1000, 1000, 1, 1);
const planeMat = new MeshStandardMaterial({color: 0x107020});
const plane = new Mesh(planeGeo, planeMat);
plane.rotateX(Math.PI/-2);
plane.y = -.05;
scene.add(plane);

const controls = new OrbitControls ( camera, renderer.domElement );
controls.autoRotate = true;
controls.target = treeHouse.position.clone();
console.log('looking at ', controls.target);

controls.update();

const clock = new Clock();
clock.start();

container.appendChild(renderer.domElement);
window.addEventListener("resize", resize);

resize();
animate();
