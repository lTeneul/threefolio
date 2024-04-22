<script>
  import { cubeRender } from '@/js/three-render/module1/cube-render.js';

  export default {
    mounted() {
      const container = this.$refs.threeContainer;
      cubeRender(container);
    },
  }

</script>

<template>
  <div class="three-render" ref="threeContainer"></div>
</template>
