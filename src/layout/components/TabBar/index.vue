<template>
  <header class="header-box">
    <!-- 左侧 -->
    <div class="left">
      <div>logo</div>
      <div class="toggle" @click="toggle">
        <a-button type="primary">
          <MenuUnfoldOutlined v-if="collapse" />
          <MenuFoldOutlined v-else />
        </a-button>
      </div>
    </div>

    <!-- 右侧 -->
    <div class="right">趴熊</div>
  </header>
</template>

<script lang="ts">
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue'

import { defineComponent, ref, inject } from 'vue'
import { BusInterface } from '@/utils/eventBus'

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },

  setup() {
    const collapse = ref(false) // 折叠属性
        , bus = inject<BusInterface>('$bus') // eventBus通信 与SideBar

    // 折叠事件
    const toggle = () => {
      collapse.value = !collapse.value
      // eventBus通信 与SideBar
      bus.$emit('toggle', collapse.value)
    }

    return {
      collapse,
      toggle
    }
  }
})
</script>

<style lang="scss" scoped>
.header-box {
  @include flex($row: space-between);
  padding: $p-lr-20;
  background-color: $theme-color;
}

.left {
  display: flex;
}
</style>
