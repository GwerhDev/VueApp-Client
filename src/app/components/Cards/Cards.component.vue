<style scoped lang="scss" src="./Cards.component.scss"/>
<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useStore } from '../../../middlewares/pinia/store';
  import Card from '../Card/Card.component.vue'

  const store: any = useStore();
  const { items, pagination }: any = storeToRefs( store )

  store.clearDetails();
  store.loadAllItems();
  
</script>

<template>
  <main class="main-container">
    <ul class="grid-container" v-if="items">
      <li v-for="item in items.slice(pagination.min, pagination.max)" :key="item.id" class="grid-item">
        <Card :item="item"/>
      </li>
    </ul>
    <div v-else>
      <h2>Cargando</h2>
    </div>
  </main>
</template>
