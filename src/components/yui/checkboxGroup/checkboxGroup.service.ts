import { SetupContext, nextTick, computed, provide, PropType } from "vue";
import "./checkboxGroup.scss";
import { checkboxGroupKey } from '../checkbox/token'
import { UPDATE_MODEL_EVENT } from '../checkbox/utils/constants'
import { Checkbox } from '../checkbox/types/checkbox.d'
import { CheckboxGroup } from './types/checkboxGroup.d'

/**
 * 多选框分组
 */
class YcCheckboxGroupService {

  constructor(props: CheckboxGroup.Props, context: SetupContext) {
    const changeEvent = (value: Checkbox.IModelType[]) => {
      context.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        context.emit('change', value)
      })
    }

    const modelValue = computed<Checkbox.IModelType[]>({
      get() {
        return props.modelValue
      },
      set(val) {
        changeEvent(val)
      },
    })

    provide(checkboxGroupKey, {
      name: 'y-checkbox-group',
      modelValue,
      changeEvent,
    })
  }
}

export default {
  name: "y-checkbox-group",
  props: {
    modelValue: {
      type: Array as PropType<Checkbox.IModelType[]>,
      default: []
    },
  },
  emits: [UPDATE_MODEL_EVENT, "change"],
  setup(props: CheckboxGroup.Props, context: SetupContext) {
    new YcCheckboxGroupService(props, context);
  }
};
