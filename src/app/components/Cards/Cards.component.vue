<style scoped lang="scss" src="./Cards.component.scss"/>
<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useStore } from '../../../middlewares/pinia/store';
  import Card from '../Card/Card.component.vue';
  import FilterInfo from '../FilterInfo/FilterInfo.component.vue';

  const store: any = useStore();
  const { filteredItems, pagination, filterInfo }: any = storeToRefs( store );

  store.clearDetails();  
</script>

<template>
  <main class="main-container">
    <div class="d-flex fd-col align-cent inner-container">
      <div v-if="filteredItems?.length > 1" class="d-flex fd-col align-cent inner-container">
        <FilterInfo/>
      </div>
      <ul class="grid-container" v-if="filteredItems?.length > 1">
        <li v-for="item in filteredItems.slice(pagination.min, pagination.max)" :key="item.id" class="grid-item">
          <Card :item="item"/>
        </li>
      </ul>
      <div class="mt-5 pl-5 pr-5" v-else-if="filteredItems?.length === 0">
        <h2>{{ filterInfo }}</h2>
        <img src="../../../assets/png/notfound-icon.png" alt="not found">
      </div>
      <div v-else>
        <h2>Cargando...</h2>
      </div>
    </div>
  </main>
</template>
