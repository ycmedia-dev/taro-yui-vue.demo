import { PropType, SetupContext, defineComponent, ref, Ref, watch } from 'vue'
import { TaroEvent } from '@tarojs/components/types/event'
import IconCloseCircle from './assets/img/icon_close_circle.svg'
import { YTimePicker } from './types/timePicker.d'
import { setLoopNumber } from './utils/util'
import './timePicker.scss'

/**
 * 时间组件
 */
class TimePickerService {
  context: SetupContext

  /**
   * picker options
   * */
  timeList: Ref<string[][]> = ref([[], [], []])

  /***
   * picker选中的index[]
   */
  timeIndex: Ref<number[]> = ref([])

  constructor(props: YTimePicker.YTimePickerProps, context: SetupContext) {
    this.context = context
    this.timeList.value[0] = setLoopNumber(0, 23)
    this.timeList.value[1] = setLoopNumber(0, 59)
    this.timeList.value[2] = setLoopNumber(0, 59)
    console.log('modelValue', props.modelValue)
    this.timeIndex.value = this.toSetTimeIndex(props.modelValue)
    watch(() => props.modelValue, (newVal: string) => {
      this.timeIndex.value = this.toSetTimeIndex(newVal)
    })
  }

  /**
   * 获取选中的index
   * @param time 选中的时分秒
   */
  private toSetTimeIndex(time: string): number[] {
    if (!time) {
      return []
    }
    let timeList: string[] = time.split(':')
    let idxList: number[] = []
    timeList.forEach((txt: string, idx: number) => {
      let index: number = this.timeList.value[idx].findIndex((item: string) => item === txt)
      idxList.push(index)
    })
    return idxList
  }

  /**
   * 改变picker
   * @param e
   */
  onChange(e: TaroEvent<HTMLInputElement>) {
    let val = e.detail.value
    let hour = this.timeList.value[0][val[0]]
    let minute = this.timeList.value[1][val[1]]
    let second = this.timeList.value[2][val[2]]
    this.context.emit('update:modelValue', `${hour}:${minute}:${second}`)
  }

  /**
   * 清除
   */
  onClearTime() {
    this.context.emit('update:modelValue', '')
  }
}

export default defineComponent({
  name: 'y-time-picker',
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: '',
    }
  },
  emits: ['update:modelValue'],
  setup(props: YTimePicker.YTimePickerProps, context: SetupContext) {
    const service = new TimePickerService(props, context)
    return {
      IconCloseCircle,
      timeList: service.timeList,
      timeIndex: service.timeIndex,
      onChange: service.onChange.bind(service),
      onClearTime: service.onClearTime.bind(service),
    };
  }
});
