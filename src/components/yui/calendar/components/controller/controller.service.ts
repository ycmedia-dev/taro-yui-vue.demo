import './controller.scss'
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
import { Controller, CalendarControllerBtnType } from './types/controller.d'
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
  date: Ref<Dayjs> = ref(dayjs())

  constructor(props: Controller.ControllerProps, context: SetupContext) {
    this.context = context
    this.date.value = props.modelValue

    watch(()=>props.modelValue,(value)=>{
      this.date.value = value;
    })
  }

  /**
   * 点击事件
   * */
  onClick(type: CalendarControllerBtnType) {
    const unit: 'year' | 'month' = <'year' | 'month'>type.substring(5)
    if (type.startsWith('prev')) {
      this.date.value = this.date.value.subtract(1, unit)
    } else {
      this.date.value = this.date.value.add(1, unit)
    }
    this.context.emit(UPDATE_MODEL_EVENT, this.date.value)
  }

  /**
   * 直接选择年月
   * */
  onChangeDate(e: TaroEvent<HTMLElement>) {
    this.context.emit(UPDATE_MODEL_EVENT, dayjs(e.detail.value))
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
      date: service.date,
      CalendarControllerBtnType,
      onClick: service.onClick.bind(service),
      onChangeDate: service.onChangeDate.bind(service),
    }
  }
})
