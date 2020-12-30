<template>
  <div class="manage-container">
    <!-- 顶部 -->
    <TabBar />

    <section class="body-box">
      <!-- 侧边栏 -->
      <SideBar />

      <!-- 路由视图 -->
      <RouterView style="flex: 1" />
    </section>
  </div>
</template>

<script lang="ts">
import TabBar from './components/TabBar/index.vue'
import SideBar from './components/SideBar/index.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    TabBar,
    SideBar
  }
})

</script>

<style lang="scss" scoped>
.manage-container {
  @include flex($dr: column)
}

.body-box {
  display: flex;
  flex: 1;
}
</style>
