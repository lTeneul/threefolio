<script>
    import HideButton from '@/components/HideButton.vue';
    import { solarRender } from '@/js/three-render/solar/solar-render.js';


    export default {
        components: {
            HideButton,
        },
        mounted() {
            const container = this.$refs.threeContainer;
            solarRender(container);
        },
    }
    
</script>

<template>
  <div class="view-wrapper">
    <HideButton />
    <div class="three-render" ref="threeContainer"></div>
    
  </div>
</template>