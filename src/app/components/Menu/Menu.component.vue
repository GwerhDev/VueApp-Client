<style scoped lang="scss" src="./Menu.component.scss"/>
<script setup lang="ts">
</script>

<template>
  <li class="mr-2">
    <router-link to='/home'>
      Inicio
    </router-link>
  </li>
  <li class="mr-2">
    <a href='https://gwerhdev.github.io/VueApp-Client/' target="_blank">
      Documentación
    </a>
  </li>
  <li class="mr-2">
    <a href='https://github.com/GwerhDev/VueApp-Client' target="_blank">
      Repositorio
    </a>
  </li>
  <li class="mr-2">
    <router-link to='/about'>
      About
    </router-link>
  </li>
</template>
