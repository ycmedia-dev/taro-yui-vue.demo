<template>
  <view v-reSize id="container" class="container">
    <view class="box">
      <y-date-picker
        :options="options"
        v-model="dateList"></y-date-picker>
    </view>
  </view>
</template>
<script lang="ts">
import "./datePicker.scss";
import { defineComponent, defineAsyncComponent,Ref,ref } from "vue";
import { CalendarBasic } from "@/components/yui/calendar/calendarBasic/types/calendarBasic";

class DatePickerService {

  /**
   * 参数
   */
  options: CalendarBasic.CalendarOptions = {
    isMultiSelect: true,
    showToolBar: true,
    shortcuts: [{
      text: '最近一周',
      value: (() => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        return [start, end]
      })
    },{
      text: '最近一个月',
      value: (() => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        return [start, end]
      })
    },{
      text: '最近三个月',
      value: (() => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        return [start, end]
      })
    }]
  };

  /**
   * 值
   */
   dateList:Ref<string[]> = ref(['2021-01-25','2021-01-26'])

}

export default defineComponent({
  components: {
    // 'y-date-picker': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/datePicker/datePicker.vue'))
    "y-date-picker": defineAsyncComponent(
      () => import("@/components/yui/datePicker/datePicker.vue")
    ),
  },
  setup() {
    const service = new DatePickerService();
    return {
      options: service.options,
      dateList: service.dateList,
    };
  },
});
</script>
