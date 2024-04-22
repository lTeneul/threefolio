<script setup>
import { ref } from 'vue'
    let isAllInfodisplay = ref(false);
</script>

<template>
    <p><span class="highlight-text">Modification de structure</span><br>Un point important de threeJs après la création des objets, il faut pouvoir les séléctionner si besoin,
    On va pour cela utiliser "Raycast" qui va tracer une ligne depuis la sortis de la caméra jusqu'au bout de la scene et ainsi "tracker" tous les objets se trouvant en contact de la ligne.
    </p>
    <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    <pre v-if="isAllInfodisplay">
        <code>
        </code>
        <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    </pre>
</template>