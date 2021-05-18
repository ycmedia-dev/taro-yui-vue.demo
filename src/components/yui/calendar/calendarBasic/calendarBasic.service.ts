import './calendarBasic.scss'
import { PropType, defineComponent, defineAsyncComponent, SetupContext, ref,Ref, watch } from 'vue'
import { CalendarBasic, CalendarTypeEnum } from './types/calendarBasic.d'
import { getYearMonthDay, formatDate } from '../utils/util'
import dayjs, { Dayjs } from 'dayjs'
const toObject = require('dayjs/plugin/toObject')
dayjs.extend(toObject)



/**
 * 日历
 */
class CalendarBasicService {

  /**
   * 上下文
   */
  context: SetupContext

  /**
   * 月份日期
   */
  date:Ref<Dayjs> = ref(dayjs());

  /**
   * 参数
   */
  options: CalendarBasic.CalendarOptions

  /**
   * 选中开始日期
   */
  startDate: Ref<Dayjs|undefined> = ref(undefined);

  constructor(props: CalendarBasic.CalendarBasicProps, context: SetupContext) {
    this.options = {
      ...{
        type: CalendarTypeEnum.DATE,
        isMultiSelect: false,
        showToolBar: true,
      },
      ...props.options,
    }
    this.context = context

    if(props.modelValue ===''){
      this.date.value = dayjs();
    }else{
      this.startDate.value = dayjs(props.modelValue)
      this.date.value = this.startDate.value
    }
  }

  /**
   * controller组件点击>按钮
   * @param type 按钮类型
   * */
  onSelectDate(e: CalendarBasic.SelectDateCallbackResult) {
    this.context.emit('onSelectDate', e)
  }

  /**
   * 点击快捷键
   * @param item 快捷键
   */
  async onClickShortcut(item: CalendarBasic.ShortcutsItem) {
    const [start, end] = await item.value()
    const startStr = formatDate(start)
    const endStr = formatDate(end)
    this.startDate.value = dayjs(startStr)
    this.options.endDate = endStr
    this.date.value = this.startDate.value
    const params: CalendarBasic.SelectDateCallbackResult = {
      startDate: this.startDate.value,
      endDate: dayjs(endStr)
    }
    this.context.emit('onSelectDate', params)
    this.context.emit('onShortcut', [startStr, endStr])
  }
}

export default defineComponent({
  name: 'y-calendar',
  components: {
    "KalendarController": defineAsyncComponent(() => import('../components/controller/controller.vue')),
    "KalendarWeekDayList": defineAsyncComponent(() => import('../components/weekDayList/weekDayList.vue')),
    "KalendarDayList": defineAsyncComponent(() => import('../components/dayList/dayList.vue')),
    "KalendarControllerYear": defineAsyncComponent(() => import('../components/controllerYear/controllerYear.vue')),
    "KalendarMonthList": defineAsyncComponent(() => import('../components/monthList/monthList.vue')),
    "KalendarQuarterList": defineAsyncComponent(() => import('../components/quarterList/quarterList.vue')),
    "KalendarControllerYearRange": defineAsyncComponent(() => import('../components/controllerYearRange/controllerYearRange.vue')),
    "KalendarYearList": defineAsyncComponent(() => import('../components/yearList/yearList.vue')),
  },
  props: {
    options: {
      type: Object as PropType<CalendarBasic.CalendarOptions>,
      default: {}
    },
    modelValue: {
      type: String as PropType<string>,
      default: ''
    }
  },
  emits: ['onSelectDate', 'onShortcut', 'update:modelValue'],
  setup(props: CalendarBasic.CalendarBasicProps, context: SetupContext) {
    const service = new CalendarBasicService(props, context)

    watch(() => service.date.value, (newVal: Dayjs) => {
      service.context.emit('update:modelValue', newVal.format('YYYY-MM-DD'))
    })

    return {
      CalendarTypeEnum,
      startDate:service.startDate,
      date: service.date,
      options: service.options,
      onSelectDate: service.onSelectDate.bind(service),
      onClickShortcut: service.onClickShortcut.bind(service),
    };
  }
});
