<template>
  <view v-reSize id="container" class="container">
    <y-calendar v-model="date"
                @onSelectDate="onSelectDate"
                :options="options"></y-calendar>
  </view>
</template>
<script lang="ts">
import "./calendar.scss";
import { ref, defineComponent, defineAsyncComponent } from "vue";
import { CalendarBasic } from "@/components/calendar/calendarBasic/types/calendarBasic";

class CalendarBasicService {
  /**
   * 日期
   * */
  date = ref('2021-03-18')


  /**
   * 日期组件参数
   * */
  options: CalendarBasic.CalendarOptions = {
    isMultiSelect: true,
    showToolBar: true,
    endDate: '2021-03-20'
  };

  /**
   * 日期选中事件
   */
  onSelectDate(e: CalendarBasic.SelectDateCallbackResult) {
    console.log(`${e.startDate.format('YYYY-MM-DD HH:mm:ss')}~${e.endDate&&e.endDate.format('YYYY-MM-DD HH:mm:ss')}`)
  }
}

export default defineComponent({
  components: {
    "y-calendar": defineAsyncComponent(() => import("@/components/yui/calendar/calendarBasic/calendarBasic.vue")),
    // "y-calendar": defineAsyncComponent(() => import("../../../../../taro-yui-vue/src/components/calendar/calendarBasic/calendarBasic.vue")),
  },
  setup() {
    const service = new CalendarBasicService();
    return {
      date: service.date,
      options: service.options,
      onSelectDate: service.onSelectDate.bind(service),
    };
  },
});
</script>
