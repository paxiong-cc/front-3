import { RouterList } from './interface'

const test:RouterList = {
  title: '测试',
  path: '/control',
  children: [
    {
      title: '测试',
      path: 'control'
    }
  ]
}

export default test
