<style scoped lang="scss" src="./Card.component.scss"/>
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
    <button @click="redirectToDetails">Ver más detalles</button>
  </div>
</template>
