import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,

    Color,
    Fog,

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

const canopyHeight = .85;
const trunkHeight = 0.15;
const trunkWidth = .5;
const trunkGeo = new CylinderGeometry(trunkWidth, trunkWidth + .1, trunkHeight, 16);
const trunkMat = new MeshStandardMaterial({color: 0x40250a});

const canopyGeo = new CylinderGeometry(0.01, 1.25, canopyHeight, 16);
const mats = [];

function rand(i) {
    let rand = Math.sin(i * 3457.3937) * 2543.137;
    rand = rand - parseInt(rand);
    return rand;
}

function createTree(i) {
    const tree = new Object3D();

    const trunk = new Mesh(trunkGeo, trunkMat);
    trunk.position.y = trunkHeight / 2;
    tree.add(trunk);
 
    const maxMats = 25;
    let mat;
    if (i <= maxMats) {
        let col = Math.floor(0x0ac01a + (rand(i) * 0x052005));
        mat = new MeshStandardMaterial({color: col});
        mats.push(mat);
    } else {
        mat = mats[Math.floor((rand(i) * .5 + .5) * maxMats) % maxMats];
    }

    const canopy = new Mesh(canopyGeo, mat);
    canopy.position.y = trunkHeight + canopyHeight / 2;
    tree.add(canopy);

    return tree;
}

const scene = new Scene();
const renderer = new WebGLRenderer();
const camera = new PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.x = 0; // 50;
camera.position.z = 0; // -75;
camera.position.y = 50;

scene.background = new Color().setHSL( 0.6, 0, 1 );
scene.fog = new Fog( scene.background, 1, 1000 );

const light = new AmbientLight( 0x606060, 0.9 ); // soft white light
scene.add( light );

const hemiLight = new HemisphereLight( 0xffffaa, 0xffffaa, 0.25 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 800, 0 );
scene.add( hemiLight );

const dirLight = new DirectionalLight( 0xf0f0c0, 1 );
dirLight.position.x = .3;
dirLight.position.z = .7;
scene.add(dirLight);

let i = 0; 
let treeHouse;
forest.trees.forEach((row, y) => {
    row.forEach((tree, x) => {
        let treeObj = createTree(i++);
        treeObj.position.x = (x - 49) * 4;
        treeObj.position.z = (y - 49) * 4;

        const scaleHeight = Math.max(1, tree.height*2);
        const widthScale = tree.height / 9 + .5;
        treeObj.scale.y = scaleHeight;
        treeObj.scale.x = treeObj.scale.z = widthScale;
    
        if (tree === houseTree) {
            let house = createHouse();
            house.position.copy(treeObj.position);
            house.position.y = tree.height*2-5;
            console.log(house.position);
            scene.add(house);
            treeHouse = house;
        }

        scene.add(treeObj);
    });
});

// GROUND

const planeGeo = new PlaneGeometry(2000, 2000, 1, 1);
const planeMat = new MeshLambertMaterial({color: 0x107020});
const plane = new Mesh(planeGeo, planeMat);
plane.rotateX(Math.PI/-2);
plane.y = -.05;
plane.receiveShadow = true;
scene.add(plane);

// SKYDOME

const vertexShader = document.getElementById( 'vertexShader' ).textContent;
const fragmentShader = document.getElementById( 'fragmentShader' ).textContent;
const uniforms = {
    'topColor': { value: new Color( 0x0077ff ) },
    'bottomColor': { value: new Color( 0xffffff ) },
    'offset': { value: 33 },
    'exponent': { value: 0.6 }
};
uniforms[ 'topColor' ].value.copy( hemiLight.color );

scene.fog.color.copy( uniforms[ 'bottomColor' ].value );

const skyGeo = new SphereGeometry( 900, 32, 15 );
const skyMat = new ShaderMaterial( {
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: BackSide
} );

const sky = new Mesh( skyGeo, skyMat );
scene.add( sky );

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
