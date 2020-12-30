import role from './role'
import test from './test'

// 侧边栏列表
let routerList = [
  role,
  test
]
let count = 0

// 对侧边栏列表做相应的字符串处理
routerList = routerList.map((item, idx) => {
  item.key = `sub${idx + 1}`
  item?.children.forEach((_item) => {
    _item.key = ++count + ''
  })
  return item
})

export default routerList
