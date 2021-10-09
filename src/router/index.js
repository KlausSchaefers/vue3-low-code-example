import { createRouter, createWebHashHistory } from 'vue-router'
import QUXExample from '../views/QUXExample.vue'
import FigmaExample from '../views/FigmaExample.vue'

const routes = [
  {
    path: '/',
    name: 'QuantUx',
    component: QUXExample
  },
  {
    path: '/:screenName.html',
    name: 'QuantUx2',
    component: QUXExample
  },
  {
    path: '/figma/',
    name: 'Figma',
    component: FigmaExample
  },
  {
    path: '/figma/:screenName.html',
    name: 'Figma2',
    component: FigmaExample
  } 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
