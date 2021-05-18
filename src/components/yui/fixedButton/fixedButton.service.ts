import { Ref, ref, defineComponent, PropType, SetupContext, watch, inject } from "vue";
import Taro from '@tarojs/taro'
import "./fixedButton.scss";
import { FixedButton,DirectionType, BtnType } from './types/fixedButton.d'
import { pageContainerKey } from "../pageContainer/token";

/**
 * 底部固定button
 */
class FixedButtonService {

  /**
   * 上下文
   */
  context: SetupContext

  /**
   * 方向
   */
  btnDirection: Ref<string> = ref('')

  /**
   * 水平按钮类型
   */
  btnHorizontalTypeList: Ref<string[]> = ref([BtnType.CANCEL, BtnType.PRIMARY])

  /**
   * 垂直按钮类型
   */
  btnVerticalTypeList: Ref<string[]> = ref([BtnType.PRIMARY, BtnType.DELETE])

  /**
   * 是否是移动端
   */
  isMobile = Taro.getSystemInfoSync().platform.toLowerCase().indexOf('win')===-1

  constructor(props: FixedButton.Props, context: SetupContext) {
    this.context = context;

    let pageContainerContext = inject(pageContainerKey);
    if(pageContainerContext){
      pageContainerContext.value.hasFixedButton = true
    }

    this.btnDirection.value = props.direction || DirectionType.HORIZONTAL
    if (props.direction === DirectionType.VERTICAL) {
      this.btnVerticalTypeList.value = (!!!props?.btnTypeList || !(<string[]>props.btnTypeList).length) ?
        [BtnType.PRIMARY, BtnType.DELETE]
        :
        (<string[]>props.btnTypeList)
    } else {
      this.btnHorizontalTypeList.value = (!!!props?.btnTypeList || !(<string[]>props.btnTypeList).length) ?
        [BtnType.CANCEL, BtnType.PRIMARY]
        :
        (<string[]>props.btnTypeList)
    }

    watch(() => props.direction, (newVal) => {
      this.btnDirection.value = newVal || DirectionType.HORIZONTAL
    })

    watch(() => props.btnTypeList, (newVal) => {
      if (props.direction === DirectionType.VERTICAL) {
        this.btnVerticalTypeList.value = (!!!newVal || !(<string[]>newVal).length) ?
          [BtnType.PRIMARY, BtnType.DELETE]
          :
          (<string[]>newVal)
      } else {
        this.btnHorizontalTypeList.value = (!!!newVal || !(<string[]>newVal).length) ?
          [BtnType.CANCEL, BtnType.PRIMARY]
          :
          (<string[]>newVal)
      }
    }, {
      deep: true
    })
  }



  /**
   * 按钮点击事件
   * @param index 按钮下标
   */
  onClick(index: number) {
    this.context.emit('click', <FixedButton.ClickCallbackResult>{
      index: index
    })
  }
}

export default defineComponent({
  name:'y-fixed-button',
  props: {
    btnLabelList: {
      type: Array as PropType<string[]>,
      default: []
    },
    btnTypeList: {
      type: Array as PropType<string[]>,
      default: []
    },
    direction:{
      type:String as PropType<DirectionType>,
      default:DirectionType.HORIZONTAL
    }
  },
  emits: ['click'],
  setup(props: FixedButton.Props, context: SetupContext) {
    const service = new FixedButtonService(props, context);
    return {
      DirectionType,
      BtnType,
      btnDirection: service.btnDirection,
      btnHorizontalTypeList: service.btnHorizontalTypeList,
      btnVerticalTypeList: service.btnVerticalTypeList,
      isMobile:service.isMobile,
      onClick:service.onClick.bind(service)
    };
  }
})
