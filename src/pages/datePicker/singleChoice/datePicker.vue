<template>
  <view v-reSize id="container" class="container">
    <view id="maskOuterElId"></view>

    <view class="box box-1">
      <y-date-picker :options="options1"></y-date-picker>
    </view>

    <view class="box">
      <y-date-picker :options="options2"></y-date-picker>
    </view>

    <view class="box">
      <y-date-picker :options="options3"></y-date-picker>
    </view>

  </view>
</template>
<script lang="ts">
  import './datePicker.scss'
  import { defineComponent, defineAsyncComponent, ref } from 'vue'
  import { CalendarBasic } from "@/components/yui/calendar/calendarBasic/types/calendarBasic";


  class DatePickerService{

    /**
     * date-picker组件参数
     * */
    options1 = ref({
      placeholder: '请选择单个日期',
      minDate: '2021-03-04',
      maxDate: '2023-03-20',
    })

    options2 = ref({
      placeholder: '请选择单个日期',
    })

    options3 = ref({
      placeholder: '请选择单个日期-外部定点',
      maskOuterElId: 'maskOuterElId'
    })
  }

  export default defineComponent({
    components: {
      'y-date-picker': defineAsyncComponent(() => import('@/components/yui/datePicker/datePicker.vue'))
      // 'y-date-picker': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/datePicker/datePicker.vue'))
    },
    setup() {
      const service = new DatePickerService()
      return {
        options1: service.options1,
        options2: service.options2,
        options3: service.options3,
      };
    }
  });
</script>
