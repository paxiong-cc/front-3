<template>
  <aside class="aside-box">
    <a-menu
      v-model:openKeys="collapse.openKeys"
      v-model:selectedKeys="collapse.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapse.collapsed"
    >
      <div v-for="item in path" :key="item.key">
        <a-sub-menu :key="item.key">
          <template #title>
            <span><MailOutlined /><span>{{ item.title }}</span></span>
          </template>
          <div
            v-for="_item in item.children"
            :key="_item.key"
            @click="jumpItem(item.path, _item.path)"
          >
            <a-menu-item
              :key="_item.key"
            >{{ _item.title }}</a-menu-item>
          </div>
        </a-sub-menu>
      </div>
    </a-menu>
  </aside>
</template>

<script lang="ts">
// icon
import {
  MailOutlined
} from '@ant-design/icons-vue'

import { defineComponent, reactive, inject, onBeforeMount, onUnmounted } from 'vue'
import { BusInterface } from '@/utils/eventBus'
import asideList from './list/index'
import router from '@/router/index'

export default defineComponent({
  components: {
    MailOutlined
  },

  setup() {
    // 侧边栏对应的路径数组
    const path = asideList
    // 侧边栏对象
    const collapse = reactive({
      collapsed: false, // 折叠
      selectedKeys: [''], // 单路由或者小路由
      openKeys: [''], // 选中的keys, 对应大路由模块, 可折叠
      preOpenKeys: [''] // 上一次打开的keys
    })
    // eventBus通信 与TabBar通信
    const bus = inject<BusInterface>('$bus')

    onBeforeMount(() => {
      // 与TabBar通信
      bus.$on('toggle', (data) => {
        collapse.collapsed = data
        collapse.openKeys = collapse.collapsed ? [] : collapse.preOpenKeys
      })

      // 处理页面刷新路径喝key对应关系
      const currentPath = router?.currentRoute?.value?.fullPath.split('/') // ['', 'role', 'manage']
      // 获取第一层级的idx
      const idxF = path.findIndex(item => item.path === ('/' + currentPath[1]))
      if (idxF !== -1) {
        // 获取第二层级idx
        const idxS = path[idxF]?.children.findIndex(item => item.path === (currentPath[2]))

        if (idxS !== -1) {
          collapse.selectedKeys = [`${path[idxF]?.children[idxS].key}`]
          collapse.openKeys = [`sub${idxF + 1}`]
          collapse.preOpenKeys = [`sub${idxF + 1}`]
        }
      }
    })

    onUnmounted(() => {
      bus.$off('toggle')
    })

    // 跳转到对应的路由
    const jumpItem = (p1, p2) => {
      router.push(`${p1}/${p2}`)
    }

    return {
      collapse,
      path,
      jumpItem
    }
  }
})
</script>

<style lang="scss" scoped>
.aside-box {
  height: 100%;
  // background-color: $aside-bg;
}

/* 修改组件样式 */
.ant-menu {
  height: 100% !important;
}
</style>
