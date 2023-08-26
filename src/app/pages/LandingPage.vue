<script setup lang="ts">
  import EnterButton from '../components/Buttons/Enter/EnterButton.component.vue';
  import Presentation from '../components/Presentation/Presentation.component.vue'
</script>

<template>
  <main class="main-container-landing">
    <Presentation/>
    <EnterButton/>
  </main>
</template>

<style scoped>
  .main-container-landing {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>