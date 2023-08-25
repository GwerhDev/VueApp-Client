<style scoped lang="scss" src="./Info.component.scss"/>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useStore } from '../../../middlewares/pinia/store';
  
  const store: any = useStore();
  const router: any = useRouter();

  const { id } = router.currentRoute._value.params;
  store.loadItemById(id)
  console.log(id)

</script>

<template>
  <main class="main-container">
    <h1>Detalles</h1>
  </main>
</template>