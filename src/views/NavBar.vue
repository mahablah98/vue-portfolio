<template>
  <nav class="navbar" :class="{ 'dark-mode': isDarkMode }">
    <div class="navbar-container">
      <router-link to="/" @click="scrollTop" class="navbar-brand">Home</router-link>
      <ul class="navbar-menu">
        <li v-for="(value, index) in webRoutes" :key="index" class="navbar-item">
          <router-link :to="value.route" class="navbar-link">{{ value.title }}</router-link>
        </li>
      </ul>
      <div class="navbar-icons">
        <NavBarIcons v-for="icon in icons" :key="icon" :selectedIcon="icon" :isDarkMode="isDarkMode" />
      </div>
    </div>
    <button @click="toggleDarkMode" class="dark-mode-toggle" :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
      <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
  </nav>
</template>

<script>
import NavBarIcons from '../components/NavBarIcons';

export default {
  components: { NavBarIcons },
  props: ['isDarkMode'],
  emits: ['toggle-dark-mode'],
  data() {
    return {
      webRoutes: [
        { title: 'Skills', route: '/skills' },
        { title: 'Projects', route: '/projects' },
        { title: 'Contact', route: '/contact' }
      ],
      icons: ['linkedIn', 'gitSource', 'twitter', 'stackOverflow']
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    toggleDarkMode() {
      this.$emit('toggle-dark-mode');
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}
.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}
.navbar-brand {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}
.navbar-brand:hover {
  color: #007bff;
}
.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar-item {
  margin-left: 1.5rem;
}
.navbar-link {
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s;
}
.navbar-link:hover {
  color: #007bff;
}
.navbar-icons {
  display: flex;
  gap: 1rem;
}
.dark-mode-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dark-mode-toggle:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.dark-mode-toggle svg {
  width: 24px;
  height: 24px;
}
.dark-mode .navbar {
  background-color: #1a1a1a;
  color: #fff;
}
.dark-mode .navbar-brand,
.dark-mode .navbar-link {
  color: #fff;
}
.dark-mode .navbar-link:hover {
  color: #007bff;
}
.dark-mode .dark-mode-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dark-mode .dark-mode-toggle svg {
  stroke: #fff;
}
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
  }
  .navbar-menu, .navbar-icons {
    margin-top: 1rem;
  }
  .navbar-item {
    margin-left: 0;
    margin-right: 1rem;
  }
  .dark-mode-toggle {
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>
