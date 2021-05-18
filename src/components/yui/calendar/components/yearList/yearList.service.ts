import './yearList.scss'
import { PropType, SetupContext, Ref, ref, defineComponent, watch } from 'vue'
import { Year } from './types/year.d'
import dayjs, { Dayjs } from 'dayjs'
import { MonthMap } from '../../utils/constants'
import { setNumberWithZero } from '../../utils/util'
import {CalendarBasic} from "../../calendarBasic/types/calendarBasic";
import { UseGetYearRange } from '../../hooks/useGetYearRange'
import { UseGetDateRange } from '../../hooks/useGetDateRange'

class YearListService {

  /**
   * 上下文
   */
  context: SetupContext

  /**
   * 年列表
   */
  yearList: Ref<Year.YearItem[]> = ref([])

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

  constructor(props: Year.YearProps, context: SetupContext) {
    this.context = context
    this.isMultiSelect = props.isMultiSelect || false
    this.startDate.value = props.startDate;
    this.endDate.value = !!props.endDate ? dayjs(props.endDate) : undefined;
    this.minDate.value = !!props.minDate ? dayjs(props.minDate) : undefined;
    this.maxDate.value = !!props.maxDate ? dayjs(props.maxDate) : undefined;
    watch(() => props.modelValue, (newVal) => {
      this.date = newVal
      this.getList(newVal)
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
  async getList(date: Dayjs) {
    const { startDate, endDate } = await UseGetYearRange(date)
    const start: number = +(startDate.format('YYYY'))
    const end: number = +(endDate.format('YYYY'))
    let list: Year.YearItem[] = []
    for(let i = start; i <= end; i++) {
      let date: Dayjs = dayjs(`${i}`)
      list.push({
        date,
        year: i,
        className: this.computeDayClassName(date)
      })
    }
    this.yearList.value = list
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
   * 点击
   */
  async onClickYear(item: Year.YearItem) {
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
      this.getList(this.date)
      return
    }
    const { startDate, endDate } = await UseGetDateRange(this.startDate.value, this.endDate.value, item)
    this.startDate.value = startDate
    this.endDate.value = endDate
    this.getList(this.date)
    if (this.endDate.value&&this.startDate.value) {
      this.context.emit('onSelectDate', <CalendarBasic.SelectDateCallbackResult>{
        startDate: this.startDate.value,
        endDate: this.endDate.value
      })
      // this.startDate.value = undefined
      // this.endDate.value = undefined
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
      default: null
    },
    endDate: {
      type: Object as PropType<Dayjs>,
      default: null
    },
    isMultiSelect: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    minDate: {
      type: Object as PropType<Dayjs>,
      default: null
    },
    maxDate: {
      type: Object as PropType<Dayjs>,
      default: null
    },
  },
  emits: ['update:modelValue', 'onSelectDate'],
  setup(props: Year.YearProps, context: SetupContext) {
    const service = new YearListService(props, context)
    return {
      yearList: service.yearList,
      onClickYear: service.onClickYear.bind(service),
    }
  }
})
