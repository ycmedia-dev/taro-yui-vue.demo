import { PropType, defineComponent, SetupContext, defineAsyncComponent, ref, Ref, watch } from 'vue'
import { Checkbox, YCheckboxType } from '../checkbox/types/checkbox.d'
import { YForm } from '../form/types/form.d'
import { YFormItemCheckboxGroup } from './types/formItemCheckboxGroup.d'
import './formItemCheckboxGroup.scss'
import { UPDATE_MODEL_EVENT } from './utils/constants'

/**
 * 表单项-单选框组
 */
class YFormItemRadioGroupService {

  /**
   * 上下文
   */
  private context: SetupContext

  /**
   * 参数
   */
  options: Ref<YForm.FormItemCheckboxGroupOptions[]> = ref([])

  /**
   * 选中文字
   */
  checkboxText: Ref<string> = ref('')

  constructor(props: YFormItemCheckboxGroup.Props, context: SetupContext) {
    this.context = context;
    this.options.value = this.initOptions(props.options)
    this.checkboxText.value = this.getCheckboxText(props.modelValue, this.options.value)

    watch(() => props.modelValue, (newVal) => {
      this.checkboxText.value = this.getCheckboxText(newVal, this.options.value)
    })

    watch(() => props.options, (value) => {
      this.options.value = this.initOptions(value)
      this.checkboxText.value = this.getCheckboxText(props.modelValue, this.options.value)
    })
  }

  /**
   * 获取选中checkbox的文字
   * @param data 选中值value[]
   * @param optionList option[]
   */
  private getCheckboxText(data: Checkbox.IModelType[], optionList: YForm.FormItemCheckboxGroupOptions[]): string {
    let list: string[] = []

    data.length && data.forEach(value => {
      optionList.forEach(item => {
        if (item.value === value ) {
          list.push(item.label)
        }
      })
    })
    return list.join(',')
  }

  /**
   * 初始化参数
   * @param options 参数
   */
  private initOptions(options: YForm.FormItemCheckboxGroupOptions[]) {
    options.forEach((item) => {
      if (!item.type) {
        item.type = YCheckboxType.checkbox
      }
    })
    return options;
  }

  /**
   * 单选框发生变化事件
   * @param e
   */
  onChange(e: Checkbox.IModelType) {
    this.context.emit(UPDATE_MODEL_EVENT, e)
  }
}

export default defineComponent({
  name: 'y-form-item-checkbox-group',
  components: {
    'y-checkbox': defineAsyncComponent(() => import('../checkbox/checkbox.vue')),
    'y-checkbox-group': defineAsyncComponent(() => import('../checkboxGroup/checkboxGroup.vue')),
  },
  props: {
    pattern: {
      type: String as PropType<string>,
      default: 'edit'
    },
    options: {
      type: Array as PropType<YForm.FormItemCheckboxGroupOptions[]>,
      default: []
    },
    modelValue: {
      type: Array as PropType<Checkbox.IModelType[]>,
      default: [],
    }
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props: YFormItemCheckboxGroup.Props, context: SetupContext) {
    const service = new YFormItemRadioGroupService(props, context)
    return {
      checkboxText: service.checkboxText,
      options: service.options,
      onChange: service.onChange.bind(service)
    };
  }
});
