import Taro from "@tarojs/taro"
import './color.scss'
import { PropType, SetupContext, defineComponent, Ref, ref, watch } from 'vue'
import IconArrowDownSolid from '../../assets/img/icon-arrow-down-solid.svg'
import { Color } from './types/color.d'
import { ColorList } from './constant'
import { ImgElNameAndValue } from "../../utils/constant"
import { randomStr } from "../../utils//util";


class ColorService {

  /**
   * 上下文
   */
  context: SetupContext

  props: Color.ColorProps

  /**
   * 按钮id
   */
  btnElId = ref(randomStr(16))

  /**
   * 颜色弹窗
   */
  isShowColorModal: Ref<boolean> = ref(false)

  /**
   * 弹窗样式名
   */
  modalPositionTop = ref(0)

  // formats = ref({})

  constructor(props: Color.ColorProps, context: SetupContext) {
    this.context = context
    this.props = props
    // this.formats.value = props.formats

    // watch(() => props.formats, (newVal) => {
    //   this.formats.value = newVal
    // })
  }

  /**
   * 打开颜色弹窗
   */
  async onOpenColorModal() {
    Taro.createSelectorQuery().select(`#${this.btnElId.value}`).boundingClientRect((rect) => {
      if (!!!rect) {
        return
      }
      this.modalPositionTop.value = rect.top + 25
      console.log(rect.top)
    }).exec(() => {
      setTimeout(() => {
        this.isShowColorModal.value = true
      }, 100)
    })
  }

  /**
   * 点击颜色
   * @param item 选中颜色
   */
  onClickColor(item: string) {
    this.isShowColorModal.value = false
    this.context.emit('update:modelValue', item)
  }

  /**
   * 清除颜色
   */
  onClearColor() {
    this.isShowColorModal.value = false
    this.context.emit('update:modelValue', 'transparent')
  }

}

export default defineComponent({
  props: {
    modelValue:{
      type: String as PropType<string>,
      default: ''
    },
    iconName: {
      type: String as PropType<string>,
      default: ''
    },
    formats: {
      type: Object as PropType<object>,
      default: {}
    }
  },
  emits: ['update:modelValue'],
  setup(props: Color.ColorProps, context: SetupContext) {
    const service = new ColorService(props, context)

    return {
      IconArrowDownSolid,
      ImgElNameAndValue,
      ColorList,
      baseImgUrl: 'https://yyres.bcadx.com/assets/img/editor_icon/',
      btnElId: service.btnElId,
      // formats: service.formats,
      isShowColorModal: service.isShowColorModal,
      modalPositionTop: service.modalPositionTop,
      onOpenColorModal: service.onOpenColorModal.bind(service),
      onClickColor: service.onClickColor.bind(service),
      onClearColor: service.onClearColor.bind(service),
    }
  }
})
