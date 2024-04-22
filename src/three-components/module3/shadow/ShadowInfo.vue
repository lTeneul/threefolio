<script setup>
import { ref } from 'vue'
    let isAllInfodisplay = ref(false);
</script>

<template>
    <p><span class="highlight-text">Ombres</span><br>L'affichage de l'ombre se fait en 3 étapes (voir le code ci-dessous).
    </p>
    <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    <pre v-if="isAllInfodisplay">
        <code>
renderer.shadowMap.enabled = true;
<div class="code-com">// On commence par enabled les ombres sur notre rendu</div>
directionalLight.castShadow = true;
plane.receiveShadow = true
<div class="code-com">// On défini la relation entre l'objet et l'ombre (est-ce qu'il va la recevoir ou la donner)</div>
const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
scene.add(dLightShadowHelper);
<div class="code-com">//On a aussi un helper pour nous aider à avoir un rendu réaliste et faire attention que
l'objet est bien compris dans la fenêtre d'ombre (lignes jaunes)</div>
directionalLight.shadow.camera.bottom = -12;
<div class="code-com">//Si ce n'est pas le cas on déplace cette fenêtre</div>
        </code>
        <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    </pre>
</template>