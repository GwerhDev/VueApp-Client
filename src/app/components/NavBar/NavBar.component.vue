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

<style scoped>
.nav-container {
  width: 100vw;
}
.nav-menu {
  padding-left: 90px;
  padding-right: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-menu-ul {
  background-color: #17171791;
  backdrop-filter: blur(10px);
  width: 100%;
  height: 4rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  padding-left: 45px;
  padding-right: 45px;
}

input {
  height: 1.6rem;
}

.search-button {
  background-color: var(--primary-color);
  transition-duration: .4s;
}

.search-button:hover {
  background-color: black;
}

</style>