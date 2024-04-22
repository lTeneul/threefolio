<script>
    import HideButton from '@/components/HideButton.vue';
    import SpotLight from './spotlight/Spotlight.vue';
    import Light from './light/Light.vue';
    import LightInfo from './light/LightInfo.vue';
    import Shadow from './shadow/Shadow.vue'
    import ShadowInfo from './shadow/ShadowInfo.vue'
    import SpotlightInfo from './spotlight/SpotlightInfo.vue';
    import FogInfo from './fog/FogInfo.vue';
    import Fog from './fog/Fog.vue';

    export default {
        components: {
            HideButton,
            Light,
            LightInfo,
            Shadow,
            ShadowInfo,
            SpotLight,
            SpotlightInfo,
            FogInfo,
            Fog
        },
    }
</script>

<template>
  <div class="view-wrapper">
    <HideButton />
    
    <h3>Module 3</h3>

    <Light />
    <div class="three-information">
        <LightInfo />
    </div>

    <Shadow />
    <div class="three-information">
        <ShadowInfo />
    </div>

    <SpotLight />
    <div class="three-information">
        <SpotlightInfo />
    </div>

    <Fog />
    <div class="three-information">
        <FogInfo />
    </div>
  </div>
</template>