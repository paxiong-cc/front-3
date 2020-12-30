import { RouteRecordRaw } from 'vue-router'

const ControlRouter: Array<RouteRecordRaw> = [
  {
    path: '/control',
    name: '测试',
    component: () => import('@/layout/index.vue'),
    redirect: '/control/control',
    children: [
      {
        path: 'control',
        name: '测试',
        component: () => import('@/views/control/index.vue')
      }
    ]
  }
]

export default ControlRouter
