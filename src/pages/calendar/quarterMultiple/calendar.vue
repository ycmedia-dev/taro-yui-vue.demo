<template>
  <view v-reSize id="container" class="container">
    <y-calendar v-model="date"
                :options="calendarOptions"
                @onSelectDate="onCatchSelectDate"></y-calendar>

  </view>
</template>
<script lang="ts">
  import './calendar.scss'
  import {Ref, ref, defineComponent, defineAsyncComponent} from 'vue'
  import {CalendarBasic, CalendarTypeEnum} from '@/components/yui/calendar/calendarBasic/types/calendarBasic.d'

  class CalendarBasicService{
    /**
     * 年-季度
     * */
    date: Ref<string> = ref('2021-01')

    /**
     * 组件参数
     * */
    calendarOptions = {
      type: CalendarTypeEnum.QUARTER,
      isMultiSelect: true,
      endDate: '2021-03'
    }

    /**
     * 日期选中事件
     */
    onCatchSelectDate(e:CalendarBasic.SelectDateCallbackResult){
      const { startDate, endDate } = e
      console.log(`选中的：${startDate.format('YYYY-MM')}-${endDate.format('YYYY-MM')}`)
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
        onCatchSelectDate:service.onCatchSelectDate.bind(service)
      };
    }
  });
</script>
