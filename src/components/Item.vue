<template>
      <router-link @click="displayPage" v-for="item in items" :key="item.id" class="item" :to="item.url" tag="div">        
          <p>{{ item.name }}</p>
          <ul class="information">
            <li v-for="info in item.information">
              {{ info }}
            </li>
        </ul>
      </router-link>
</template>
  
  <script>
  import { itemData } from '../js/item-data';
  
  export default {
    data() {
      return {
        items: itemData,
      };
    },
    methods: {
      displayPage() {
        const main = document.querySelector('main');
        main.classList.remove('hidden')
      }
    }
  };
  </script>