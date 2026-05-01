import { createRouter, createWebHistory } from 'vue-router'
import GeneratorView from './views/GeneratorView.vue'
import BuildsView from './views/BuildsView.vue'
import TroopsView from './views/TroopsView.vue'
import TierListView from './views/TierListView.vue'

const routes = [
  {
    path: '/',
    name: 'Builds',
    component: BuildsView
  },
  {
    path: '/generator',
    name: 'Generator',
    component: GeneratorView
  },
  {
    path: '/troops',
    name: 'Tropas',
    component: TroopsView
  },
  {
    path: '/tier-list',
    name: 'Tier List',
    component: TierListView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
