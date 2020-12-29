<template>
  <aside class="aside-box">
    <a-menu
      v-model:openKeys="collapse.openKeys"
      v-model:selectedKeys="collapse.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapse.collapsed"
    >
      <div v-for="(item, idx) in path" :key="idx">
        <a-sub-menu key="sub1">
          <template #title>
            <span><MailOutlined /><span>Navigation One</span></span>
          </template>
          <div v-for="(_item, _idx) in item.list" :key="_idx">
            <a-menu-item key="5">hhaha</a-menu-item>
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
import listPath from './list/index'

import router from '@/router/index'

export default defineComponent({
  components: {
    MailOutlined
  },

  setup() {
    console.log(router)
    /* 侧边栏对象 */
    const collapse = reactive({
      collapsed: false, // 折叠
      selectedKeys: ['2'], // 选中的keys
      openKeys: ['sub1'], // 默认打开的keys
      preOpenKeys: ['sub1'] // 上一次打开的keys
    })
    const path = listPath
    const bus = inject<BusInterface>('$bus') // eventBus通信 与TabBar通信

    onBeforeMount(() => {
      // 与TabBar通信
      bus.$on('toggle', (data) => {
        collapse.collapsed = data
        collapse.openKeys = collapse.collapsed ? [] : collapse.preOpenKeys
      })
    })

    onUnmounted(() => {
      bus.$off('toggle')
    })

    return {
      collapse,
      path
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
