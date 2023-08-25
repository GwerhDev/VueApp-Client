<script setup lang="ts">
import EnterButton from '../components/Buttons/Enter/EnterButton.component.vue'
</script>

<template>
  <main class="main-container">
    <h1>VueApp - FrontEnd</h1>
    <div class="mb-4">
      <span>Tecnologías: </span>
      <i>Pinia, Axios & TypeScript</i>
    </div>
    <EnterButton/>
  </main>
</template>

<style scoped>

.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>