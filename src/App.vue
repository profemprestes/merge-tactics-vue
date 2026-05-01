<template>
  <div id="app-wrapper">
    <nav class="w-full bg-black/50 border-b border-white/10 p-4 flex gap-6 justify-center text-sm font-bold tracking-wider uppercase mb-4">
      <router-link
        to="/"
        class="text-gray-400 hover:text-white transition-colors"
        active-class="text-amber-400"
      >
        Builds
      </router-link>
      <router-link
        to="/generator"
        class="text-gray-400 hover:text-white transition-colors"
        active-class="text-amber-400"
      >
        Generator
      </router-link>
      <router-link
        to="/troops"
        class="text-gray-400 hover:text-white transition-colors"
        active-class="text-amber-400"
      >
        Tropas
      </router-link>
      <router-link
        to="/tier-list"
        class="text-gray-400 hover:text-white transition-colors"
        active-class="text-amber-400"
      >
        Tier List
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped>
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: transparent;
}
</style>
