<template>
  <view v-reSize id="container" class="container">
    <y-steps :options="options"></y-steps>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import './steps.scss'

class StepsService {
  /**
   * 步骤item
   */
  options = [
    {
      className: 'order_success', // 成功
      label: '步骤1',
      isActive: false
    },
    {
      className: 'order_error', // 错误
      label: '步骤2',
      isActive: false
    },
    {
      className: 'order_process', // 当前步骤
      label: '步骤3',
      isActive: true
    },
    {
      className: 'order_default', // 默认
      label: '步骤4',
      isActive: false
    }
  ]
  constructor() {

  }
}

export default defineComponent({
  components: {
    'y-steps': defineAsyncComponent(() => import('@/components/yui/steps/steps.vue'))
  },
  setup() {
    const service = new StepsService()
    return {
      options: service.options,
    };
  }
});
</script>
