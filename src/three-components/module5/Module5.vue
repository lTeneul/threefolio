<script>
    import HideButton from '@/components/HideButton.vue';
    import Module5Info from './Module5Info.vue';
    import { selectionRender } from '@/js/three-render/module5/selection-render';

    export default {
        components: {
            HideButton,
            Module5Info
        },
        mounted() {
            const container = this.$refs.threeContainer;
            const guiContainer = this.$refs.guiContainer

            selectionRender(container, guiContainer);
        },
    }
</script>

<template>
  <div class="view-wrapper">
    <HideButton />
    
    <h3>Module 5</h3>

    <div ref="guiContainer"></div>
    <div class="three-render" ref="threeContainer"></div>

    <div class="three-information">
        <Module5Info />
    </div>
  </div>
</template>