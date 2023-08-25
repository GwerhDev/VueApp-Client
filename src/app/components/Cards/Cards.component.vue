<style scoped lang="scss" src="./Cards.component.scss"/>
<script setup lang="ts">
  import { useStore } from '../../../middlewares/pinia/store';
  import Card from '../Card/Card.component.vue'

  const store: any = useStore();
  const min: number = 0;
  const max: number = 10;

  store.getAllItems();
</script>

<template>
  <main class="main-container">
    <ul class="grid-container">
      <li v-for="item in store.items.slice(min, max)" :key="item.id" class="grid-item">
        <Card :item="item"/>
      </li>
    </ul>  
  </main>
</template>
