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
      <button class="pag-button" v-bind:disabled="pagination.currentPage === 1" @click="setPage(1)">{{"<<"}}</button>
      <button class="pag-button" v-bind:disabled="pagination.currentPage === 1" @click="setPage(pagination.currentPage-1)">{{"<"}}</button>
      <button class="pag-button" v-bind:disabled="pagination.currentPage === page" v-for="page in pagination.totalPages" :key="page" @click="setPage(page)">{{ page }}</button>
      <button class="pag-button" v-bind:disabled="pagination.currentPage === pagination.totalPages" @click="setPage(pagination.currentPage+1)">{{">"}}</button>
      <button class="pag-button" v-bind:disabled="pagination.currentPage === pagination.totalPages" @click="setPage(pagination.totalPages)">{{">>"}}</button>
    </ul>
  </div>
</template>
