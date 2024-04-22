<script>
  import HideButton from '@/components/HideButton.vue';
  import { datGuiRender } from '@/js/three-render/module2/datgui-render.js';
  import Module2Info from './Module2Info.vue';

  export default {
    components: {
      HideButton,
      Module2Info
    },
    mounted() {
      const container = this.$refs.threeContainer;
      const guiContainer = this.$refs.guiContainer
      datGuiRender(container, guiContainer);
    },
  }

</script>

<template>
  <div class="view-wrapper">
    <HideButton />
    
    <h3>Module 2</h3>

    <div ref="guiContainer"></div>
    <div class="three-render" ref="threeContainer"></div>
    <div class="three-information">
        <Module2Info />
    </div>
  </div>
</template>