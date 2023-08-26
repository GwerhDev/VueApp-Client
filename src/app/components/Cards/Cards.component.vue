<style scoped lang="scss" src="./Cards.component.scss"/>
<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useStore } from '../../../middlewares/pinia/store';
  import Card from '../Card/Card.component.vue';

  const store: any = useStore();
  const { filteredItems, pagination }: any = storeToRefs( store );

  store.clearDetails();  
</script>

<template>
  <main class="main-container">
    <ul class="grid-container" v-if="filteredItems?.length > 1">
      <li v-for="item in filteredItems.slice(pagination.min, pagination.max)" :key="item.id" class="grid-item">
        <Card :item="item"/>
      </li>
    </ul>
    <div class="mt-5 pl-5 pr-5" v-else-if="filteredItems?.length === 0">
      <h2>No se han encontrado resultados para su búsqueda.</h2>
    </div>
    <div v-else>
      <h2>Cargando...</h2>
    </div>
  </main>
</template>
