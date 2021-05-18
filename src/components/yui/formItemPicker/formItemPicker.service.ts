import { PropType, defineComponent, SetupContext, Ref, ref, watch, computed } from "vue"
import { TaroEvent } from '@tarojs/components/types/event'
import './formItemPicker.scss'
import IconCloseCircle from './assets/img/icon_close_circle.svg'
import { YFormPattern } from '../form/types/form.d'
import { YFormItemPicker } from "./types/formItemPicker"


/**
 * 切换组件
 */
class FormItemPickerService {
  /**
   * 上下文
   */
  context: SetupContext

  /**
   * 默认
   */
  defaultOptionList: YFormItemPicker.FormItemPickerOption[] = [{
    id: 0,
    label: '全部'
  }]

  /**
   * 选中值
   */
  modelValue: Ref<number | number[] | string | string[]> = ref('')

  /**
   * 组件参数
   */
  options: Ref<YFormItemPicker.FormItemPickerInfo | {}> = ref({})

  /**
   * selector picker选中index
   */
  pickerIndex: Ref<number> = ref(-1)

  /**
   * multiSelector picker选中index
   */
  multiIndex: Ref<number[]> = ref([])

  /***
   * time picker选中值
   */
  time: Ref<string> = ref('')

  /***
   * region picker选中值
   */
  region: Ref<string[]> = ref([])

  constructor(props: YFormItemPicker.YFormItemPickerProps, context: SetupContext) {
    this.context = context
    const { options, modelValue } = props
    this.modelValue.value = modelValue
    this.options.value = {
      ...{
        type: 'selector',
        canClear: true,
        canAll: false
      },
      ...options
    }
    const { canAll, type, optionList } = <YFormItemPicker.FormItemPickerInfo>this.options.value
    if (canAll && type === 'selector') {
      (<YFormItemPicker.FormItemPickerInfo>this.options.value).optionList = this.defaultOptionList.concat(<YFormItemPicker.FormItemPickerOption[]>optionList)
    }
    this.toSetPickerIndex()

    watch(() => props.modelValue, (newVal: number | number[] | string | string[]) => {
      this.modelValue.value = newVal
      this.toSetPickerIndex()
    })
    watch(() => props.options, (newVal) => {
      this.options.value = {
        ...{
          type: 'selector',
          canClear: true
        },
        ...newVal
      }
      const { canAll, type, optionList } = <YFormItemPicker.FormItemPickerInfo>this.options.value
      if (canAll && type === 'selector') {
        (<YFormItemPicker.FormItemPickerInfo>this.options.value).optionList = this.defaultOptionList.concat(<YFormItemPicker.FormItemPickerOption[]>optionList)
      }
      this.toSetPickerIndex()
    },{
      deep:true
    })
  }

  /***
   * 根据id获取picker的index
   * @param modelValue 选中的id或id集合
   */
  private toSetPickerIndex() {
    const { type, optionList } = this.options.value
    switch (type) {
      case 'selector':
        this.pickerIndex.value = (<YFormItemPicker.FormItemPickerOption[]>optionList).length ? (<YFormItemPicker.FormItemPickerOption[]>optionList).findIndex((item: YFormItemPicker.FormItemPickerOption) => item.id === this.modelValue.value) : -1
        break
      case 'multiSelector':
        let multiIdList: number[] = JSON.parse(JSON.stringify(this.modelValue.value))
        let idxList: number[] = [];
        (<YFormItemPicker.FormItemPickerOption[][]>optionList).length && multiIdList.forEach((id: number, index: number) => {
          let currOption: YFormItemPicker.FormItemPickerOption[] = (<YFormItemPicker.FormItemPickerOption[][]>optionList)[index]
          let idx = currOption.findIndex(item => item.id === id)
          idxList.push(idx)
        })
        this.multiIndex.value = idxList
        break
      case 'time':
        this.time.value = this.modelValue.value as string
        break
      case 'region':
        this.region.value = this.modelValue.value as string[]
        break
    }
  }


  /**
   * 监控选择器选择变化
   * @param e index
   */
  onChange(e: TaroEvent<HTMLInputElement>) {
    const { type, optionList } = this.options.value
    let val = e.detail.value
    switch (type) {
      case 'selector':
        if (val < 0) {
          break
        }
        let id = (<YFormItemPicker.FormItemPickerOption[]>optionList)[val].id
        this.pickerIndex.value = val
        this.context.emit('update:modelValue', id)
        break
      case 'multiSelector':
        let idList: number[] = []
        val.forEach((item: number, index: number) => {
          idList.push(optionList[index][item].id)
        })
        this.context.emit('update:modelValue', idList)
        break
      case 'time':
        this.time.value = val
        this.context.emit('update:modelValue', val)
        break
      case 'region':
        this.region.value = val
        this.context.emit('update:modelValue', val)
        break
    }


  }

  /**
   * 清空
   */
  onClear() {
    const { type } = this.options.value
    switch (type) {
      case 'selector':
        this.pickerIndex.value = -1
        this.context.emit('update:modelValue', 0)
        break
      case 'multiSelector':
        this.multiIndex.value = []
        this.context.emit('update:modelValue', [])
        break
      case 'time':
        this.time.value = ''
        this.context.emit('update:modelValue', '')
        break
      case 'region':
        this.region.value = []
        this.context.emit('update:modelValue', [])
        break
    }

  }
}

export default defineComponent({
  name: 'y-form-item-picker',
  props: {
    pattern: {
      type: String as PropType<string>,
      default: 'edit'
    },
    customItem: {
      type: String as PropType<string>,
      default: ''
    },
    options: {
      type: Object as PropType<YFormItemPicker.FormItemPickerInfo>,
      default: {
        type: 'selector',
        placeholder: '',
        optionList: []
      },
    },
    modelValue:{
      type: Number || Array || String,
      default: 0 || []
    }
  },
  inject: ['for'],
  emits: ['onClick'],
  setup(props: YFormItemPicker.YFormItemPickerProps, context: SetupContext) {
    const service = new FormItemPickerService(props, context)

    const multiTextStr = computed(() => {
      const { options : { optionList } } = props
      let list: string[] = []
      service.multiIndex.value.forEach((item, index) => {
        list.push(optionList[index][item].label)
      })
      return list.join(',')
    })

    return {
      IconCloseCircle,
      multiTextStr,
      YFormPattern,
      modelValue: service.modelValue,
      options: service.options,
      pickerIndex: service.pickerIndex,
      multiIndex: service.multiIndex,
      time: service.time,
      region: service.region,
      onChange: service.onChange.bind(service),
      onClear: service.onClear.bind(service)
    };
  }
});
