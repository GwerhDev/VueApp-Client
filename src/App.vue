<script setup lang="ts">
  import { useStore } from './middlewares/pinia/store/index';

  const store: any = useStore();
  store.loadAllItems();
</script>

<template><router-view/></template>
