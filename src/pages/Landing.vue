<template>
  <div class="landing-page">
    <h1>Prueba técnica</h1>
  </div>
  <EnterButton/>
</template>

<script>
import EnterButton from '../components/Buttons/Enter.vue';

export default {
  name: 'LandingPage',
  components: {
    EnterButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
