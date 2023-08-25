<script setup lang="ts">
  import EnterButton from '../components/Buttons/Enter/EnterButton.component.vue'
</script>

<template>
  <main class="main-container-landing">
    <img class="logo" src="../../assets/svg/vue.svg" alt="">
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

  .logo {
    height: 5em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

</style>