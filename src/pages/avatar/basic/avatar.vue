<template>
  <view v-reSize id="container" class="container">
    <y-avatar :src="imgSrc" :isCircle="false" :size="180"></y-avatar>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import './avatar.scss'
export default defineComponent({
  components: {
    'y-avatar': defineAsyncComponent(() => import('@/components/yui/avatar/avatar.vue'))
  },
  setup() {
    return {
      imgSrc: 'https://res.xsrkj.cn/upload/20210108/0bbbfeb24fba8ec3e3f4aa99cc25050b.jpg'
    };
  }
});
</script>