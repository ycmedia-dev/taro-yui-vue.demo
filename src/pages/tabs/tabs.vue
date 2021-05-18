<template>
  <view v-reSize id="container" class="container">
    <y-tabs :options="tabList" @onClick="onCatchIndex"></y-tabs>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, Ref } from 'vue'
import './tabs.scss'
import { YTabs } from '@/components/yui/tabs/types/tabs'

class TimePickerService {
  /**
   * 标题
   * */
  tabList: Ref<YTabs.TabItem[]> = ref([
    {
      id: 1,
      label: '标题1',
      badge: {
        value: 22,
        max: 99
      }
    },
    {
      id: 2,
      label: '标题2'
    }
  ])

  constructor() {

  }

  /***
   * 获取组件传值
   * @param val 当前index
   */
  onCatchIndex(index: number, id: number) {
    console.log('当前的栏目index及tab id', index, id)
  }
}

export default defineComponent({
  components: {
    'y-tabs': defineAsyncComponent(() => import('@/components/yui/tabs/tabs.vue'))
    // 'y-tabs': defineAsyncComponent(() => import('../../../../taro-yui-vue/src/components/tabs/tabs.vue'))
  },
  setup() {
    const service = new TimePickerService()
    return {
      tabList: service.tabList,
      onCatchIndex: service.onCatchIndex.bind(service)
    };
  }
});
</script>
