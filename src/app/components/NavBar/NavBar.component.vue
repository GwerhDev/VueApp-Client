<style scoped lang="scss" src="./NavBar.component.scss"/>
<script setup lang="ts">
  import { useStore } from '../../../middlewares/pinia/store';
  import { useRouter } from 'vue-router';
  import Menu from '../Menu/Menu.component.vue';
  import BurgerMenu from '../BurgerMenu/BurgerMenu.component.vue'

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

</script>

<template>
  <div class="nav-container-desk">
    <main class="nav-menu-desk">
      <ul class="nav-menu-ul-desk">
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
