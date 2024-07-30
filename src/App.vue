<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <NavBar @toggle-dark-mode="toggleDarkMode" :isDarkMode="isDarkMode" />
    <div class="main-container">
      <router-view :isDarkMode="isDarkMode" />
    </div>
  </div>
</template>

<script>
import NavBar from './views/NavBar.vue'

export default {
  name: 'App',
  components: {NavBar},
  data() {
    return {
      isDarkMode: false
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  transition: background-color 0.3s, color 0.3s;
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
  transition: background-color 0.3s;
}

.dark-mode {
  background-color: #1a202c;
  color: #e2e8f0;
}

.dark-mode .main-container {
  background-color: #2d3748;
}
</style>
