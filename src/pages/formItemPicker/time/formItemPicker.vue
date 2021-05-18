<template>
  <view v-reSize id="container" class="form-item-picker-container">
    <view class="form-item-picker-box">
      <y-form-item-picker v-model="time" :options="options"></y-form-item-picker>
    </view>
  </view>
</template>
<script lang="ts">
import {defineComponent, defineAsyncComponent, ref, Ref} from 'vue'
import './formItemPicker.scss'
import { YFormItemPicker } from '@/components/yui/formItemPicker/types/formItemPicker.d'


class FormItemPicker {
  /**
   * 组件信息
   * */
  options: Ref<YFormItemPicker.FormItemPickerInfo> = ref({
    type: 'time',
    placeholder: '请选择',
  })

  /***
   * 选中的时分
   */
  time = ref('02:22')

  constructor() {

  }
}

export default defineComponent({
  components: {
    'y-form-item-picker': defineAsyncComponent(() => import('@/components/yui/formItemPicker/formItemPicker.vue'))
  },
  setup() {
    const service = new FormItemPicker()

    return {
      options: service.options,
      time: service.time,
    };
  }
});
</script>
