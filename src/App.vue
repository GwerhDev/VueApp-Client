<script setup lang="ts">
  import { useStore } from './middlewares/store/index';

  const store: any = useStore();
  store.loadAllItems();
</script>

<template><router-view/></template>
./middlewares/store/index