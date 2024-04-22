<script setup>
import { ref } from 'vue'
    let isAllInfodisplay = ref(false);
</script>

<template>
    <p><span class="highlight-text">Texture scene/objet</span><br>Il est possible d'appliquer une texture
    à un objet sur toutes ses faces, la scene fonctionne également de la même façon, car il s'agit en réalité
    d'un simple cube englobant nos objets.
    </p>
    <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    <pre v-if="isAllInfodisplay">
        <code>
<div class="code-import">import stars from '@/img/stars.jpeg';
import nebula from '@/img/nebula.jpeg';</div>
const cubeTextureLoader = new THREE.CubeTextureLoader
scene.background = cubeTextureLoader.load([
    stars,
    stars,
    stars,
    stars,
    stars,
    stars,
])
const boxMultiMaterial = [
    new THREE.MeshBasicMaterial({map: textureLoader.load(nebula)}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(nebula)}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(nebula)}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(nebula)}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(nebula)}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(nebula)})
]
<div class="code-com">// Pour la scene comme pour l'objet on défini chaque face une à une avec une texture</div>

box.material.map = textureLoader.load(nebula)
<div class="code-com">// On peut aussi définir plus simplement une seule images pour toutes les faces d'une même entité</div>

        </code>
        <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    </pre>
</template>