import { createRouter, createWebHistory } from 'vue-router'
import GeneratorView from './views/GeneratorView.vue'
import BuildsView from './views/BuildsView.vue'

const routes = [
  {
    path: '/',
    name: 'Generator',
    component: GeneratorView
  },
  {
    path: '/builds',
    name: 'Builds',
    component: BuildsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
