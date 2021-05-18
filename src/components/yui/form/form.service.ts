import {computed, defineAsyncComponent, defineComponent, PropType, Ref, ref, SetupContext, watch} from 'vue'
import {YForm, YFormElType, YFormPattern} from './types/form.d'
import './form.scss'

/**
 * 表单组件
 */
class FormService {

  /**
   * 上下文
   */
  private context: SetupContext

  /**
   * 表单模式
   */
  pattern: Ref<string> = ref(YFormPattern.EDIT)

  /**
   * 分行显示的名单
   */
  columnWhiteList = ['y-textarea', 'y-upload']

  /**
   * 可配置清除的名单
   */
  clearRowTypeWhiteList = [YFormElType.DATE_PICKER, YFormElType.DATE_TIME_PICKER, YFormElType.CUSTOM_SELECTOR, YFormElType.SELECTOR]

  constructor(props: YForm.Props, context: SetupContext) {
    this.context = context;
    this.pattern.value = !!!props.pattern ? YFormPattern.EDIT : props.pattern
    watch(() => props.pattern, (newVal) => {
      this.pattern.value = !!!newVal ? YFormPattern.EDIT : newVal
    })
  }

  /**
   * 点击事件
   * @param index 下标
   */
  onClick(index: number) {
    this.context.emit('click', <YForm.ClickCallbackResult>{
      index: index
    })
  }

  /**
   * 清空自定义下拉选择器
   * @param type 组件类型
   * @param property 组件属性名
   */
  onClear(type: string, property: string) {
    if (type !== 'y-form-item-custom-selector') {
      return
    }
    this.context.emit('clear', property)
  }
}

export default defineComponent({
  name: 'y-form',
  components: {
    'y-textarea': defineAsyncComponent(() => import('../textarea/textarea.vue')),
    'y-date-picker': defineAsyncComponent(() => import('../datePicker/datePicker.vue')),
    'y-date-time-picker': defineAsyncComponent(() => import('../dateTimePicker/dateTimePicker.vue')),
    'y-upload': defineAsyncComponent(() => import('../upload/upload.vue')),
    'y-form-item-checkbox-group': defineAsyncComponent(() => import('../formItemCheckboxGroup/formItemCheckboxGroup.vue')),
    'y-form-item-input': defineAsyncComponent(() => import('./components/formItemInput/formItemInput.vue')),
    'y-form-item-text': defineAsyncComponent(() => import('./components/formItemText/formItemText.vue')),
    'y-form-item-radio-group': defineAsyncComponent(() => import('./components/formItemRadioGroup/formItemRadioGroup.vue')),
    'y-form-item-custom-selector': defineAsyncComponent(() => import('./components/formItemCustomSelector/formItemCustomSelector.vue')),
    'y-form-item-picker': defineAsyncComponent(() => import('../formItemPicker/formItemPicker.vue')),
    'y-editor': defineAsyncComponent(() => import('../editor/editor.vue'))
  },
  props: {
    pattern: {
      type: String as PropType<string>,
      default: 'edit'
    },
    rowList: {
      type: Array as PropType<YForm.FormItem[]>,
      default: [],
      validator(this: never, val: YForm.FormItem[]) {
        if (val.length < 1) {
          throw new Error('表单行数不能小于1')
        }
        return true;
      }
    },
    modelValue: {
      type: Object as PropType<object>,
      default: false
    }
  },
  emits: ['click', 'clear'],
  setup(props: YForm.Props, context: SetupContext) {
    const service = new FormService(props, context)

    const showRowList = computed(() => {
      return props.rowList.map(item => {
        let rowItem = {
          ...item
        }
        if (props.pattern === YFormPattern.VIEW && item.type === YFormElType.SELECTOR && item.viewModeProperty ||
              !!props.pattern && item.type === YFormElType.CUSTOM_SELECTOR && item.options?.disabled && item.viewModeProperty) {
          return {
            show: true,
            label: item.label,
            type: YFormElType.TEXT,
            property: item.viewModeProperty
          };
        }

        if (service.clearRowTypeWhiteList.includes(item.type)) {
          rowItem = {
            ...item,
            options: {
              ...{
                canClear: !item.require
              },
              ...item.options,
            }
          }
        }
        return rowItem
      })
    })

    return {
      showRowList,
      pattern: service.pattern,
      columnWhiteList: service.columnWhiteList,
      slots: context.slots,
      onClick: service.onClick.bind(service),
      onClear: service.onClear.bind(service)
    };
  }
});
