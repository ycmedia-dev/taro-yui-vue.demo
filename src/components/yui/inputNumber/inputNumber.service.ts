import { PropType, SetupContext, defineComponent, ref, Ref, computed, watch } from 'vue'
import Taro from '@tarojs/taro'
import { TaroEvent } from '@tarojs/components/types/event'
import IconPlusPrimary from './assets/img/icon_plus_primary.svg'
import IconPlusDisabled from './assets/img/icon_plus_disabled.svg'
import IconMinusDisabled from './assets/img/icon_minus_disabled.svg'
import IconMinusPrimary from './assets/img/icon_minus_primary.svg'
import { YInputNumber } from './types/inputNumber.d'
import './inputNumber.scss'

/**
 * 计数器
 */
class InputNumberService {

  /**
   * 上下文
   */
  context: SetupContext

  props: YInputNumber.YInputNumberProps

  /**
   * 数目
   * */
  count: Ref<number> = ref(3)


  constructor(props: YInputNumber.YInputNumberProps, context: SetupContext) {
    this.context = context
    this.props = props
    this.count.value = props.modelValue
    watch(() => props.modelValue, (newVal) => {
      this.count.value = newVal
    })
  }

  /***
   * 点击+/-
   * @param type 按钮类型
   */
  onToggleAction(addCount: number) {
    const {options: { maxCount, minCount, disabled }} = this.props
    if (!!disabled) {
      return
    }
    console.log(typeof this.count.value)
    if((this.count.value === maxCount && addCount > 0) || (this.count.value === minCount && addCount < 0)){
      return
    }
    const value = this.count.value + addCount;
    this.count.value = value
    this.context.emit('update:modelValue', this.count.value)
  }

  /**
   * 手动修改
   * @param e
   */
  onChangeNumber(e: TaroEvent<HTMLInputElement>) {
    console.log(e.detail.value)
    let value = e.detail.value
    const maxCount = this.props.options.maxCount || 9999
    const minCount = this.props.options.minCount || 1
    if(value && (+value > maxCount || +value < minCount)){
      Taro.showToast({
        title: `请输入${minCount}-${maxCount}的数字`,
        duration: 500,
        icon: "none"
      })
    }
    this.count.value = +value
    this.context.emit('update:modelValue', this.count.value)
  }
}

export default defineComponent({
  name: 'y-input-number',
  props: {
    modelValue: {
      type: Number as PropType<number>,
      default: 0,
    },
    options: {
      type: Object as PropType<YInputNumber.InputNumberInfo>,
      default: {
        minCount: 1,
        maxCount: 9999
      },
    }
  },
  emits: ['update:modelValue'],
  setup(props: YInputNumber.YInputNumberProps, context: SetupContext) {
    const service = new InputNumberService(props, context)

    /***
     * 显示的数字
     */
    const showCount = computed<string>(() => {
      if (service.count.value < 1) {
        return ''
      }
      if(service.count.value > props.options.maxCount || service.count.value < props.options.minCount){
        return ''
      }
      return `${service.count.value}`
    })

    return {
      IconPlusPrimary,
      IconPlusDisabled,
      IconMinusPrimary,
      IconMinusDisabled,
      count: service.count,
      showCount,
      onToggleAction: service.onToggleAction.bind(service),
      onChangeNumber: service.onChangeNumber.bind(service),
    };
  }
});
