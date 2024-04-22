<script setup>
import { ref } from 'vue'
    let isAllInfodisplay = ref(false);
</script>

<template>
    <p><span class="highlight-text">DatGui</span><br>DatGui va nous permettre d'avoir une interface graphique pour modifier directement les options d'un ou plusieurs objets
        Toute options qui est défini dans DatGui peut être modifiable.
    </p>
    <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    <pre v-if="isAllInfodisplay">
        <code>
<div class="code-import">import * as dat from 'dat.gui';</div>
const gui = new dat.GUI({ autoPlace: false });

document.querySelector('.view-wrapper').appendChild(gui.domElement);
const options = {
    sphereColor: '#135D66',
    wireframe: false,
    speed: 0.01,
};
<div class="code-com">//Initialisation de DatGui dans le conteneur choisi, ainsi que le setup des options modifiable</div>
gui.addColor(options, 'sphereColor').onChange(function(e) {
    sphere.material.color.set(e);
})

gui.add(options, 'wireframe').onChange(function(e) {
    sphere.material.wireframe = e;
})

gui.add(options, 'speed', 0, 0.1);
<div class="code-com">//Setup des inputs de datGui</div>

let step = 0;

const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);
<div class="code-com">//GridHelper qui fonctionne exactement de la même façon que les axes</div>
function animate() {
    requestAnimationFrame(animate);
    step += options.speed;
    sphere.position.y = 10 * Math.abs(Math.sin(step));
<div class="code-com">     //Pour la vitesse on utilise les possibles modifications de datGui dans la fonction d'animation</div>
    render();
}
        </code>
        <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    </pre>
</template>