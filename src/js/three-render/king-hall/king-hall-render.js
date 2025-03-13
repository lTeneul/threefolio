import * as THREE from 'three';
import gsap from 'gsap';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function kingHallRender(container) {

	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	const renderer = new THREE.WebGLRenderer();

	renderer.setSize( container.clientWidth, container.clientHeight );

	container.appendChild(renderer.domElement);
    const loader = new GLTFLoader();

    let position = 0;

    loader.load(
	'king-hall/scene.gltf',
	function ( gltf ) {
		scene.add( gltf.scene );
        window.addEventListener('mouseup', function() {
            switch(position) {
                case 0:
                    moveCamera(-2.9, 1.54, 5.35);
                    rotateCamera(0, 0, 0);
                    position = 1;
                    break
                case 1:
                    moveCamera(2.4, 1.6, 5.7);
                    rotateCamera(0, -1, 0);
                    position = 2;
                    break
                case 2:
                    moveCamera(3.15, 0, 3.2);
                    position = 3;
                    break
                case 3:
                    moveCamera(-2.2, 0.3, 13.8);
                    rotateCamera(0, -2.5, 0);
                    position = 4;
                    break
                case 4:
                    moveCamera(0.74, 0.7, 13.32);
                    rotateCamera(0, 1, 0);
                    position = 5;
                    break
                case 5:
                    moveCamera(-3.2, 0.24, 4.79);
                    position = 0;
                    break   
            }
            console.log(camera.position);
        })

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	}
)
    function moveCamera(x, y, z) {
        gsap.to(camera.position, {
            x,
            y,
            z,
            duration: 3
        })
    }
    function rotateCamera(x, y, z) {
        gsap.to(camera.rotation, {
            x,
            y,
            z,
            duration: 3.2
        })
    }
	camera.position.set(-1.7, 1, 4.4);
    camera.lookAt(1.7, 0, 8.4);
    const followText = document.getElementById('testhtml');
    const canvas = document.querySelector('canvas');
    const boxPosition = new THREE.Vector3();
    console.log('zaidojazoid');

	function animate() {
		requestAnimationFrame( animate );
		render()
	}
	function render() {
		renderer.render(scene, camera);
	}
	
	animate();
	render();
}
