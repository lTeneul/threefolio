<script>
    import { fogRender } from '@/js/three-render/module3/fog-render';

    export default {
        mounted() {
        const container = this.$refs.threeContainer;
        const guiContainer = this.$refs.guiContainer
        fogRender(container, guiContainer);
        },
    }
</script>

<template>
    <div ref="guiContainer"></div>
    <div class="three-render" ref="threeContainer"></div>
</template>