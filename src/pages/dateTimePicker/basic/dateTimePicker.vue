<template>
  <view v-reSize id="container" class="date-time-picker-container">
    <view class="date-time-picker-box">
      <y-date-time-picker v-model="dateTimeStr" :options="options"></y-date-time-picker>
    </view>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, Ref, ref } from 'vue'
import './dateTimePicker.scss'

class DateTimePicker {

  /***
   * 值：年-月-日  时：分：秒
   */
 dateTimeStr: Ref<string> = ref('2021-03-18 01:01')

  /***
   * 组件内信息
   */
  options = ref({
    placeholder: '请选择日期',
    isMultiSelect: false,
    minDate: '2021-03-04',
    maxDate: '2021-03-20',
  })

  constructor() {

  }
}

export default defineComponent({
  components: {
    'y-date-time-picker': defineAsyncComponent(() => import('@/components/yui/dateTimePicker/dateTimePicker.vue'))
    // 'y-date-time-picker': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/dateTimePicker/dateTimePicker.vue'))
  },
  setup() {
    const service = new DateTimePicker()
    return {
      dateTimeStr: service.dateTimeStr,
      options: service.options,
    };
  }
});
</script>
