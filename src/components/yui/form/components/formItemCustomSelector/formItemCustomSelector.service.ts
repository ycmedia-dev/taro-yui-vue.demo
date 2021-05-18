import { Ref, ref, PropType, defineComponent, SetupContext, watch } from 'vue'
import { YForm, YFormPattern } from '../../types/form.d'
import { YFormItemCustomSelector } from './types/formItemCustomSelector.d'
import './formItemCustomSelector.scss'
import IconCloseCircle from '../../assets/img/icon_close_circle.svg'


/**
 * 表单项-自定义选择器
 */
class YFormItemInputService {

  /**
   * 上下文
   */
  private context: SetupContext

  /**
   * 模式
   */
  pattern: Ref<string> = ref('edit')

  /**
   * 值
   */
  modelValue: Ref<string> = ref('')

  /**
   * 组件参数
   */
  options: YForm.YFormItemCustomSelectorOptions

  constructor(props: YFormItemCustomSelector.Props, context: SetupContext) {
    this.context = context;
    this.options = {
      ...{
        canClear: true
      },
      ...props.options,
    }
    this.modelValue.value = props.modelValue;
    this.pattern.value = !!!props.pattern ? 'edit' : props.pattern
    watch(() => props.modelValue, (newVal) => {
      this.modelValue.value = newVal
    })
    watch(() => props.pattern, (newVal) => {
      this.pattern.value = !!!newVal ? 'edit' : newVal
    })
  }

  /**
   * 点击事件
   * @param e
   */
  onClick() {
    if (this.pattern.value === YFormPattern.VIEW) {
      return
    }
    this.context.emit('click')
  }

  /**
   * 点击删除
   */
  onClear() {
    this.modelValue.value = ''
    this.context.emit('update:modelValue',this.modelValue.value)
    this.context.emit('onClear')
  }
}

export default defineComponent({
  name: 'y-form-item-custom-selector',
  props: {
    pattern: {
      type: String as PropType<string>,
      default: 'edit'
    },
    options: {
      type: Object as PropType<YForm.YFormItemCustomSelectorOptions>,
      default: {}
    },
    modelValue: {
      type: String as PropType<string>,
      default: '',
    }
  },
  emits: ['click', 'onClear', 'update:modelValue'],
  setup(props: YFormItemCustomSelector.Props, context: SetupContext) {
    const service = new YFormItemInputService(props, context)
    return {
      IconCloseCircle,
      YFormPattern,
      modelValue: service.modelValue,
      pattern: service.pattern,
      onClear: service.onClear.bind(service),
      onClick: service.onClick.bind(service)
    };
  }
});
