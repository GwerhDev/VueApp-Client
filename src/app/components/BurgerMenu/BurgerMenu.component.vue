<style scoped lang="scss" src="./BurgerMenu.component.scss"/>
<script setup lang="ts">
  import { useStore } from '../../../middlewares/store';
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

  function exit() {
    store.loadAllItems();
  }

</script>

<template>
  <div class="nav-container">
    <main class="nav-menu">
      <ul class="nav-menu-ul">
        <div class="d-flex align-cent logo-container">
          <div class="d-flex align-cent logo-cont">
            <router-link class="d-flex align-cent logo-image-container" @click="exit()" to='/'>
              <img src="../../../assets/svg/logoipsum.svg" alt="">
            </router-link>
            <div class="close-menu-container">
              <span @click="closeMenu()">X</span>
            </div>
          </div>          
          <div class="burger-menu-container">
              <img src="../../../assets/svg/icon-burger-menu.svg" @click="openMenu()" alt="">
          </div>
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
../../../middlewares/store