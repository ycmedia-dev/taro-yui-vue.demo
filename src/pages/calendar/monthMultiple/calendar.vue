<template>
  <view v-reSize id="container" class="container">
    <y-calendar v-model="date" :options="calendarOptions" @onSelectDate="onSelectDate"></y-calendar>

  </view>
</template>
<script lang="ts">
  import './calendar.scss'
  import { ref, defineComponent, defineAsyncComponent } from 'vue'
  import {CalendarBasic, CalendarTypeEnum} from '@/components/yui/calendar/calendarBasic/types/calendarBasic.d'

  class CalendarBasicService{
    /**
     * 日期
     * */
    date = ref('2020-05')

    /**
     * 组件参数
     * */
    calendarOptions = {
      type: CalendarTypeEnum.MONTH,
      isMultiSelect: true,
      endDate: '2021-03'
    }

    /**
     * 日期选中事件
     */
    onSelectDate(e:CalendarBasic.SelectDateCallbackResult){
      const { startDate } = e
      console.log(`选中的：${startDate.format('YYYY-MM')}`)
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
