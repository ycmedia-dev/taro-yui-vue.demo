import './monthList.scss'
import { PropType, SetupContext, Ref, ref, defineComponent, watch } from 'vue'
import { Month } from './types/month.d'
import dayjs, { Dayjs } from 'dayjs'
import { setNumberWithZero } from '../../utils/util'
import { Quarter } from "../quarterList/types/quarter";
import { CalendarBasic } from "../../calendarBasic/types/calendarBasic";

class MonthListService {

  /**
   * 上下文
   */
  context: SetupContext

  /**
   * 月列表
   */
  monthList: Ref<Month.MonthItem[]> = ref([])

  /**
   * 选中开始日期
   * */
  startDate: Ref<Dayjs | undefined> = ref(undefined)

  /**
   * 选中结束日期
   */
  endDate: Ref<Dayjs | undefined> = ref(undefined)

  /**
   * 是否能多选
   * */
  isMultiSelect: boolean = false

  /**
   * 最小日期
   * */
  minDate: Ref<Dayjs | undefined> = ref(undefined)

  /**
   * 最大日期
   * */
  maxDate: Ref<Dayjs | undefined> = ref(undefined)

  /**
   * 月份日期
   */
  private date: Dayjs;

  /**
   * 月
   */
  private monthMap:{[key:string]:string} = {
    '1': '一月',
    '2': '二月',
    '3': '三月',
    '4': '四月',
    '5': '五月',
    '6': '六月',
    '7': '七月',
    '8': '八月',
    '9': '九月',
    '10': '十月',
    '11': '十一月',
    '12': '十二月',

  }

  constructor(props: Month.MonthProps, context: SetupContext) {
    this.context = context
    this.isMultiSelect = props.isMultiSelect || false
    this.startDate.value = props.startDate;
    this.endDate.value = !!props.endDate ? dayjs(props.endDate) : undefined;
    this.minDate.value = !!props.minDate ? dayjs(props.minDate) : undefined;
    this.maxDate.value = !!props.maxDate ? dayjs(props.maxDate) : undefined;
    watch(() => props.modelValue, (newVal) => {
      this.date = newVal
      this.getList()
    }, {
      immediate: true
    })
    watch(() => props.startDate, (newVal) => {
      this.startDate.value = newVal
    })
  }

  /**
   * 获取列表
   */
  getList() {
    const year = this.date.format('YYYY')
    let list: Month.MonthItem[] = []
    for (let i = 1; i <= 12; i++) {
      let number: string = setNumberWithZero(i)
      let date: Dayjs = dayjs(`${year}-${number}-01`)
      list.push({
        date,
        month: i,
        className: this.computeDayClassName(date),
        label: this.monthMap[`${i}`]
      })
    }
    this.monthList.value = list
  }

  /**
   * 计算天class属性
   */
  computeDayClassName(date: Dayjs) {
    const classNameList: string[] = []
    if (this.minDate.value && date.isBefore(this.minDate.value) || this.maxDate.value && date.isAfter(this.maxDate.value)) {
      classNameList.push('disabled')
    }
    if (this.startDate.value && date.isSame(this.startDate.value)) {
      classNameList.push('selected')
    }
    if (this.endDate.value && date.isSame(this.endDate.value)) {
      classNameList.push('selected')
    } else if (this.startDate.value && this.endDate.value && date.unix() >= dayjs(this.startDate.value).unix() && date.unix() <= dayjs(this.endDate.value).unix()) {
      classNameList.push('selected')
    }
    return classNameList.join(' ');
  }

  /**
   * 点击月
   */
  onClickMonth(item: Quarter.QuarterItem) {
    const { date } = item
    if (this.minDate.value && !!!this.maxDate.value && date.isBefore(this.minDate.value)) {
      return
    }
    if (!!!this.minDate.value && this.maxDate.value && date.isAfter(this.maxDate.value)) {
      return
    }
    if (this.minDate.value && this.maxDate.value && (date.isBefore(this.minDate.value) || date.isAfter(this.maxDate.value))) {
      return
    }
    if (!this.isMultiSelect) {
      this.startDate.value = date
      this.context.emit('onSelectDate', <CalendarBasic.SelectDateCallbackResult>{
        startDate: item.date
      })
      this.getList()
      return
    }
    let start: Dayjs | undefined = undefined
    let end: Dayjs | undefined = undefined
    if (!this.startDate.value && !this.endDate.value) {
      start = date
      end = this.endDate.value
    }
    if (this.startDate.value && this.endDate.value) {
      start = date
      end = undefined
    }
    if (this.startDate.value && !this.endDate.value) {
      if (this.startDate.value.unix() <= date.unix()) {
        start = this.startDate.value
        end = date
      } else {
        start = date
        end = this.startDate.value
      }
    }
    this.startDate.value = start
    this.endDate.value = end
    this.getList()
    if (this.endDate.value && this.startDate.value) {
      this.context.emit('onSelectDate', <CalendarBasic.SelectDateCallbackResult>{
        startDate: this.startDate.value,
        endDate: this.endDate.value
      })
      this.startDate.value = undefined
      this.endDate.value = undefined
    }
  }
}

export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<Dayjs>,
      default: dayjs()
    },
    startDate: {
      type: Object as PropType<Dayjs>,
      default: ''
    },
    endDate: {
      type: Object as PropType<Dayjs>,
      default: ''
    },
    isMultiSelect: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    minDate: {
      type: Object as PropType<Dayjs>,
      default: ''
    },
    maxDate: {
      type: Object as PropType<Dayjs>,
      default: ''
    },
  },
  emits: ['update:modelValue', 'onSelectDate'],
  setup(props: Month.MonthProps, context: SetupContext) {
    const service = new MonthListService(props, context)
    return {
      minDate: service.minDate,
      maxDate: service.maxDate,
      startDate: service.startDate,
      endDate: service.endDate,
      monthList: service.monthList,
      onClickMonth: service.onClickMonth.bind(service),
    }
  }
})
