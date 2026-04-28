<template>
  <div class="builds-view">
    <div class="actions-bar">
      <button class="add-build-btn">Add Build</button>
      <div class="right-actions">
        <button class="icon-btn filter-btn">
          <Icon icon="mdi:filter-variant" /> Filter
        </button>
        <button class="icon-btn sort-btn">
          <Icon icon="mdi:sort" /> Sort
        </button>
      </div>
    </div>

    <div class="builds-list">
      <BuildCard v-for="build in mockBuilds" :key="build.id" :build="build" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import BuildCard from '../components/BuildCard.vue';
import { mockBuilds } from '../data/mockBuilds.js';
</script>

<style scoped>
.builds-view {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.actions-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.add-build-btn {
  background-color: var(--color-purple-base);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
}

.add-build-btn:hover {
  background-color: var(--color-purple-light);
}

.right-actions {
  display: flex;
  gap: 10px;
}

.icon-btn {
  background-color: var(--color-purple-dark);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.icon-btn:hover {
  background-color: var(--color-purple-light);
}

.builds-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
