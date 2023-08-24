<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const props = defineProps({
    item: {
      type: Object,
      required: true
    }
  });

  const router = useRouter();

  function redirectToDetails() {
    router.push(`/details/${props.item.id}`);
  }
</script>

<template>
  <div class="card-container">
    <span>{{ props.item.title }}</span>
    <button @click="redirectToDetails">ver más detalles</button>
  </div>
</template>

<style scoped>
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: .1rem;
    padding: 2rem;
    height: 200px;
    border-radius: 1rem;
    background-color: #363636;
    border: solid;
    border-width: 2px;
    border-color: var(--primary-color);
  }

</style>