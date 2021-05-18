import './dayList.scss'
import { PropType, SetupContext, Ref, ref, defineComponent, watch } from 'vue'
import { Day, CalenderDayType } from './types/day.d'
import dayjs, { Dayjs } from 'dayjs'
import { rangeArr, padLeft } from '../../utils/util'
import { CalendarBasic } from '../../calendarBasic/types/calendarBasic.d'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'

class DayListService {

  /**
   * 上下文
   */
  context: SetupContext

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
   * 天的集合,经过回填过的过的
   * */
  dayList: Ref<Day.DayItem[]> = ref([])

  /**
   * 选中开始日期
   * */
  startDate: Ref<Dayjs | undefined> = ref(undefined)

  /**
   * 选中结束日期
   */
  endDate: Ref<Dayjs | undefined> = ref(undefined)

  /**
   * 月份日期
   */
  private date: Dayjs;

  constructor(props: Day.DayProps, context: SetupContext) {
    this.context = context;
    this.isMultiSelect = props.isMultiSelect
    this.startDate.value = props.startDate;

    this.endDate.value = !!props.endDate ? dayjs(props.endDate) : undefined;
    this.minDate.value = !!props.minDate ? dayjs(props.minDate) : undefined;
    this.maxDate.value = !!props.maxDate ? dayjs(props.maxDate) : undefined;
    this.date = props.modelValue;
    this.getDayList()
    watch(() => props.modelValue, (newVal) => {
      this.date = newVal
      this.getDayList()
    })
    watch([() => props.startDate, () => props.endDate], ([newStart, newEnd]: [Dayjs, string]) => {
      this.startDate.value = newStart
      this.endDate.value = !!newEnd ? dayjs(newEnd) : undefined
      console.log('daylit----------', this.startDate.value.format('YYYY-MM-DD'), this.endDate.value.format('YYYY-MM-DD'))
      this.getDayList()
    })
  }

  /**
   * 获得天列表
   */
  private getDayList() {
    const firstDay = this.date.startOf('month').day() || 7
    const prevMonthDays: Day.DayItem[] = this.getPrevMonthLastDays(
      this.date,
      firstDay,
    )
    const currentMonthDays: Day.DayItem[] = this.getMonthDays(this.date)
    let days = [...prevMonthDays, ...currentMonthDays]
    const nextMonthDays: Day.DayItem[] = this.getNextMonthStartDays(this.date, 42 - days.length)
    this.dayList.value = days.concat(nextMonthDays)
  }

  /**
   * 计算天class属性
   */
  private computeDayClassName(date: Dayjs, type: CalenderDayType): string {
    const classNameList: string[] = []
    if (type !== CalenderDayType.CURRENT_MONTH || this.minDate.value && date.isBefore(this.minDate.value) || this.maxDate.value && date.isAfter(this.maxDate.value)) {
      classNameList.push('not-current-month')
    }
    if (this.startDate.value && date.isSame(this.startDate.value)) {
      classNameList.push(this.isMultiSelect ? 'range-left' : 'selected')
    }
    if (this.endDate.value && date.isSame(this.endDate.value)) {
      classNameList.push(this.isMultiSelect ? 'range-right' : 'selected')
    } else if (this.startDate.value && this.endDate.value && date.unix() >= dayjs(this.startDate.value).unix() && date.unix() <= dayjs(this.endDate.value).unix()) {
      classNameList.push(`${this.isMultiSelect ? 'muilti-' : ''}selected`)
    }
    return classNameList.join(' ');
  }

  /**
   * 获得上月最后天数列表
   * @param date 日期
   * @param amount 数量
   */
  private getPrevMonthLastDays(date: Dayjs, amount: number): Day.DayItem[] {
    const lastDay = date.subtract(1, 'month').endOf('month')
    const dateMonth = lastDay.format('YYYY-MM')
    return rangeArr(amount).map((_, index) => {
      const day = lastDay.date() - (amount - index - 1)
      const date = dayjs(`${dateMonth}-${padLeft(day, 2, '0')}`);
      return {
        date: date,
        day: day,
        type: CalenderDayType.PREV_MONTH,
        className: this.computeDayClassName(date, CalenderDayType.PREV_MONTH)
      }
    })
  }

  /**
   * 获得当前月天数列表
   * @param date 日期
   */
  private getMonthDays(date: Dayjs): Day.DayItem[] {
    const days = date.daysInMonth()
    const dateMonth = date.format('YYYY-MM')
    return rangeArr(days).map((_, index) => {
      const day = index + 1;
      const date = dayjs(`${dateMonth}-${padLeft(day, 2, '0')}`);
      return {
        date: date,
        day: day,
        type: CalenderDayType.CURRENT_MONTH,
        className: this.computeDayClassName(date, CalenderDayType.CURRENT_MONTH)
      }
    })
  }

  /**
   * 获得下月开始天数列表
   * @param date 日期
   * @param amount 数量
   */
  private getNextMonthStartDays(date: Dayjs, amount: number): Day.DayItem[] {
    const dateMonth = date.add(1, 'month').format('YYYY-MM')
    return rangeArr(amount).map((_, index) => {
      const day = index + 1;
      const date = dayjs(`${dateMonth}-${padLeft(day, 2, '0')}`);
      return {
        date: date,
        day: day,
        type: CalenderDayType.NEXT_MONTH,
        className: this.computeDayClassName(date, CalenderDayType.NEXT_MONTH)
      }
    })
  }

  /**
   * 点击天
   * **/
  async onClickDay(e: Day.DayItem) {
    const { type, date } = e
    if (this.minDate.value && !!!this.maxDate.value && date.isBefore(this.minDate.value)) {
      return
    }
    if (!!!this.minDate.value && this.maxDate.value && date.isAfter(this.maxDate.value)) {
      return
    }
    if (this.minDate.value && this.maxDate.value && (date.isBefore(this.minDate.value) || date.isAfter(this.maxDate.value))) {
      return
    }
    if (type != CalenderDayType.CURRENT_MONTH && !this.startDate.value) {
      this.date = date;
      this.startDate.value = date;
      this.endDate.value = undefined;
      this.context.emit(UPDATE_MODEL_EVENT, date)
      this.getDayList()
      return
    }
    if (!this.isMultiSelect) {
      this.startDate.value = date
      this.context.emit('onSelectDate', <CalendarBasic.SelectDateCallbackResult>{
        startDate: this.startDate.value
      })
      this.getDayList()
      return
    }

    let start: Dayjs | undefined = undefined
    let end: Dayjs | undefined = undefined
    if (!this.startDate.value && !this.endDate.value) {
      start = e.date
      end = this.endDate.value
    }
    if (this.startDate.value && this.endDate.value) {
      start = e.date
      end = undefined
    }
    if (this.startDate.value && !this.endDate.value) {
      if (this.startDate.value.unix() <= e.date.unix()) {
        start = this.startDate.value
        end = e.date
      } else {
        start = e.date
        end = this.startDate.value
      }
    }
    this.startDate.value = start
    this.endDate.value = end
    this.getDayList()
    if (this.endDate.value&&this.startDate.value) {
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
    startDate: {
      type: Object as PropType<Dayjs>,
      default: null
    },
    endDate: {
      type: String as PropType<string>,
      default: null
    },
    minDate: {
      type: String as PropType<string>,
      default: null
    },
    maxDate: {
      type: String as PropType<string>,
      default: null
    },
    modelValue: {
      type: Object as PropType<Dayjs>,
      default: dayjs()
    },
    isMultiSelect: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  emits: [UPDATE_MODEL_EVENT, 'onSelectDate'],
  setup(props: Day.DayProps, context: SetupContext) {
    const service = new DayListService(props, context)
    return {
      minDate: service.minDate,
      maxDate: service.maxDate,
      dayList: service.dayList,
      onClickDay: service.onClickDay.bind(service),
    }
  }
})
