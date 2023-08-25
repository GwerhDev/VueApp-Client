<style scoped lang="scss" src="./Menu.component.scss"/>
<script setup lang="ts">
  import { closeMenu } from '../../../helpers/menu';
</script>

<template>
  <li class="mr-2">
    <router-link @click="closeMenu()" to='/home'>
      Inicio
    </router-link>
  </li>
  <li class="mr-2">
    <a @click="closeMenu()" href='https://gwerhdev.github.io/VueApp-Client/' target="_blank">
      Documentación
    </a>
  </li>
  <li class="mr-2">
    <a @click="closeMenu()" href='https://github.com/GwerhDev/VueApp-Client' target="_blank">
      Repositorio
    </a>
  </li>
  <li class="mr-2">
    <router-link @click="closeMenu()" to='/about'>
      About
    </router-link>
  </li>
</template>
