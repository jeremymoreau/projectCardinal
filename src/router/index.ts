import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue'
import SlitLamp from '../views/SlitLamp.vue'
import Orthoptics from '../views/Orthoptics.vue'
import SideMenuInstall from '../views/SideMenuInstall.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/slit-lamp',
    name: 'SlitLamp',
    component: SlitLamp
  },
  {
    path: '/orthoptics',
    name: 'Orthoptics',
    component: Orthoptics
  },

  {
    path: '/install',
    name: 'SideMenuInstall',
    component: SideMenuInstall
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
