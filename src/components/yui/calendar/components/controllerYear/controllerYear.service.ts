import './controllerYear.scss'
import { PropType, SetupContext, defineComponent, Ref, ref, watch } from 'vue'
import {TaroEvent} from '@tarojs/components/types/event'
import IconArrowLeft from "../../assets/img/icon-arrow-left.svg"
import IconArrowLeftGray from "../../assets/img/icon-arrow-left-gray.svg"
import IconArrowRight from "../../assets/img/icon-arrow-right.svg"
import IconArrowRightGray from "../../assets/img/icon-arrow-right-gray.svg"
import IconArrowLeftDouble from "../../assets/img/icon-arrow-left-double.svg"
import IconArrowLeftDoubleGray from "../../assets/img/icon-arrow-left-double-gray.svg"
import IconArrowRightDouble from "../../assets/img/icon-arrow-right-double.svg"
import IconArrowRightDoubleGray from "../../assets/img/icon-arrow-right-double-gray.svg"
import { Controller, CalendarControllerBtnType } from './types/controllerYear.d'
import dayjs, { Dayjs } from 'dayjs'
import {UPDATE_MODEL_EVENT} from '../../utils/constants'

class ControllerService {

  /**
   * 上下文
   */
  context: SetupContext

  /**
   * 日期
   */
  yearMonth: Ref<Dayjs> = ref(dayjs())

  /**
   *年picker options
   */
  pickerOption = ref([])

  /**
   * 选中年picker index
   */
  pickerIndex = ref(-1)

  constructor(props: Controller.ControllerProps, context: SetupContext) {
    this.context = context
    this.yearMonth.value = props.modelValue
    this.getList()
    watch(()=>props.modelValue,(value)=>{
      this.yearMonth.value = value;
    })
  }

  /**
   * 获取picker options
   */
  getList() {
    let option = []
    let date = new Date()
    let currentYear = date.getFullYear()
    for(let i = 1900; i<= 2100; i++) {
      option.unshift(i)
    }
    this.pickerOption.value = option
    let selectedYear = this.yearMonth.value ? this.yearMonth.value.format('YYYY') : currentYear
    this.pickerIndex.value = option.findIndex(item => item == selectedYear)
  }

  /**
   * 点击事件
   * */
  onClick(type: CalendarControllerBtnType) {
    const unit: 'year' | 'month' = <'year' | 'month'>type.substring(5)
    if (type.startsWith('prev')) {
      this.yearMonth.value = this.yearMonth.value.subtract(1, unit)
    } else {
      this.yearMonth.value = this.yearMonth.value.add(1, unit)
    }
    let selectedYear = this.yearMonth.value.format('YYYY')
    this.pickerIndex.value = this.pickerOption.value.findIndex(item => item == selectedYear)
    this.context.emit(UPDATE_MODEL_EVENT, this.yearMonth.value)
  }

  /**
   * 直接选择年
   * */
  onChangeYear(e: TaroEvent<HTMLElement>) {
    this.pickerIndex.value = e.detail.value
    let year = this.pickerOption.value[this.pickerIndex.value]
    let yearMonth = `${year}${this.yearMonth.value.format('YYYY-MM').substring(4)}`
    this.context.emit(UPDATE_MODEL_EVENT, dayjs(yearMonth))
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
    const service = new ControllerService(props, context)
    return {
      IconArrowLeft,
      IconArrowLeftGray,
      IconArrowRight,
      IconArrowRightGray,
      IconArrowLeftDouble,
      IconArrowLeftDoubleGray,
      IconArrowRightDouble,
      IconArrowRightDoubleGray,
      pickerIndex: service.pickerIndex,
      pickerOption: service.pickerOption,
      yearMonth: service.yearMonth,
      CalendarControllerBtnType,
      onClick: service.onClick.bind(service),
      onChangeYear: service.onChangeYear.bind(service),
    }
  }
})
