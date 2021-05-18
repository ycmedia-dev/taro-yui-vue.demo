<template>
  <view v-reSize id="container" class="container">
    <y-calendar v-model="date" :options="calendarOptions" @onSelectDate="onSelectDate"></y-calendar>

    <view>选中的日期：{{ date }}</view>
  </view>
</template>
<script lang="ts">
  import './calendar.scss'
  import { ref, defineComponent, defineAsyncComponent } from 'vue'
  import {CalendarBasic} from '@/components/yui/calendar/calendarBasic/types/calendarBasic'

  class CalendarBasicService{
    /**
     * 日期
     * */
    date = ref('2021-02-05')

    /**
     * 组件参数
     * */
    calendarOptions = {
      minDate: '2021-02-04',
      maxDate: '2021-03-03',
      isMultiSelect: false,
      showToolBar: true
    }

    /**
     * 日期选中事件
     */
    onSelectDate(e:CalendarBasic.SelectDateCallbackResult){
      this.date.value = e.startDate.format('YYYY-MM-DD HH:mm:ss')
    }
  }

  export default defineComponent({
    components: {
      'y-calendar': defineAsyncComponent(() => import('@/components/yui/calendar/calendarBasic/calendarBasic.vue'))
      // 'y-calendar': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/calendar/calendarBasic/calendarBasic.vue'))
    },
    setup() {
      const service = new CalendarBasicService()
      return {
        date:service.date,
        calendarOptions:service.calendarOptions,
        onSelectDate:service.onSelectDate.bind(service)
      };
    }
  });
</script>
