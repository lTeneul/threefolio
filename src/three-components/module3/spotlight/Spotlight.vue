<script>
import { spotlightRender } from '@/js/three-render/module3/spotlight-render';

  export default {
    mounted() {
      const container = this.$refs.threeContainer;
      const guiContainer = this.$refs.guiContainer
      spotlightRender(container, guiContainer);
    },
  }

</script>

<template>
    <div ref="guiContainer"></div>
    <div class="three-render" ref="threeContainer"></div>
</template>
