<style scoped lang="scss" src="./NavBar.component.scss"/>
<script setup lang="ts">

</script>

<template>
  <div class="nav-container">
    <main class="nav-menu">
      <ul class="nav-menu-ul">
        <li>
          <router-link class="router-link" to='/home'>
            Home
          </router-link>
        </li>
        <li>
          <input type="text">
          <button class="search-button">Buscar</button>
        </li>
      </ul>
    </main>
  </div>
</template>
