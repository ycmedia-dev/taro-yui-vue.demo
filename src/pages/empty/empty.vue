<template>
  <view v-reSize id="container" class="container">
    <y-empty tip="自定义文字">
      <view class="box">这是插槽</view>
    </y-empty>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import './empty.scss'
export default defineComponent({
  components: {
    'y-empty': defineAsyncComponent(() => import('@/components/yui/empty/empty.vue'))
  },
  setup() {
    return {

    };
  }
});
</script>
