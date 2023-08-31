<style scoped lang="scss" src="./FilterInfo.component.scss"/>
<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useStore } from '../../../middlewares/store';

  const store: any = useStore();
  const { filterInfo, filteredItems }: any = storeToRefs( store );

  store.clearDetails();
</script>

<template>
  <section class="filter-info mt-2 pr-1">
    <span>Mostrando: {{ filterInfo }} ({{ filteredItems?.length }} resultados)</span>
  </section>
</template>
