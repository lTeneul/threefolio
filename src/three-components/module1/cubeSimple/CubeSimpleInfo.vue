<script setup>
import { ref } from 'vue'
    let isAllInfodisplay = ref(false);
</script>

<template>
    <p><span class="highlight-text">Easy Cube</span><br>On utilise three pour créer notre premier objet basique, on comprends alors que l'objet 3D et l'addition d'un squelette
    qui est la strucutre même de l'objet et d'un matériel qui dans cet exemple, une couleur. Il faudra ajouter une caméra et de la lumière afin de rendre notre objet.
    </p>
    <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    <pre v-if="isAllInfodisplay">
        <code>
<div class="code-import">
import * as THREE from 'three';
</div>
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const container = document.querySelector('.three-div')
const renderer = new THREE.WebGLRenderer({alpha: true});

renderer.setSize( container.offsetWidth, container.offsetHeight );
container.appendChild(renderer.domElement);
<p class="code-com">// Set de la scène, de la caméra, du conteneur d'accueil et du rendu ("alpha" nous permet le fond transparent)</p>

const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshBasicMaterial( { color: 0x135D66 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
<p class="code-com">// Ici on définit les paramètres de notre cube (taille, couleur) puis on l'ajoute dans notre scène </p>
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xE3FEF7, linewidth: 1 });
const line = new THREE.LineSegments(edges, lineMaterial);
cube.add(line);
<p class="code-com">// Ce bloc nous permet de construire les bords du cube</p>
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
<p class="code-com">// On fini par animer le cube, et par rendre la scene et la camera</p>
}
        </code>
        <p @click="isAllInfodisplay = !isAllInfodisplay; console.log(isAllInfodisplay)" class="more-separator">...</p>
    </pre>
</template>