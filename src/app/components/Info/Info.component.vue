<style scoped lang="scss" src="./Info.component.scss"/>
<script setup lang="ts">
  import { useStore } from '../../../middlewares/pinia/store';
  import { useRouter } from 'vue-router';

  const store: any = useStore();
  const router: any = useRouter();
  let isDataLoaded = false;

  const { id } = router.currentRoute._value.params;
  await store.getItemsById(id)
  console.log(store.details.title)
</script>

<template>
  <main class="main-container">
    <div v-if="isDataLoaded">
      <h1>{{ store.details.title }}</h1>
      <p>{{ store.details.body }}</p>
    </div>
    <div v-else>
      <p>Cargando información...</p>
    </div>
  </main>
</template>