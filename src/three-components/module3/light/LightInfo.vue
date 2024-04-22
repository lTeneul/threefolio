<script setup>
import { ref } from 'vue'
    let isAllInfodisplay = ref(false);
</script>

<template>
    <p><span class="highlight-text">Lumière ambiante/directionnel</span><br>Sur ce premier exemple on remarque deux sources de lumière différentes, qui vont avoir, deux
    usages différents. En revanche chacune peut être paramétré comme n'importe quel autre objet three.
    </p>
    <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    <pre v-if="isAllInfodisplay">
        <code>
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
scene.add(directionalLight);
directionalLight.position.set(-50, 50, 0)
<p class="code-com">// Ajout des deux sources de lumière</p>
const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(dLightHelper);
<p class="code-com">// Ajout des helpers pour nous aider à placer nos lights correctement</p>
        </code>
        <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    </pre>
</template>