<template>
    <button @click="toggleVisibility" id="hide-button"><i class="fa-solid fa-sharp fa-xmark"></i></button>
</template>

<script>
export default {
  data() {
    return {
      showDiv: true // Initialisez cette propriété à true pour afficher la div par défaut
    };
  },
  methods: {
    toggleVisibility() {
        const test = document.querySelector('main')
        test.classList.add('hidden')
    }
  }
};
</script>