<script>
import { lightRender } from '@/js/three-render/module3/light-render';

  export default {
    mounted() {
      const container = this.$refs.threeContainer;
      const guiContainer = this.$refs.guiContainer
      lightRender(container, guiContainer);
    },
  }

</script>

<template>
    <div ref="guiContainer"></div>
    <div class="three-render" ref="threeContainer"></div>
</template>
