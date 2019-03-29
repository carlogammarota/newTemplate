<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <vue-canvas-nest :config="{color:'255,0,0', count: 88}"></vue-canvas-nest>

    <!-- <auth class="auth"/> -->
    
    <router-view />



  </div>
</template>

<script>

import vueCanvasNest from 'vue-canvas-nest'
import auth from "./forms/auth"
export default {
  name: 'App',
  components: { vueCanvasNest, auth }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.auth{
  margin: auto;
}

</style>
