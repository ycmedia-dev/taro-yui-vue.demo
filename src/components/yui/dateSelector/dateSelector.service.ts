import { PropType, SetupContext, defineComponent, defineAsyncComponent, ref, Ref } from 'vue'
import { TaroEvent } from '@tarojs/components/types/event'
import { YDateSelector } from './types/dateSelector'
import IconCloseCircle from './assets/img/icon_close_circle.svg'
import './dateSelector.scss'

/**
 * 图像组件
 */
class DateSelectorService {

  context: SetupContext

  props: YDateSelector.DateSelectorProps

  /***
   * 是否显示弹窗
   */
  isOpened: Ref<boolean> = ref(false)

  /***
   * 被跟随的元素
   */
  elementName: Ref<string> = ref('')


  constructor(props: YDateSelector.DateSelectorProps, context: SetupContext) {
    this.context = context
    this.props = props
  }

  /***
   * 清空日期
   */
  onClearDate() {
    const { modelValue, info: { isMultiSelect } } = this.props
    if (!modelValue) {
      return
    }
    this.context.emit('update:modelValue',isMultiSelect ? { start: '', end: '' } : '')
  }

  /***
   * 点击按钮显示弹窗
   */
  onOpenFloatLayout(e: TaroEvent<HTMLInputElement>) {
    const element = e.currentTarget.id
    this.isOpened.value = true
    this.elementName.value = element
  }

  /***
   * 关闭弹窗组件
   */
  onCatchCloseFloatLayout() {
    this.isOpened.value = false
  }

  /***
   * day组件选中的日期
   * @param val 时间值
   */
  onCatchSelectedDayOrTime(val: string) {
    this.isOpened.value = false
    this.context.emit('update:modelValue', val)
  }

  /**
   * day组件选中范围
   * @param range 选中的范围
   */
  onCatchSelectedRange(range) {
    if (range.end) {
      this.isOpened.value = false
    }
    this.context.emit('update:modelValue', range)
  }
}

export default defineComponent({
  name: 'y-date-selector',
  components: {
    'Calendar': defineAsyncComponent(() => import('../calendar/calendarBasic/calendarBasic.vue')),
    'FloatLayout': defineAsyncComponent(() => import('../floatLayout/floatLayout.vue'))
  },
  props: {
    info: {
      type: Object as PropType<YDateSelector.DateSelectorInfo>,
      default: {}
    },
    modelValue: {
      type: String as PropType<string>,
      default: '',
    }
  },
  emits: ['update:modelValue'],
  setup(props: YDateSelector.DateSelectorProps, context: SetupContext) {
    const service = new DateSelectorService(props, context)
    return {
      IconCloseCircle,
      isOpened: service.isOpened,
      elementName: service.elementName,
      onClearDate: service.onClearDate.bind(service),
      onOpenFloatLayout: service.onOpenFloatLayout.bind(service),
      onCatchCloseFloatLayout: service.onCatchCloseFloatLayout.bind(service),
      onCatchSelectedDayOrTime: service.onCatchSelectedDayOrTime.bind(service),
      onCatchSelectedRange: service.onCatchSelectedRange.bind(service),
    };
  }
});
