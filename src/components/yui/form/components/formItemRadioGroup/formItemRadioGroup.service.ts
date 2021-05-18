import { PropType, defineComponent, SetupContext,defineAsyncComponent, ref, Ref, watch } from 'vue'
import {Radio} from '@/components/radio/types/radio'
import { YForm, YFormPattern } from '../../types/form.d'
import { YFormItemRadioGroup } from './types/formItemRadioGroup.d'
import './formItemRadioGroup.scss'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'
/**
 * 表单项-单选框组
 */
class YFormItemRadioGroupService {

  /**
   * 上下文
   */
  private context: SetupContext

  /***
   * 选中的文字
   */
  radioText: Ref<string> = ref('')

  constructor(props: YFormItemRadioGroup.Props, context: SetupContext) {
    this.context = context;
    let current = props.options.filter(item => item.value === props.modelValue)
    current.length && (this.radioText.value = current[0].label)

    watch(() => props.modelValue, (newVal) => {
      let current = props.options.filter(item => item.value === newVal)
      current.length && (this.radioText.value = current[0].label)
    }, {
      deep: true,
      immediate: true
    })
  }

  /**
   * 单选框发生变化事件
   * @param e 
   */
  onChange(e: Radio.IModelType) {
    this.context.emit(UPDATE_MODEL_EVENT, e)
  }
}

export default defineComponent({
  name: 'y-form-item-radio-group',
  components:{
    'y-radio': defineAsyncComponent(() => import('../../../radio/radio.vue')),
    'y-radio-group': defineAsyncComponent(() => import('../../../radioGroup/radioGroup.vue')),
  },
  props: {
    pattern: {
      type: String as PropType<string>,
      default: 'edit'
    },
    options: {
      type: Array as PropType<YForm.FormItemRadioGroupOptions[]>,
      default: {}
    },
    modelValue: {
      type: [String,Boolean,Number] as PropType<Radio.IModelType>,
      default: '',
    }
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props: YFormItemRadioGroup.Props, context: SetupContext) {
    const service = new YFormItemRadioGroupService(props, context)
    return {
      YFormPattern,
      radioText: service.radioText,
      onChange: service.onChange.bind(service)
    };
  }
});
