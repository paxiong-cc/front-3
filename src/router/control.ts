import { RouteRecordRaw } from 'vue-router'

const ControlRouter: Array<RouteRecordRaw> = [
  {
    path: '/control',
    name: 'Control',
    component: () => import('@/views/control/index.vue')
  }
]

export default ControlRouter
