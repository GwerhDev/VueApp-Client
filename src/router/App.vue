<template>
  <LandingPage/>
</template>

<script>
import LandingPage from '../pages/Landing.vue';

export default {
  name: 'VueApp',
  components: {
    LandingPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
