import { RouteRecordRaw } from 'vue-router'

const RoleRouter: Array<RouteRecordRaw> = [
  {
    path: '/role',
    name: '权限管理',
    component: () => import('@/layout/index.vue'),
    redirect: '/role/manage',
    children: [
      {
        path: 'manage',
        name: '人员管理',
        component: () => import('@/views/role/manage/index.vue')
      }
    ]
  }
]

export default RoleRouter
