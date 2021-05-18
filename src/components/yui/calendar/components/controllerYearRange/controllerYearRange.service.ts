import './controllerYearRange.scss'
import {PropType, SetupContext, defineComponent, Ref, ref, watch, computed} from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import IconArrowLeft from "../../assets/img/icon-arrow-left.svg"
import IconArrowLeftGray from "../../assets/img/icon-arrow-left-gray.svg"
import IconArrowRight from "../../assets/img/icon-arrow-right.svg"
import IconArrowRightGray from "../../assets/img/icon-arrow-right-gray.svg"
import IconArrowLeftDouble from "../../assets/img/icon-arrow-left-double.svg"
import IconArrowLeftDoubleGray from "../../assets/img/icon-arrow-left-double-gray.svg"
import IconArrowRightDouble from "../../assets/img/icon-arrow-right-double.svg"
import IconArrowRightDoubleGray from "../../assets/img/icon-arrow-right-double-gray.svg"
import { Controller, CalendarControllerBtnType } from './types/controllerYearRange.d'
import { UseGetYearRange } from '../../hooks/useGetYearRange'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'

class ControllerYearRangeService {

  /**
   * 上下文
   */
  context: SetupContext

  /**
   * 日期
   */
  yearRangeStr: Ref<string> = ref('')

  /**
   * 开始
   */
  startDate: Ref<Dayjs> = ref(dayjs())

  /**
   * 结束
   */
  endDate: Ref<Dayjs> = ref(dayjs())

  /**
   * 月份日期
   */
  private date: Dayjs;

  constructor(props: Controller.ControllerProps, context: SetupContext) {
    this.context = context
    this.date = props.modelValue
    this.toSetYear(this.date)
    watch(()=>props.modelValue,(value)=>{
      this.date = value;
    })
  }

  /**
   * 获取开始/结束
   */
  async toSetYear(date: Dayjs) {
    const { startDate, endDate } = await UseGetYearRange(date)
    this.startDate.value = startDate
    this.endDate.value = endDate
  }

  /**
   * 点击事件
   * */
  onClick(type: CalendarControllerBtnType) {
    const unit: 'year' | 'month' = <'year' | 'month'>type.substring(5)
    let start: Dayjs
    if (type.startsWith('prev')) {
      start = this.startDate.value.subtract(10, unit)
    } else {
      start = this.endDate.value.add(1, unit)
    }
    this.startDate.value = start
    this.endDate.value = start.add(9, unit)
    this.context.emit(UPDATE_MODEL_EVENT, this.startDate.value)
  }
}

export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<Dayjs>,
      default: dayjs()
    },
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props: Controller.ControllerProps, context: SetupContext) {
    const service = new ControllerYearRangeService(props, context)

    const yearRangeStr =computed(() => {
      return `${service.startDate.value.format('YYYY')}年-${service.endDate.value.format('YYYY')}年`
    })

    return {
      IconArrowLeft,
      IconArrowLeftGray,
      IconArrowRight,
      IconArrowRightGray,
      IconArrowLeftDouble,
      IconArrowLeftDoubleGray,
      IconArrowRightDouble,
      IconArrowRightDoubleGray,
      yearRangeStr,
      CalendarControllerBtnType,
      onClick: service.onClick.bind(service),
    }
  }
})
