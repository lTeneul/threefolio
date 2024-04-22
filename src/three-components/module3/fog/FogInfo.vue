<script setup>
import { ref } from 'vue'
    let isAllInfodisplay = ref(false);
</script>

<template>
    <p><span class="highlight-text">Fog</span><br>ThreeJs donne la possibilité d'ajouter un brouillard à certaine conditions, les paramètres du brouillard peuvent être trigger
    par différents objets, dans cet exemple par rapport à l'éloignement de la caméra par rapport au centre de la scène.
    </p>
    <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    <pre v-if="isAllInfodisplay">
        <code>
scene.fog = new THREE.Fog(0xFFFFFF, 0, 200)
scene.fog = new THREE.FogExp2(0xFFFFFF, 0.01);
<div class="code-com">// Il y a deux façon différentes de set le fog, les deux rendes le même résultat</div>
        </code>
        <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    </pre>
</template>