<style scoped lang="scss" src="./Card.component.scss"/>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';

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
    <img src="../../../assets/svg/logoipsum.svg" height="80" class="mt-2 mb-2" alt="iamge-placeholder">
    <h3>{{ capitalizeFirstLetter(props.item.title) }}</h3>
    <button @click="redirectToDetails">Ver más detalles</button>
  </div>
</template>
