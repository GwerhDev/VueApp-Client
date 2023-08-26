<style scoped lang="scss" src="./Info.component.scss"/>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useStore } from '../../../middlewares/pinia/store';
  import { storeToRefs } from 'pinia';
  import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';

  const store: any = useStore();
  const router: any = useRouter();
  const { details }: any = storeToRefs( store );

  const { id } = router.currentRoute._value.params;
  store.loadItemById(id);
</script>

<template>
  <main class="main-container-info">
    <div class="mb-4" v-if="details">
      <h1 v-if="details.title">{{ capitalizeFirstLetter(details.title) }}</h1>
      <div>
        <h2>Detalles</h2>
        <span v-if="details.body">
          {{ capitalizeFirstLetter(details.body) }}
        </span>
      </div>
    </div>
    <div class="mb-4" v-else>
      <h2>Cargando...</h2>
    </div>
  </main>
</template>