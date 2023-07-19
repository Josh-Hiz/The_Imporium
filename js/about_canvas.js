import '../css/page_css/about.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CameraHelper, Euler, Int8Attribute, MeshBasicMaterial, Quaternion } from 'three';

//LIGHTING IS DEAD LAST
var SEPERATION = 50, AMOUNTX = 60, AMOUNTY = 30;
var particles, particle, count = 0;

particles = new Array();

var PI2 = Math.PI * 2;
var waveMaterial = new THREE.SpriteMaterial( {
    color: 0xffffff,
    program: function ( context ) {
      context.beginPath();
    }
})


const scene = new THREE.Scene(); //Add new scene

const camera = new THREE.PerspectiveCamera (80, window.innerWidth / window.innerHeight, 0.1, 1000); //Apply a perspective camera

const renderer = new THREE.WebGLRenderer({  //Render the scene
  canvas: document.querySelector('#background')
});

renderer.setPixelRatio(window.devicePixelRatio); //Set the pixel ratio to the window device ratio
renderer.setSize(window.innerWidth, window.innerHeight); //Make it full screen
camera.position.setZ(50); 
camera.position.setY(0); 

renderer.render(scene, camera);

//Create a quick background for a basic atmosphere 

//Create thin white torus's for atom (We need 3)
const geometry = new THREE.TorusGeometry(15,0.4,3,100);
const material = new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false,});
const torus = new THREE.Mesh(geometry, material);
torus.rotateX(90 * Math.PI / 180);
scene.add(torus);

//2nd Torus
const geometryOne = new THREE.TorusGeometry(20,0.4,3,100);
const materialOne = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe:false});
const torusOne = new THREE.Mesh(geometryOne, materialOne);
torusOne.rotateX(45 * Math.PI / 180);
torusOne.rotateY(135 * Math.PI / 180);

scene.add(torusOne);

//3rd Torus 
const geometryTwo = new THREE.TorusGeometry(25,0.4,3,100);
const materialTwo = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe:false});
const torusTwo = new THREE.Mesh(geometryTwo, materialTwo);
torusTwo.rotateX(45 * Math.PI / 180);
torusTwo.rotateY(45 * Math.PI / 180);

scene.add(torusTwo);

//Add Globe/Sphere(s)
const globeGeometry = new THREE.IcosahedronGeometry(10,0);
const globeMaterial = new MeshBasicMaterial({color: 0xffffff, wireframe:true, transparent: true, opacity: 0.5});
const globe = new THREE.Mesh(globeGeometry,globeMaterial);
scene.add(globe);

const innerCircle = new THREE.SphereGeometry(3.25,25,9);
const innerMaterial = new THREE.MeshBasicMaterial({color: 0xFFA500, wireframe: false, transparent: true, opacity: 0.7});
const innerGlobe = new THREE.Mesh(innerCircle, innerMaterial);
scene.add(innerGlobe);

const starGroup = new THREE.Group();
scene.add(starGroup);

//Add stars (Will start out with a test of spheres first, then cubes)
function randomStar(){
  const geometry = new THREE.TorusGeometry(0.5,0.2,3,100);
  const starMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
  const star = new THREE.Mesh(geometry, starMaterial);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(500));
  star.position.set(x,y,z);
  star.userData.rx = Math.random() * 0.01 - 0.005;
  star.userData.ry = Math.random() * 0.01 - 0.005;
  star.userData.rz = Math.random() * 0.01 - 0.005;
  starGroup.add(star);
}
Array(1500).fill().forEach(randomStar);


//Create Grid Helper (Will be removed when geometry is setup)
// const gridHelper = new THREE.GridHelper(200,50);
// scene.add(gridHelper);

//Allow free scroll (Will be removed when all geometry is set up)
// var controls = new OrbitControls(camera, renderer.domElement);
// controls.minPolarAngle = Math.PI/2;
// controls.maxPolarAngle = Math.PI/2;
// controls.minDistance = 50;
// controls.maxDistance = 0;

function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max-min)) + min;
}
const torusOneSpeed = getRandomInt(1,2);
const torusTwoSpeed = getRandomInt(1,2);
const torusSpeed = getRandomInt(1,2);
//Animate Atom
const animate = function() {
    requestAnimationFrame( animate );
    starGroup.children.forEach(star => {

      star.rotation.x += star.userData.rx;
      star.rotation.y += star.userData.ry;
      star.rotation.z += star.userData.rz;

    });

    torus.rotation.y += 0.005 * torusSpeed;
    torus.rotation.x += 0.015 * torusSpeed;

    torusOne.rotation.x += 0.010 * torusOneSpeed;
    torusOne.rotation.y += 0.005 * torusOneSpeed;
    torusTwo.rotation.y+= 0.005 * torusTwoSpeed;
    torusTwo.rotation.x += 0.005 * torusTwoSpeed;

    globe.rotation.y += 0.001
    // controls.update();
  
    renderer.render(scene, camera);
  }
   animate();

window.addEventListener('resize', function(){
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
