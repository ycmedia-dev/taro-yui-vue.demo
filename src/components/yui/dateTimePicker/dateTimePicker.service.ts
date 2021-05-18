import { PropType, SetupContext, defineComponent, defineAsyncComponent, ref, Ref, watch } from 'vue'
import { YFormPattern } from '../form/types/form.d'
import { YDateTimePicker } from './types/dateTimePicker'
import './dateTimePicker.scss'
import IconCloseCircle from './assets/img/icon_close_circle.svg'
import { CalendarBasic } from '../calendar/calendarBasic/types/calendarBasic.d'
import { setNumberWithZero, getYearMonthDay } from './utils/util'


/**
 * 日期时间
 */
class DateTimePickerService {

  /**
   * 上下文
   */
  private context: SetupContext

  props: YDateTimePicker.YDateTimePickerProps

  /***
   * 是否显示弹窗
   */
  isShowDialog: Ref<boolean> = ref(false)


  /**
   * 按钮元素id
   */
  btnElId: string = this.randomStr(16)


  /**
   * 日历参数
   */
  options: YDateTimePicker.timePickerOptions;

  /**
   * 时间选择器参数
   */
  timeOptions = ref({
    type: 'time',
    placeholder: '选择时间',
  })

  /**
   * 选中的日期
   */
  dateStr: Ref<string> = ref('')

  /**
   * 选中的时分秒
   */
  timeStr: Ref<string> = ref('')

  dateTimeStr = ref('')

  constructor(props: YDateTimePicker.YDateTimePickerProps, context: SetupContext) {
    this.context = context;
    this.props = props;
    this.options = {
      ...{
        placeholder:'选择日期',
        isMultiSelect:false,
        format:'YYYY-MM-DD',
        canClear: true
      },
      ...props.options
    }
    this.toSetDateTimeStr(props.modelValue)

    watch(() => props.modelValue, (newVal: string) => {
      this.toSetDateTimeStr(newVal)
    })
  }

  /**
   * 初始化日期，时间
   * @param modelValue 年-月-日  时：分：秒
   */
  private toSetDateTimeStr(modelValue: string) {
    if (!modelValue) {
      const { year, month, day, hour, minute } = getYearMonthDay(new Date())
      this.dateTimeStr.value = ''
      this.dateStr.value = `${year}-${setNumberWithZero(month + 1)}-${setNumberWithZero(day)}`
      this.timeStr.value = `${setNumberWithZero(hour)}:${setNumberWithZero(minute)}`
      return
    }

    let list = modelValue.split(' ')
    this.dateStr.value = list[0]
    this.timeStr.value = list[1]
    this.dateTimeStr.value = modelValue
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
   * 打开日历
   */
  onToggleDialog() {
    if (this.props.pattern === 'view') {
      return
    }
    this.isShowDialog.value = true
  }

  /***
   * 关闭日历
   */
  onHideDialog() {
    this.isShowDialog.value = false
  }

  /**
   * 日期选中事件
   */
  onSelectDate(e: CalendarBasic.SelectDateCallbackResult) {
    this.dateStr.value = e.startDate.format(this.options.format)
  }

  /**
   * 点击确定
   */
  onSubmit() {
    this.isShowDialog.value = false
    this.dateTimeStr.value = `${this.dateStr.value} ${this.timeStr.value}`
    this.context.emit('update:modelValue',this.dateTimeStr.value)
  }

  /**
   * 清除
   */
  onClearTime() {
    this.context.emit('update:modelValue', '')
  }
}

export default defineComponent({
  name: 'y-date-time-picker',
  components: {
    'y-form-item-picker': defineAsyncComponent(() => import('../formItemPicker/formItemPicker.vue')),
    'y-calendar': defineAsyncComponent(() => import('../calendar/calendarBasic/calendarBasic.vue')),
  },
  props: {
    pattern: {
      type: String as PropType<string>,
      default: 'edit'
    },
    options: {
      type: Object as PropType<YDateTimePicker.timePickerOptions>,
      default: {
        placeholder:'选择日期',
        isMultiSelect:false
      }
    },
    modelValue: {
      type: [String] as PropType<string>,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props: YDateTimePicker.YDateTimePickerProps, context: SetupContext) {
    const service = new DateTimePickerService(props, context)
    return {
      IconCloseCircle,
      YFormPattern,
      isShowDialog: service.isShowDialog,
      btnElId: service.btnElId,
      options: service.options,
      timeOptions: service.timeOptions,
      dateStr: service.dateStr,
      timeStr: service.timeStr,
      dateTimeStr: service.dateTimeStr,
      onToggleDialog: service.onToggleDialog.bind(service),
      onHideDialog: service.onHideDialog.bind(service),
      onSelectDate: service.onSelectDate.bind(service),
      onSubmit: service.onSubmit.bind(service),
      onClearTime: service.onClearTime.bind(service),
    };
  }
});
