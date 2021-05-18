<template>
  <view v-reSize id="container" class="container">
    <view class="box box-1">
      <y-date-picker  v-model="date" :options="options"></y-date-picker>
    </view>
  </view>
</template>
<script lang="ts">
  import './datePicker.scss'
  import { defineComponent, defineAsyncComponent, ref, Ref} from 'vue'
  import { CalendarBasic, CalendarTypeEnum } from "@/components/yui/calendar/calendarBasic/types/calendarBasic.d";


  class DatePickerService{

    /**
     * 值
     * */
    date: Ref<string> = ref('')

    /**
     * date-picker组件参数
     * */
    options = ref({
      placeholder: '请选择单个年',
      type: CalendarTypeEnum.YEAR
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
        date: service.date,
        options: service.options,
      };
    }
  });
</script>
