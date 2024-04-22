<script>
    import HideButton from '@/components/HideButton.vue';
    import Module4Info from './Module4Info.vue';
    import { textureRender } from '@/js/three-render/module4/texture-render';

    export default {
        components: {
            HideButton,
            Module4Info
        },
        mounted() {
            const container = this.$refs.threeContainer;
            const guiContainer = this.$refs.guiContainer

            textureRender(container, guiContainer);
        },
    }
</script>

<template>
  <div class="view-wrapper">
    <HideButton />
    
    <h3>Module 4</h3>

    <div ref="guiContainer"></div>
    <div class="three-render" ref="threeContainer"></div>

    <div class="three-information">
        <Module4Info />
    </div>
  </div>
</template>