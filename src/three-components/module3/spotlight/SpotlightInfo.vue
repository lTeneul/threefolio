<script setup>
import { ref } from 'vue'
    let isAllInfodisplay = ref(false);
</script>

<template>
    <p><span class="highlight-text">Spotlight</span><br>On peut ajouter un spot lumineux, qui va lui aussi nous donner une ombre. On remarque que l'on peut jouer
    sur différents paramètres (angle, pénombre, intensité...). Il faut faire attention à l'accord de nos paramètres car le spot peut être invisible si il ne sont pas 
    setup correctement.
    </p>
    <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    <pre v-if="isAllInfodisplay">
        <code>
const spotLight = new THREE.SpotLight(0xFFFFFF, 5000);
spotLight.position.set(-100, 100, 0);
spotLight.angle = 0.08;
scene.add(spotLight);
spotLight.castShadow = true;

const sLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(sLightHelper);
<div class="code-com">// Configuration basique du spotlight avec sa position, sa couleur et son angle</div>
function animate() {
    sLightHelper.update();
}
<div class="code-com">// Il faut faire attention a bien update le helper à chaque modification sur le spot</div>
        </code>
        <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    </pre>
</template>