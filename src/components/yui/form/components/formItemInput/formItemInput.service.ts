import { TaroEvent } from '@tarojs/components/types/event'
import { Ref, ref, PropType, defineComponent, SetupContext, computed, watch } from 'vue'
import { YForm, YFormPattern } from '../../types/form.d'
import { YFormItemInput, YFormItemInputElType } from './types/formItemInput.d'
import './formItemInput.scss'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'

/**
 * 表单项-文本框
 */
class YFormItemInputService {
  props:YFormItemInput.Props

  /**
   * 上下文
   */
  private context: SetupContext

  /**
   * 值
   */
  text = ref('')

  /**
   * 类型
   */
  type: Ref<string> = ref(YFormItemInputElType.INPUT_TEXT)

  /**
   * 是否时初始状态
   * */
  private isInit:boolean = true;

  constructor(props:YFormItemInput.Props, context: SetupContext) {
    this.props = props;
    this.context = context;
    if (props.options.type) {
      this.type.value = props.options.type === YFormItemInputElType.INPUT_PHONE ? YFormItemInputElType.INPUT_NUMBER :
        (props.options.type || YFormItemInputElType.INPUT_TEXT)
    }

    watch(() => props.modelValue, (newVal) => {
      if(this.isInit && props.modelValue == '0' &&
        (this.type.value === YFormItemInputElType.INPUT_NUMBER || this.type.value === YFormItemInputElType.INPUT_DIGIT)){
        this.text.value = ''
      }else {
        this.text.value = newVal
      }
    },{
      immediate:true
    })

    watch(() => props.options.type, (newVal) => {
      if (newVal) {
        this.type.value = newVal === YFormItemInputElType.INPUT_PHONE ? YFormItemInputElType.INPUT_NUMBER : (newVal || YFormItemInputElType.INPUT_TEXT)
      }
    }, {
      deep: true,
      immediate: true
    })
  }

  /**
   * 文本框发生变化事件
   * @param e
   */
  onChange(e: TaroEvent<HTMLInputElement>) {
    this.isInit = false;
    const { options } = this.props
    let val = e.detail.value
    let newVal = ''
    this.text.value = val
    if (options.type === YFormItemInputElType.INPUT_NUMBER || options.type === YFormItemInputElType.INPUT_PHONE) {
      // 数字/电话
      newVal = val.replace(/[^\d]/g,'')
    } else if(options.type === YFormItemInputElType.INPUT_DIGIT) {
      // 小数点
      newVal = val.replace(/[^\d\.]/g,'')
    } else {
      newVal = val
    }
    this.text.value = newVal
    this.context.emit(UPDATE_MODEL_EVENT, newVal)
  }
}

export default defineComponent({
  name: 'y-form-item-input',
  props: {
    pattern: {
      type: String as PropType<string>,
      default: 'edit'
    },
    options: {
      type: Object as PropType<YForm.FormItemInputOptions>,
      default: {}
    },
    modelValue: {
      type: String as PropType<string>,
      default: '',
    }
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props: YFormItemInput.Props, context: SetupContext) {
    const service = new YFormItemInputService(props, context)

    const showText = computed(() => {
      if (props.options.type === YFormItemInputElType.INPUT_NUMBER || props.options.type === YFormItemInputElType.INPUT_PHONE) {
        return service.text.value.replace(/[^\d]/g,'')
      }

    })

    return {
      YFormItemInputElType,
      YFormPattern,
      showText,
      text: service.text,
      type: service.type,
      onChange: service.onChange.bind(service)
    };
  }
});
