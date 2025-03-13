<script>
    import HideButton from '@/components/HideButton.vue';
    import { kingHallRender } from '@/js/three-render/king-hall/king-hall-render.js';

    export default {
        components: {
            HideButton,
        },
        mounted() {
            const container = this.$refs.threeContainer;
            kingHallRender(container);
        },
    }
    
</script>

<template>
  <div class="view-wrapper">
    <HideButton />
    <div id="testhtml">test texte threejs</div>
    <div class="three-render" ref="threeContainer"></div>
    
  </div>
</template>