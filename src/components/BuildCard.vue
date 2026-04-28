<template>
  <div class="build-card">
    <div class="card-header">
      <h3>{{ build.title }}</h3>
    </div>
    <div class="card-strategy">
      <p><strong>Strategy:</strong> {{ build.strategy }}</p>
    </div>
    <div class="card-deck">
      <div v-for="(unit, index) in build.deck" :key="index" class="unit-icon-wrapper">
        <img :src="getImagePath(unit.image)" :alt="unit.name" class="unit-icon" />
      </div>
    </div>
    <div class="card-footer">
      <div class="footer-left">
        <span class="likes"><Icon icon="mdi:thumb-up-outline" /> {{ build.likes }}</span>
      </div>
      <div class="footer-right">
        <span class="date">{{ build.date }}</span>
        <span class="author">by {{ build.author }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  build: {
    type: Object,
    required: true
  }
});

const getImagePath = (imageName) => {
  return `${import.meta.env.BASE_URL}images/${imageName}`;
};
</script>

<style scoped>
.build-card {
  background-color: var(--color-purple-dark);
  border-radius: 8px;
  padding: 15px;
  text-align: left;
  border: 1px solid var(--color-purple-light);
}

.card-header h3 {
  margin: 0 0 10px 0;
  color: var(--color-accent-gold);
  font-size: 1.2em;
}

.card-strategy {
  margin-bottom: 15px;
  font-size: 0.9em;
  color: #e0e0e0;
}

.card-deck {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.unit-icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-purple-deep);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 2px solid var(--color-neutral);
}

.unit-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.85em;
  color: var(--color-neutral);
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 5px;
}

.footer-right {
  display: flex;
  gap: 15px;
}

@media (prefers-color-scheme: light) {
  .build-card {
    background-color: #ffffff;
    border-color: #e0e0e0;
    color: var(--color-purple-deep);
  }
  .card-strategy {
    color: #333;
  }
  .unit-icon-wrapper {
    background-color: #f5f0fa;
  }
}
</style>
