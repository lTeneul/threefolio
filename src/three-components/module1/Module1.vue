<script>
  import HideButton from '@/components/HideButton.vue';
  import CubeSimpleInfo from './cubeSimple/CubeSimpleInfo.vue';
  import CubeSimple from './cubeSimple/CubeSimple.vue';
  import OrbitalControl from './orbitalControl/OrbitalControl.vue';
  import OrbitalControlInfo from './orbitalControl/OrbitalControlInfo.vue';


  export default {
    components: {
    HideButton,
    CubeSimpleInfo,
    CubeSimple,
    OrbitalControl,
    OrbitalControlInfo
    },
}

</script>

<template>
  <div class="view-wrapper">
    <HideButton />
    
    <h3>Module 1</h3>

    <CubeSimple />
    <div class="three-information">
        <CubeSimpleInfo />
    </div>

    <OrbitalControl />
    <div class="three-information">
        <OrbitalControlInfo />
    </div>
  </div>
</template>