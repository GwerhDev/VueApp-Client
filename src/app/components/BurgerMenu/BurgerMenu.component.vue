<style scoped lang="scss" src="./BurgerMenu.component.scss"/>
<script setup lang="ts">
  import { useStore } from '../../../middlewares/pinia/store';
  import { useRouter } from 'vue-router';
  import { openMenu, closeMenu } from '../../../helpers/menu';
  import Menu from '../Menu/Menu.component.vue';
import { upToTop } from '../../../utils/upToTop';

  const router: any = useRouter();
  const store: any = useStore();
  var inputValue: string;

  function handleInput(e: any) {
    inputValue = e.target.value
  }

  function search(e: string) {
    store.filterItemsByTitle(e)
    router.push(`/home`);
    upToTop();
    closeMenu();
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
          <Menu></Menu>
        </div>
        <div class="searcher-container mt-5">
          <input type="text" @input="(e) => handleInput(e)">
          <button class="search-button" @click="search(inputValue)">Buscar</button>
        </div>
      </ul>
    </main>
  </div>
</template>
