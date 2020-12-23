import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/lrfn/login.vue'

import ControlRouter from './control'
import RoleRouter from './role'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/login'
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  // 角色模块
  ...RoleRouter,
  // 控制模块
  ...ControlRouter,

  {
    path: '/404',
    component: () => import('@/views/lrfn/notFound.vue')
  },

  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
