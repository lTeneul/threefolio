<script setup>
  import Item from './components/Item.vue';
</script>

<template>
  <header>
      <h1>ThreeJS Demo</h1>
  </header>

  <div class="wrapper">
      <Item />
      <router-link to="/solar" class="item" tag="div" style="height: 200px; width: 200px; background-color: grey;">
  </router-link>
  </div>

  

  <main class="hidden">
    <RouterView />
  </main>
</template>
