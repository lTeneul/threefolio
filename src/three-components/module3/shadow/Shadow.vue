<script>
import { shadowRender } from '@/js/three-render/module3/shadow-render';

  export default {
    mounted() {
      const container = this.$refs.threeContainer;
      const guiContainer = this.$refs.guiContainer
      shadowRender(container, guiContainer);
    },
  }

</script>

<template>
    <div ref="guiContainer"></div>
    <div class="three-render" ref="threeContainer"></div>
</template>
