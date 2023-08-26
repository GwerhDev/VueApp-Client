<style scoped lang="scss" src="./NavBar.component.scss"/>
<script setup lang="ts">
  import { useStore } from '../../../middlewares/store';
  import { useRouter } from 'vue-router';

  import { upToTop } from '../../../utils/upToTop';
  import { closeMenu } from '../../../helpers/menu';
  
  import Menu from '../Menu/Menu.component.vue';
  import BurgerMenu from '../BurgerMenu/BurgerMenu.component.vue'

  const router: any = useRouter();
  const store: any = useStore();
  var inputValue: string;

  function handleInput(e: any) {
    inputValue = e.target.value
  }

  function search(e: string) {
    store.filterItemsByTitle(e);
    router.push(`/home`);
    closeMenu();
    upToTop();
  }

  function exit() {
    store.loadAllItems();
  }

</script>

<template>
  <div class="nav-container-desk">
    <main class="nav-menu-desk">
      <ul class="nav-menu-ul-desk">
        <div class="d-flex just-cent align-cent">
          <router-link class="d-flex just-cent align-cent" @click="exit()" to='/'>
            <img class="logo" src="../../../assets/svg/logoipsum.svg" alt="">
          </router-link>
        </div>
        <div class="menu-container-desk">
          <Menu/>
        </div>
        <div class="searcher-container-desk">
          <input type="text" @input="(e) => handleInput(e)">
          <button class="search-button-desk" @click="search(inputValue)">Buscar</button>
        </div>
      </ul>
    </main>
  </div>
  <BurgerMenu/>
</template>
../../../middlewares/store