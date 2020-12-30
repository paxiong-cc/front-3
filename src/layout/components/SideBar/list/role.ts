import { RouterList } from './interface'

const role:RouterList = {
  title: '权限管理',
  path: '/role',
  children: [
    {
      title: '人员管理',
      path: 'manage'
    }
  ]
}

export default role
