<template>
  <NavBar />
  <div class="main-container">
    <router-view />
  </div>
</template>

<script>
import NavBar from './views/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f5f5;
}

.main-container {
  margin-top: 10px;
  padding: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
