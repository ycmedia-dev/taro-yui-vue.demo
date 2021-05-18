import { defineComponent, PropType, SetupContext, provide, reactive, toRefs, nextTick } from "vue";
import "./radioGroup.scss";
import { RadioGroup } from "./types/radioGroup";
import { UPDATE_MODEL_EVENT } from './utils/constants'
import { radioGroupKey } from '../radio/token'
import { Radio } from '../radio/types/radio.d'

/**
 * 单选框组
 */
class RadioGroupService {

  /**
   * 上下文
   */
  private context: SetupContext

  constructor(props: RadioGroup.Props, context: SetupContext) {
    this.context = context;

    const changeEvent = (value: Radio.IModelType) => {
      this.context.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        context.emit('change', value)
      })
    }
    provide(radioGroupKey, reactive({
      name: 'y-radio-group',
      ...toRefs(props),
      changeEvent: changeEvent,
    }))
  }

  // methods


}

export default defineComponent({
  name: 'y-radio-group',
  props: {
    /**
     * 绑定值
     */
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      require: true,
      default:''
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props: RadioGroup.Props, context: SetupContext) {
    new RadioGroupService(props,context)
    return {};
  }
});
