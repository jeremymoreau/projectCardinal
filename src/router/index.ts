import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import SlitLamp from '../views/SlitLamp.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/slit-lamp',
    name: 'SlitLamp',
    component: () => import ('../views/SlitLamp.vue')
  },
  {
    path: '/orthoptics',
    name: 'Orthoptics',
    component: () => import ('../views/Orthoptics.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
