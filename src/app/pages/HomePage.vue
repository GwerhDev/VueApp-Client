<script setup lang="ts">
  import NavBar from '../components/NavBar/NavBar.component.vue';
  import { useStore } from '../../middlewares/pinia/store/index';

  const store = useStore();

  store.getAllItems();

</script>

<template>
  <NavBar/>
  <ul>
    {{store.items.map((e: any) => { return (
      e.id
    )
    })}}
  </ul>
</template>

<style scoped>

</style>