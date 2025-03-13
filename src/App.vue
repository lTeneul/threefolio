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

  <div class="wrapper">
    <router-link @click="displayPage" to="/solar" class="item" tag="div" style="background-color: #77B0AA;">MilkyWay</router-link>
    <router-link @click="displayPage" to="/king-hall" class="item" tag="div" style="background-color: #77B0AA;">King Hall</router-link>
  </div>
  

  <main class="hidden">
    <RouterView />
  </main>
</template>
