<template>
  <div id="app">
    <TheHeader />
    <nav class="main-nav">
      <router-link to="/" class="nav-link" active-class="active">Generator</router-link>
      <router-link to="/builds" class="nav-link" active-class="active">Builds</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
</script>

<style scoped>
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  background-color: transparent;
}

.main-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.nav-link {
  padding: 10px 20px;
  background-color: var(--color-purple-dark);
  color: var(--color-neutral);
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: var(--color-purple-base);
  color: #fff;
}

.nav-link.active {
  background-color: var(--color-purple-base);
  color: #fff;
  box-shadow: 0 0 10px rgba(122, 46, 192, 0.5);
}

@media (prefers-color-scheme: light) {
  .nav-link {
    background-color: #ffffff;
    color: var(--color-purple-deep);
    border: 1px solid var(--color-neutral);
  }
  .nav-link:hover {
    background-color: #f0e6fa;
    color: var(--color-purple-base);
  }
  .nav-link.active {
    background-color: var(--color-purple-base);
    color: #fff;
    border-color: var(--color-purple-base);
  }
}
</style>
