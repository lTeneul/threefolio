<script setup>
import { ref } from 'vue'
    let isAllInfodisplay = ref(false);
</script>

<template>
    <p><span class="highlight-text">Contrôle de caméra</span><br>Ici on va utiliser le plugin OrbitalControl pour influer directement sur la caméra, ce qui nous permet de
    nous déplacer dans la scène, de zoomer, ou de la tourner. On utilise aussi un premier helper qui nous donnes les différents axes (x, y, z).
    </p>
    <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    <pre v-if="isAllInfodisplay">
        <code>
<div class="code-import">
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
</div>
const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);
<p class="code-com">// On commence par setup notre caméra</p>
const orbit = new OrbitControls(camera, renderer.domElement);
const axesHelper = new THREE.AxesHelper(5);
axesHelper.material = new THREE.LineBasicMaterial({color: 0xFF9800});
scene.add(axesHelper);

camera.position.set(0, 2, 5);
orbit.update();
<p class="code-com">// Puis l'orbite control qui va nous permettre de déplacer la caméra, ainsi que les axesHelpers</p>
function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    renderer.render(scene, camera);
}
<p class="code-com">// on </p>

animate();
render();

        </code>
        <p @click="isAllInfodisplay = !isAllInfodisplay; console.log(isAllInfodisplay)" class="more-separator">...</p>
    </pre>
</template>