import './floatLayout.scss'
import Taro from "@tarojs/taro"
import { PropType, SetupContext, defineComponent, ref, Ref, watch, nextTick, computed } from 'vue'
import IconClose from './assets/img/icon_close.svg'
import IconCloseWhite from './assets/img/icon_close_white.svg'
import { FloatLayout } from './types/floatLayout.d'

/**
 * 弹窗组件
 */
class FloatLayoutService {
  context: SetupContext

  /**
   * 是否显示弹窗
   */
  isShowModal: Ref<boolean> = ref(false)

  /**
   * 弹窗标题
   */
  title: Ref<string> = ref('')

  /**
   * 是否跟随上方
   */
  isFollowUp = ref(false)

  /**
   * 设备
   */
  model = ref('')

  /**
   * 跟随弹框的高度
   */
  followBodyHeight: Ref<string | number> = ref('auto')

  /**
   * 组件内部参考点top值
   */
  referenceRectTop = ref({})

  /**
   * 弹框宽度
   */
  modalWidth: Ref<string> = ref('')

  constructor(props: FloatLayout.FloatLayoutProps, context: SetupContext) {
    this.isShowModal.value = props.isOpened
    this.title.value = props.title
    this.context = context
    if (props.width) {
      this.modalWidth.value = typeof (props.width) === 'number' ? `${props.width}px` : props.width
    }

    watch(() => props.isOpened, async (newVal) => {
      if (!newVal) {
        this.isShowModal.value = newVal
      }
      const { model, screenHeight, windowHeight } = await Taro.getSystemInfoSync()
      let elOffsetTopHeight = 0
      this.model.value = model
      if (!props.elementName) {
        this.isShowModal.value = newVal
        return
      }
      //定义弹框高度
      Taro.createSelectorQuery().select(`#${props.elementName}`).boundingClientRect((rect) => {
        if (!!!rect) {
          return
        }
        elOffsetTopHeight = rect.top
        console.log('pc屏幕高度', windowHeight, elOffsetTopHeight)
        const differ = model === 'microsoft' ? windowHeight - elOffsetTopHeight : screenHeight - elOffsetTopHeight
        const minDiffer = model === 'microsoft' ? windowHeight / 3 : 300
        this.isFollowUp.value = differ < minDiffer
        this.followBodyHeight.value = this.isFollowUp.value ? `${elOffsetTopHeight - 150}px` : `${windowHeight - elOffsetTopHeight - 10}px`
      }).exec(() => {
        if (newVal) {
          this.isShowModal.value = newVal
          setTimeout(() => {
            Taro.createSelectorQuery().select('#modal-follow').boundingClientRect((rect) => {
              if (!!!rect) {
                return
              }
              console.log('modal-follow的位置', rect)
              const { height } = rect
              // 40：组件内部定点prev元素高
              this.referenceRectTop.value = !!props.maskOuterElId ? (this.isFollowUp.value ? elOffsetTopHeight - height - 40 : elOffsetTopHeight) : 0
            }).exec()
          }, 300)
        }
      })
    })
  }

  /**
   * 关闭弹窗
   * */
  onHideModal() {
    this.context.emit('onClose')
  }
}

export default defineComponent({
  name: 'y-float-layout',
  props: {
    isOpened: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    type: {
      type: String as PropType<string>,
      default: 'bottom',
    },
    width: {
      type: String as PropType<number | string>,
      default: 'calc(90vw)',
    },
    title: {
      type: String as PropType<string>,
      default: '',
    },
    elementName: {
      type: String as PropType<string>,
      default: '',
    },
    maskOuterElId: {
      type: String as PropType<string>,
      default: '',
    },
  },
  emits: ['onClose'],
  setup(props: FloatLayout.FloatLayoutProps, context: SetupContext) {
    const service = new FloatLayoutService(props, context)
    return {
      Taro,
      IconClose,
      IconCloseWhite,
      slots: context.slots,
      model: service.model,
      followBodyHeight: service.followBodyHeight,
      isFollowUp: service.isFollowUp,
      isShowModal: service.isShowModal,
      referenceRectTop: service.referenceRectTop,
      modalWidth: service.modalWidth,
      onHideModal: service.onHideModal.bind(service)
    };
  }
});
