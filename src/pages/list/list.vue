<template>
  <view v-reSize id="container" class="container">
    <y-list :data="data">
      <template #prepend="{infoL}">
        我是左侧插槽-{{infoL.label}}
      </template>

      <template #append="{infoR}">
        我是右侧插槽-{{infoR.label}}
      </template>
    </y-list>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import './list.scss'
export default defineComponent({
  components: {
    'y-list': defineAsyncComponent(() => import('@/components/yui/list/list.vue'))
  },
  setup() {
    return {
      data: [{
        label: '列表名称1'
      },{
        label: '列表名称2'
      }]
    };
  }
});
</script>
