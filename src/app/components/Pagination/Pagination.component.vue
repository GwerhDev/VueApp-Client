<style scoped lang="scss" src="./Pagination.component.scss"/>
<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useStore } from '../../../middlewares/store';
import { upToTop } from '../../../utils/upToTop';

  const store: any = useStore();
  const { pagination }: any = storeToRefs( store );

  function setPage(page: number) {
    store.setPage(page);
    upToTop();
  }
</script>

<template>
  <div class="pagination-container">
    <ul class="pagination-buttons" v-if="pagination.totalPages !==0">
      <button class="pag-button" v-bind:disabled="pagination.currentPage === page" v-for="page in pagination.totalPages" :key="page" @click="setPage(page)">{{ page }}</button>
    </ul>
  </div>
</template>
../../../middlewares/store