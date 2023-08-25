<style scoped lang="scss" src="./NavBar.component.scss"/>
<script setup lang="ts">
  import { useStore } from '../../../middlewares/pinia/store';
  import { useRouter } from 'vue-router';
  import { $d } from '../../../utils/cssSelector';

  const router: any = useRouter();
  const store: any = useStore();
  var inputValue: string;

  function handleInput(e: any) {
    inputValue = e.target.value
  }

  function search(e: string) {
    store.filterItemsByTitle(e)
    router.push(`/home`);
  }

  function openMenu() {
    $d(".close-menu-container").style.display="flex";
    $d(".menu-container").style.display="flex";
    $d(".nav-menu-ul").style.height="100vh";
    $d(".burger-menu-container").style.display="none";
  }

  function closeMenu() {
    $d(".menu-container").style.display="none";
    $d(".nav-menu-ul").style.height="2.5rem";
    $d(".burger-menu-container").style.display="flex";
    $d(".close-menu-container").style.display="none";
  }

</script>

<template>
  <div class="nav-container">
    <main class="nav-menu">
      <ul class="nav-menu-ul">
        <div class="burger-menu-container">
          <img src="../../../assets/svg/icon-burger-menu.svg" @click="openMenu()" alt="">
        </div>
        <div class="close-menu-container">
          <span @click="closeMenu()">X</span>
        </div>
        <div class="menu-container">
          <li class="mr-2">
            <router-link class="router-link" to='/home'>
              Inicio
            </router-link>
          </li>
          <li class="mr-2">
            <router-link class="router-link" to='/documentation'>
              Documentación
            </router-link>
          </li>
          <li class="mr-2">
            <a class="router-link" href='https://github.com/GwerhDev/VueApp-Client' target="_blank">
              Repositorio
            </a>
          </li>
          <li class="mr-2">
            <router-link class="router-link" to='/about'>
              About
            </router-link>
          </li>
        </div>
        <div class="searcher-container">
          <input type="text" @input="(e) => handleInput(e)">
          <button class="search-button" @click="search(inputValue)">Buscar</button>
        </div>
      </ul>
    </main>
  </div>
</template>
