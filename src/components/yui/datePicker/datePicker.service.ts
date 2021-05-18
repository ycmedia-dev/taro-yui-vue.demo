import { ref, Ref, defineComponent, PropType, SetupContext, defineAsyncComponent, watch, onMounted } from 'vue'
import './datePicker.scss'
import Taro from "@tarojs/taro"
import IconCloseCircle from './assets/img/icon_close_circle.svg'
import { YFormPattern } from '../form/types/form.d'
import { YDatePicker } from './types/datePicker.d'
import { CalendarBasic, CalendarTypeEnum } from "../calendar/calendarBasic/types/calendarBasic.d";
import { getYearMonthDay, formatDate } from '../calendar/utils/util'
import { UPDATE_MODEL_EVENT } from './utils/constants'
import { Dayjs } from 'packages/taro-yui-vue-demo/node_modules/dayjs'


/**
 * 日期选择器
 */
class YDatePickerService {

  /**
   * 上下文
   */
  context: SetupContext

  props: YDatePicker.Props

  /***
   * 是否显示弹窗
   */
  showDialog: Ref<boolean> = ref(false)

  /**
   * 按钮元素id
   */
  btnElId: string = this.randomStr(16)

  /**
   * 是否选中了日期
   */
  isSelectedDate:Ref<boolean> = ref(false)

  /**
   * 参数
   */
  options: Ref<YDatePicker.YDatePickerOptions | {}> = ref({});

  /**
   * 选中的日期，单个日期或者日期范围
   */
  modelValue:Ref<string|string[]> = ref('')

  /**
   * 参入日历中的开始时间
   */
  calendarModelValue:Ref<string> = ref('')

  constructor(props: YDatePicker.Props, context: SetupContext) {
    this.context = context;
    this.props = props
    watch(() => props.options, (newVal) => {
      const { type, format } = newVal
      this.options.value = {
        ...{
          placeholder:'选择日期',
          isMultiSelect:false,
          canClear: true
        },
        ...newVal,
        format: type === CalendarTypeEnum.MONTH || type === CalendarTypeEnum.QUARTER ?
          'YYYY-MM'
          :
          type === CalendarTypeEnum.YEAR ? 'YYYY' : format ? format : 'YYYY-MM-DD'
      }
      this.toInitData(props, props.modelValue)
    }, {
      deep: true,
      immediate: true
    })
    watch(() => props.modelValue, (newValue) => {
      this.toInitData(props, newValue)
    }, {
      immediate: true
    })
  }

  /**
   * 初始化
   * @param props 组件参数props
   * @param val 组件modelValue
   */
  toInitData(props: YDatePicker.Props, val: string | string[]) {
    this.modelValue.value = val
    if (!props.options.isMultiSelect) {
      this.isSelectedDate.value = (<string>val)!==''
      this.calendarModelValue.value = val as string
    } else {
      const tempDateList = <string[]>val;
      this.isSelectedDate.value = tempDateList[0] && tempDateList[1] ? true: false
      this.calendarModelValue.value = val.length > 1 ? val[0] : ''
      this.options.value.endDate = val.length > 1 ? val[1] : ''
    }
  }

  /**
   * 生成随机字符串
   * @param long 长度
   */
  private randomStr(long: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const maxPos = chars.length;
    var string = '';
    for (var i = 0; i < long; i++) {
      string += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return string;
  }


  /**
   * 日期选中事件
   */
  onSelectDate(e: CalendarBasic.SelectDateCallbackResult) {
    this.modelValue.value = this.options.value.isMultiSelect? [
      e.startDate.format(this.options.value.format),
      (<Dayjs>e.endDate).format(this.options.value.format)
    ]:e.startDate.format(this.options.value.format)
    this.isSelectedDate.value = true;
    this.showDialog.value = false;
    this.context.emit(UPDATE_MODEL_EVENT,this.modelValue.value)
  }

  /**
   * 获取快捷键值
   * @param val 快捷键值[start,end]
   */
  async onShortcut(val: string[]) {
    this.modelValue.value = val
    this.calendarModelValue.value = val[0]
    this.isSelectedDate.value = true
    this.showDialog.value = false
  }

  /***
   * 清除
   */
  onClearTime() {
    this.modelValue.value = this.options.value.isMultiSelect ? [] : ''
    this.isSelectedDate.value = false
    this.context.emit(UPDATE_MODEL_EVENT,this.modelValue.value)
  }

  /***
   * 切换弹窗显示状态
   */
  onToggleDialog() {
    if (this.props.pattern === 'view') {
      return
    }
    this.showDialog.value = !this.showDialog.value
  }

  /***
   * 关闭弹窗组件
   */
  onCatchCloseFloatLayout() {
    this.showDialog.value = false
  }
}

export default defineComponent({
  name: 'y-date-picker',
  components: {
    'y-float-layout': defineAsyncComponent(() => import('../floatLayout/floatLayout.vue')),
    'y-calendar': defineAsyncComponent(() => import('../calendar/calendarBasic/calendarBasic.vue')),
  },
  props: {
    pattern: {
      type: String as PropType<string>,
      default: 'edit',
    },
    options: {
      type: Object as PropType<YDatePicker.YDatePickerOptions>,
      default: {
        placeholder:'选择日期',
        isMultiSelect:false
      }
    },
    modelValue: {
      type: [String, Array] as PropType<string | string[]>,
      default: ''
    }
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props: YDatePicker.Props, context: SetupContext) {
    const service = new YDatePickerService(props,context)


    return {
      IconCloseCircle,
      YFormPattern,
      showDialog: service.showDialog,
      btnElId: service.btnElId,
      isSelectedDate: service.isSelectedDate,
      options: service.options,
      modelValue: service.modelValue,
      calendarModelValue: service.calendarModelValue,
      onSelectDate: service.onSelectDate.bind(service),
      onShortcut: service.onShortcut.bind(service),
      onToggleDialog: service.onToggleDialog.bind(service),
      onClearTime: service.onClearTime.bind(service),
      onCatchCloseFloatLayout: service.onCatchCloseFloatLayout.bind(service)
    };
  }
})
