<script>
  import Item from './components/Item.vue';
  export default {
    components: {
      Item,
    },
    methods: {
      displayPage() {
        const main = document.querySelector('main');
        main.classList.remove('hidden');
        main.classList.add('main-full');
      }
    },
  }
</script>

<template>
  <header>
      <h1>ThreeJS Demo</h1>
  </header>

  <div class="wrapper">
      <Item />
  </div>
  <router-link @click="displayPage" to="/solar" class="item" tag="div" style="height: 200px; width: 200px; background-color: grey;"></router-link>

  <main class="hidden">
    <RouterView />
  </main>
</template>
