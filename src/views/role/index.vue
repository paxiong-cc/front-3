<template>
  <div class="role-box">
    <TabBar />
    <RouterView />
  </div>
</template>

<script lang="ts">
import TabBar from '@/components/TabBar/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    TabBar
  }
})
</script>

<style lang="scss" scoped>

</style>
