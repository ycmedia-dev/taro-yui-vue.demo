import { PropType, defineComponent, SetupContext, ref, Ref, watch } from 'vue'
import { YTimeline, ActionTypeEnum } from './types/timeline.d'
import './timeline.scss'


/**
 * 图像组件
 */
class TimelineService {
  /**
   * 上下文
   */
  context: SetupContext

  /**
   * 操作按钮列表
   */
  actionBtnList: Ref<YTimeline.ActionInfo[]> = ref([])

  /**
   * 基础操作列表
   */
  private baseActionMap: { [key: string]: string } = {
    "action_delete": "删除",
    "action_edit": "编辑",
  }

  /**
   * 操作列表
   */
  private actionList: ActionTypeEnum[]

  constructor(props: YTimeline.YTimelineProps, context: SetupContext) {
    this.context = context
    this.actionList = props.actionList || []
    this.actionList.length && this.computeActionBtnList()
    watch(() => props.actionList, (newVal) => {
      if (!!!newVal) {
        return
      }
      this.actionList = newVal
      this.computeActionBtnList()
    })
  }

  /**
   * 计算操作按钮
   */
  private computeActionBtnList() {
    const actionBtnList: YTimeline.ActionInfo[] = []
    this.actionList.forEach((item) => {
      actionBtnList.push({
        className: item,
        label: this.baseActionMap[item]
      })
    })
    this.actionBtnList.value = actionBtnList
  }

  /**
   * 操作按钮点击
   * @param type 类型
   * @param item 内容
   */
  onAction(type: string, item: object) {
    const data: YTimeline.ActionCallbackResult = {
      value: item,
      type: <ActionTypeEnum|string>type
    }
    this.context.emit('action', data)
  }

}

export default defineComponent({
  name: 'y-timeline',
  props: {
    modelValue: {
      type: Array as PropType<Object[]>,
      default: []
    },
    titleProperty: {
      type: String as PropType<string>,
      default: ''
    },
    dateTimeProperty: {
      type: String as PropType<string>,
      default: ''
    },
    contentProperty: {
      type: String as PropType<string>,
      default: ''
    },
    actionList: {
      type: Array as PropType<ActionTypeEnum[]>,
      default: []
    },
  },
  emits: ['action'],
  setup(props: YTimeline.YTimelineProps, context: SetupContext) {
    const service = new TimelineService(props, context)
    return {
      slots: context.slots,
      actionBtnList: service.actionBtnList,
      onAction: service.onAction.bind(service),
    };
  }
});
