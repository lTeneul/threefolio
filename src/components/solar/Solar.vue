<script>
    import HideButton from '@/components/HideButton.vue';
    import { solarRender } from '@/js/three-render/solar/solar-render.js';
    import { planetInfosTab } from '@/js/three-render/solar/planetInfos.js'

    export default {
        data() {
          return {
            inputValue: '',
            planetChoosenInfo: '',
          }
        },
        components: {
            HideButton,
        },
        mounted() {
            const container = this.$refs.threeContainer;
            solarRender(container);
            document.getElementById('monInput').addEventListener('inputchange', this.handleInputChange);
        },
        methods: {
          handleInputChange(event) {
            this.inputValue = event.target.value;
            this.planetChoosenInfo = planetInfosTab.find(planetInfo => planetInfo.name === this.inputValue); 
          }
        }
    }
    
</script>

<template>
  <div class="view-wrapper">
    <HideButton />
    <div ref="planetInfo" class="planet-info hidden" data-choice="tedst">
      <h2>{{ planetChoosenInfo.nameFr }}</h2>
      <div class="planet-info-details">
        <input id="monInput" class="hidden" type="text" v-model="inputValue" @input="handleInputChange">

        <div class="planet-info-details__sub">
          <p><span>Type : </span>{{ planetChoosenInfo.type }}</p>
          <p><span>Superficie : </span>{{ planetChoosenInfo.superficie }}</p>
          <p><span>Eloignement : </span>{{ planetChoosenInfo.distance }}</p>
        </div>

        <p>{{ planetChoosenInfo.resume }}</p>
      </div>
    </div>

    <div class="three-render" ref="threeContainer"></div>
    
  </div>
</template>