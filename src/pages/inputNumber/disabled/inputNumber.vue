<template>
  <view v-reSize id="container" class="container">
    <y-input-number v-model="count"
                    :options="options"
                    @onChange="onCatchChangeNumber"></y-input-number>

  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, Ref } from 'vue'
import './inputNumber.scss'

class InputNumberService {
  /**
   * 个数
   * */
  count: Ref<number> = ref(4)

  /**
   * 组件信息
   * */
  options = ref({
    disabled: true,
    maxCount: 10,
    minCount: 2,
  })

  /**
   * 获取组件值
   * */
  onCatchChangeNumber(val: number) {
    console.log('添加的数字',val)
  }

}

export default defineComponent({
  components: {
    // 'y-input-number': defineAsyncComponent(() => import('@/components/yui/inputNumber/inputNumber.vue'))
    'y-input-number': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/inputNumber/inputNumber.vue'))
  },
  setup() {
    const service = new InputNumberService()

    return {
      count: service.count,
      options: service.options,
      onCatchChangeNumber: service.onCatchChangeNumber.bind(service),
    };
  }
});
</script>
