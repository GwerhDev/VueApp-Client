<style scoped lang="scss" src="./Menu.component.scss"/>
<script setup lang="ts">
  import { useStore } from '../../../middlewares/store';
  import { upToTop } from '../../../utils/upToTop';
  import { closeMenu } from '../../../helpers/menu';

  const store = useStore();

  function home() {
    closeMenu();
    store.loadAllItems();
    upToTop();
  }

  function about() {
    closeMenu();
    upToTop();
  }

</script>

<template>
  <li class="mr-1 ml-1">
    <router-link class="menu-letters" @click="home()" to='/home'>
      Inicio
    </router-link>
  </li>
  <li class="mr-1 ml-1">
    <a class="menu-letters" @click="closeMenu()" href='https://gwerhdev.github.io/VueApp-Client/' target="_blank">
      Documentación
    </a>
  </li>
  <li class="mr-1 ml-1">
    <a class="menu-letters" @click="closeMenu()" href='https://github.com/GwerhDev/VueApp-Client' target="_blank">
      Repositorio
    </a>
  </li>
  <li class="mr-1 ml-1">
    <router-link class="menu-letters" @click="about()" to='/about'>
      About
    </router-link>
  </li>
</template>
