<style scoped lang="scss" src="./FilterInfo.component.scss"/>
<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useStore } from '../../../middlewares/pinia/store';

  const store: any = useStore();
  const { filterInfo }: string = storeToRefs( store );

  store.clearDetails();  
</script>

<template>
  <section class="filter-info">
    <span>Mostrando: {{ filterInfo }}</span>
  </section>
</template>
