import * as THREE from 'three';

export function cubeRender(container) {

	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	const renderer = new THREE.WebGLRenderer({alpha: true});

	renderer.setSize( container.clientWidth, container.clientHeight );

	container.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry(3, 3, 3);
	const material = new THREE.MeshBasicMaterial( { color: 0x135D66 } );
	const cube = new THREE.Mesh( geometry, material );
	scene.add(cube);

	const edges = new THREE.EdgesGeometry(geometry);
	const lineMaterial = new THREE.LineBasicMaterial({ color: 0xE3FEF7, linewidth: 20 }); // Définir l'épaisseur des bords
	const line = new THREE.LineSegments(edges, lineMaterial);
	cube.add(line);

	camera.position.z = 5;

	function animate() {
		requestAnimationFrame( animate );

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		render()
	}
	function render() {
		renderer.render(scene, camera);
	}
	
	animate();
	render();
}
