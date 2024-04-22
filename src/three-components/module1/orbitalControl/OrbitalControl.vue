<script>
  import { orbitalControlRender } from '@/js/three-render/module1/orbital-control-render.js';

  export default {
    mounted() {
        const threeDiv = this.$refs.threeContainer;
        orbitalControlRender(threeDiv);
    },
  }
</script>

<template>
  <div class="three-render" ref="threeContainer"></div>
</template>