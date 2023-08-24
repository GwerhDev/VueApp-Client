<script setup lang="ts">

</script>

<template>
  <router-link class="router-link" to='/home'>
    Entrar
  </router-link>
</template>

<style scoped>
.router-link{
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

.router-link:hover {
  border-color: var(--primary-color);
}
.router-link:focus,
.router-link:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

</style>