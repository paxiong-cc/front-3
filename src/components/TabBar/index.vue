<template>
  <header class="header-box">
    <div class="left">logo</div>
    <div class="right">趴熊</div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  }
})
</script>

<style lang="scss" scoped>
.header-box {
  @include flex($row: space-between);
  padding: $p-lr-20;
  background-color: $theme-color;
}
</style>
