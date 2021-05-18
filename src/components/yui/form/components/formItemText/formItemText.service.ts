import { ref, PropType, defineComponent, watch } from 'vue'
import { YFormItemText } from './types/formItemText.d'
import './formItemText.scss'

/**
 * 表单项-文本
 */
class FormItemTextService {
  /**
   * 文字
   */
  text = ref('')

  constructor(props: YFormItemText.Props) {
    this.text.value = props.modelValue
  }
}


export default defineComponent({
  name: 'y-form-item-text',
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: '',
    },
    options: {
      type: Object as PropType<YFormItemText.FormItemTextOptions>,
      default: {}
    }
  },
  setup(props: YFormItemText.Props) {
    const service = new FormItemTextService(props)
    watch(() => props.modelValue, (newVal) => {
      service.text.value = newVal
    })


    return {
      text: service.text
    };
  }
});
