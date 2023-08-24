<script setup lang="ts">
  import { useStore } from '../../../middlewares/pinia/store';
  import Card from '../Card/Card.component.vue'

  const store: any = useStore();

  store.getAllItems();
</script>

<template>
  <main class="main-container">
    <ul class="grid-container">
      <li v-for="item in store.items" :key="item.id" class="grid-item">
        <Card :item="item"/>
      </li>
    </ul>  
  </main>
</template>

<style scoped>
.main-container {
  margin-top: 100px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  padding-left: 90px;
  padding-right: 90px;
}

.grid-item {
  padding: 20px;
}
</style>