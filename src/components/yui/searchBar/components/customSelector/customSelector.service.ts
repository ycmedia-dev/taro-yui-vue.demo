import { Ref, ref, PropType, defineComponent, SetupContext, watch } from 'vue'
import { YCustomSelector } from './types/customSelector.d'
import './customSelector.scss'
import IconCloseCircle from '../../img/icon_close_circle.svg'

/**
 * 表单项-自定义选择器
 */
class YFormItemInputService {

  /**
   * 上下文
   */
  private context: SetupContext

  /**
   * 值
   */
  modelValue: Ref<string> = ref('')

  /**
   * 组件参数
   */
  options: YCustomSelector.CustomSelectorInfo

  constructor(props: YCustomSelector.YCustomSelectorProps, context: SetupContext) {
    console.log('自定义组件',  props)
    this.context = context;
    this.options = {
      ...{
        canClear: true
      },
      ...props.options,
    }
    this.modelValue.value = props.modelValue;
    watch(() => props.modelValue, (newVal) => {
      this.modelValue.value = newVal
    })
  }

  /**
   * 点击事件
   * @param e 
   */
  onClick() {
    this.context.emit('onClick')
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
  name: 'y-custom-selector',
  props: {
    options: {
      type: Object as PropType<YCustomSelector.CustomSelectorInfo>,
      default: {}
    },
    modelValue: {
      type: String as PropType<string>,
      default: '',
    }
  },
  emits: ['onClick', 'onClear', 'update:modelValue'],
  setup(props: YCustomSelector.YCustomSelectorProps, context: SetupContext) {
    const service = new YFormItemInputService(props, context)
    return {
      IconCloseCircle,
      options: service.options,
      modelValue: service.modelValue,
      onClear: service.onClear.bind(service),
      onClick: service.onClick.bind(service)
    };
  }
});
