import { ref, Ref, defineComponent, PropType, SetupContext, watch } from 'vue'
import Taro from "@tarojs/taro"
import { Card, ActionTypeEnum } from './types/card.d'
import './card.scss'
import {CommonEvent} from "@tarojs/components";
class CardService {

  /**
   * 上下文
   */
  context: SetupContext;

  /**
   * 是否显示操作菜单
   */
  showAction: Ref<boolean> = ref(false)

  /**
   * 绑定数据
   */
  info: Ref<Object> = ref({})

  /**
   * 操作按钮列表
   */
  actionBtnList: Ref<Card.ActionInfo[]> = ref([])

  /**
   * 按钮元素id
   */
  btnElId: Ref<string> = ref(this.randomStr(16))

  /**
   * 操作
   */
  isPopUp = ref(false)

  /**
   * 是否显示body
   */
  isShowBody = ref(true)

  /**
   * 基础操作列表
   */
  private baseActionMap: { [key: string]: string } = {
    "action_delete": "删除",
    "action_edit": "编辑",
    "action_rename": "重命名",
    "action_disable": "禁用",
  }

  /**
   * 操作列表
   */
   private actionList: ActionTypeEnum[]

   /**
    * 自定义操作列表，默认值：[]
    */
   private customActionList: Card.ActionInfo[]

   constructor(props: Card.Props, context: SetupContext) {
    this.actionList = props.actionList;
    this.customActionList = props.customActionList || []
    this.computeActionBtnList()

    this.isShowBody.value = props.bodyPropertyList.some(item => {
      return props.info[item.name] !== ''
    })

    this.info.value = props.info
    this.context = context;
    watch(() => props.actionList, (newVal) => {
      this.actionList = newVal;
      this.computeActionBtnList()
    })
    watch(() => props.customActionList, (newVal) => {
      this.customActionList = newVal || []
      this.computeActionBtnList()
    })
  }

  /**
   * 计算操作按钮
   */
  private computeActionBtnList() {
    const actionBtnList: Card.ActionInfo[] = []
    this.actionList.forEach((item) => {
      actionBtnList.push({
        className: item,
        label: this.baseActionMap[item]
      })
    })
    this.customActionList.forEach((item) => {
      actionBtnList.push(item)
    })
    this.actionBtnList.value = actionBtnList
  }

  /**
   * 生成随机字符串
   * @param long 长度
   */
  private randomStr(long: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const maxPos = chars.length;
    var string = '';
    for (var i = 0; i < long; i++) {
      string += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return string;
  }

  /**
   * 显示操作菜单
   */
  async onShowAction() {
    const { model, screenHeight, windowHeight } = await Taro.getSystemInfoSync()
    Taro.createSelectorQuery().select(`#${this.btnElId.value}`).boundingClientRect((rect) => {
      let elOffsetTopHeight = rect.top
      console.log('屏幕高度',windowHeight)
      console.log('elOffsetBottomHeight',screenHeight-elOffsetTopHeight, this.btnElId.value, rect)
      const differ = model === 'microsoft' ? windowHeight - elOffsetTopHeight : screenHeight - elOffsetTopHeight
      if (differ < 300) {
        this.isPopUp.value = true
      } else {
        this.isPopUp.value = false
      }
    }).exec(() => {
      this.showAction.value = true;
    })
  }

  /**
   * 隐藏操作菜单
   */
  onCloseAction() {
    this.showAction.value = false;
  }

  /**
   * 操作按钮点击
   * @param type 类型
   */
  onAction(type: string) {
    this.showAction.value = false;
    const data: Card.ActionCallbackResult = {
      value: this.info.value,
      type: <ActionTypeEnum|string>type
    }
    this.context.emit('action', data)
  }

  /**
   * 卡片点击
   */
  onClick(e:CommonEvent) {
    // title是分享button上的data-title
    if(e.target.dataset['title']){
      this.showAction.value = false
      return
    }
    const data: Card.ClickCallbackResult = {
      value: this.info.value,
    }
    this.context.emit('click', data)
  }
}

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<Object>,
      default: {}
    },
    titleProperty: {
      type: String as PropType<string>,
      default: ''
    },
    bodyPropertyList: {
      type: Array as PropType<Card.CardProperty[]>,
      default: []
    },
    actionList: {
      type: Array as PropType<ActionTypeEnum[]>,
      default: []
    },
    customActionList: {
      type: Array as PropType<Card.ActionInfo[]>,
      default: []
    }
  },
  name: 'y-card',
  emits: ['action', 'click'],
  setup(props: Card.Props, context: SetupContext) {
    const service = new CardService(props, context)
    return {
      slots: context.slots,
      isShowBody: service.isShowBody,
      isPopUp: service.isPopUp,
      btnElId: service.btnElId,
      showAction: service.showAction,
      actionBtnList:service.actionBtnList,
      onShowAction: service.onShowAction.bind(service),
      onAction: service.onAction.bind(service),
      onClick: service.onClick.bind(service),
      onCloseAction: service.onCloseAction.bind(service),
    }
  }
})
