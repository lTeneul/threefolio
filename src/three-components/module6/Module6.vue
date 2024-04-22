<script>
    import HideButton from '@/components/HideButton.vue';
    import Module6Info from './Module6Info.vue';
    import { polygonRender } from '@/js/three-render/module6/polygon-render';

    export default {
        components: {
            HideButton,
            Module6Info
        },
        mounted() {
            const container = this.$refs.threeContainer;
            const guiContainer = this.$refs.guiContainer

            polygonRender(container, guiContainer);
        },
    }
</script>

<template>
  <div class="view-wrapper">
    <HideButton />
    
    <h3>Module 6</h3>

    <div ref="guiContainer"></div>
    <div class="three-render" ref="threeContainer"></div>

    <div class="three-information">
        <Module6Info/>
    </div>
  </div>
</template>