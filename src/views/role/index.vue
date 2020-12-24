<template>
  <div class="role-box">
    <!-- 顶部 -->
    <TabBar />

    <section class="body-box">
      <!-- 侧边栏 -->
      <aside style="width: 256px; height: 100%">
        <!-- <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
          <MenuUnfoldOutlined v-if="collapsed" />
          <MenuFoldOutlined v-else />
        </a-button> -->
        <!-- v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys" -->
        <a-menu
          mode="inline"
          theme="dark"
          :inline-collapsed="collapsed"
          @click="tapMenu"
        >
          <a-menu-item key="1">
            <PieChartOutlined />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <DesktopOutlined />
            <span>Option 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <InboxOutlined />
            <span>Option 3</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span><MailOutlined /><span>Navigation One</span></span>
            </template>
            <a-menu-item key="5">Option 5</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span><AppstoreOutlined /><span>Navigation Two</span></span>
            </template>
            <a-menu-item key="9">Option 9</a-menu-item>
            <a-menu-item key="10">Option 10</a-menu-item>
            <a-sub-menu key="sub3" title="Submenu">
              <a-menu-item key="11">
                Option 11
              </a-menu-item>
              <a-menu-item key="12">
                Option 12
              </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
      </aside>

      <!-- 路由视图 -->
      <RouterView style="flex: 1" />
    </section>
  </div>
</template>

<script lang="ts">
import TabBar from '@/components/TabBar/index.vue'
import { defineComponent, reactive, ref, watch } from 'vue'

export default defineComponent({
  components: {
    TabBar
  },

  setup() {
    const selectedKeys = reactive(['1'])

    let preOpenKeys = reactive(['sub1'])
      , collapsed = ref(false)
      , openKeys = reactive(['sub1'])

    watch(openKeys, (val, oldVal) => {
      console.log(val)
      preOpenKeys = reactive(oldVal)
    })

    // 折叠
    const toggleCollapsed = () => {
      collapsed = ref(!collapsed.value)
      openKeys = collapsed.value ? [] : preOpenKeys
    }

    // 点击menu
    const tapMenu = ({ key, keyPath }) => {
      console.log(key)
      console.log(keyPath)
    }

    return {
      collapsed,
      selectedKeys,
      openKeys,
      preOpenKeys,
      toggleCollapsed,
      tapMenu
    }
  }
})

</script>

<style lang="scss" scoped>
.role-box {
  @include flex($dr: column)
}

.body-box {
  display: flex;
  flex: 1;
}

/* 修改组件样式 */
.ant-menu {
  height: 100% !important;
}
</style>
