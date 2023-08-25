<style scoped lang="scss" src="./Pagination.component.scss"/>
<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useStore } from '../../../middlewares/pinia/store';

  const store: any = useStore();
  const { pagination }: any = storeToRefs( store );

  function setPage(page: number) {
    store.setPage(page)    
  }
</script>

<template>
  <div class="pagination-container">
    <ul class="pagination-buttons">
      <button v-for="page in pagination.totalPages" :key="page" @click="setPage(page)">{{ page }}</button>
    </ul>
  </div>
</template>
