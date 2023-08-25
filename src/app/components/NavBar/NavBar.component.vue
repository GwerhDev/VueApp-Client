<style scoped lang="scss" src="./NavBar.component.scss"/>
<script setup lang="ts">

</script>

<template>
  <div class="nav-container">
    <main class="nav-menu">
      <ul class="nav-menu-ul">
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
        <li>
          <input type="text">
          <button class="search-button">Buscar</button>
        </li>
      </ul>
    </main>
  </div>
</template>
