<script setup lang="ts"> 
  import NavBar from './app/components/NavBar/NavBar.component.vue'; 
  import { useStore } from './middlewares/store/index'; 
  const store: any = useStore(); 
  store.loadAllItems(); 
</script> 
 
<template> 
  <template v-if="$route.path !== '/'"> 
    <nav-bar/> 
  </template>
  <router-view/> 
</template> 