<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" @click="scrollTop" class="navbar-brand">Home</router-link>
      <ul class="navbar-menu">
        <li v-for="(value, index) in webRoutes" :key="index" class="navbar-item">
          <router-link :to="value.route" class="navbar-link">{{ value.title }}</router-link>
        </li>
      </ul>
      <div class="navbar-icons">
        <NavBarIcons v-for="icon in icons" :key="icon" :selectedIcon="icon" />
      </div>
    </div>
  </nav>
</template>

<script>
import NavBarIcons from '../components/NavBarIcons';

export default {
  components: { NavBarIcons },
  setup() {
    const webRoutes = [
      { title: 'Skills', route: '/skills' },
      { title: 'Experience', route: '/experiences' },
      { title: 'Contact', route: '/contact' }
    ];
    const icons = ['linkedIn', 'gitSource', 'twitter', 'stackOverflow'];
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return { webRoutes, icons, scrollTop };
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
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s;
}
.navbar-brand:hover {
  color: #3498db;
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
  color: #34495e;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s;
}
.navbar-link:hover {
  color: #3498db;
}
.navbar-icons {
  display: flex;
  gap: 1rem;
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
}
</style>
