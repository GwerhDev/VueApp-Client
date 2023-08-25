<script setup lang="ts">
import EnterButton from '../components/Buttons/Enter/EnterButton.component.vue'
</script>

<template>
  <main class="main-container-landing">
    <h1>VueApp - FrontEnd</h1>
    <div class="mb-4">
      <span>Tecnologías: </span>
      <i>Pinia, Axios & TypeScript</i>
    </div>
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