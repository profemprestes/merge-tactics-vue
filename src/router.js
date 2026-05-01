import { createRouter, createWebHistory } from 'vue-router'
import GeneratorView from './views/GeneratorView.vue'
import BuildsView from './views/BuildsView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
