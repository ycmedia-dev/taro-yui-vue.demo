import { ref, Ref, defineComponent, PropType, SetupContext, watch } from 'vue'
import { TaroEvent } from '@tarojs/components/types/event'
import './textarea.scss'
import { YFormPattern } from '../form/types/form.d'
import { YTextarea } from './types/textarea'
import {UPDATE_MODEL_EVENT} from './utils/constants'

/**
 * textarea组件
 */
class yTextareaService {

  /**
   * 上下文对象
   */
  context: SetupContext

  /**
   * textarea 输入值
   */
  modelValue: Ref<string> = ref('')

  /**
   * textarea 输入值数量
   */
  modelCursor: Ref<number | string> = ref(0)

  /**
   * 参数
   */
  options: YTextarea.TextAreaOptions;

  constructor(props: YTextarea.Props, context: SetupContext) {
    this.context = context
    this.options = {
      ...{
        maxLength: 200,
        placeholder: '',
        height: 200,
        disabled: false,
        autoFocus: false,
        showCount: true,
        autoHeight: false
      },
      ...props.options,
    }
    this.modelValue.value = props.modelValue||''
    this.modelCursor.value = this.modelValue.value.length

    watch(() => props.modelValue, (newVal) => {
      this.modelValue.value = newVal
      this.modelCursor.value = newVal ? newVal.length : 0
    }, {
      deep: true,
    })
  }


  /**
   * 
   * @param e 获取输入值
   */
  onChange(e: TaroEvent<HTMLInputElement>) {
    this.modelValue.value = e.detail.value
    this.modelCursor.value = e.detail.cursor
    this.context.emit(UPDATE_MODEL_EVENT, e.detail.value)
  }

}

export default defineComponent({
  name: 'y-textarea',
  props: {
    pattern: {
      type: String as PropType<string>,
      default: 'edit'
    },
    options: {
      type: Object as PropType<YTextarea.TextAreaOptions>,
      default: {
        maxLength: 200,
        placeholder: '',
        height: 200,
        disabled: false,
        autoFocus: false,
        showCount: true
      }
    },
    modelValue: {
      type: String as PropType<string>,
      default: ''
    }
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props: YTextarea.Props, context: SetupContext) {
    const service = new yTextareaService(props, context)
    return {
      YFormPattern,
      options: service.options,
      modelValue: service.modelValue,
      modelCursor: service.modelCursor,
      onChange: service.onChange.bind(service)
    }
  }
})
