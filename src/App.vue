<template>
  <div id="app-wrapper">
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
