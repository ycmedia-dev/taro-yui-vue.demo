import { PropType, SetupContext, defineComponent, ref, Ref } from 'vue'
import { YTabs } from './types/tabs.d'
import './tabs.scss'

/**
 * 切换组件
 */
class TabsService {
  private context: SetupContext

  /**
   * 当前选中index
   */
  currentIndex: Ref<number> = ref(0)

  constructor(props: YTabs.YTabsProps, context: SetupContext) {
    this.context = context
  }

  /**
   * 点击tab
   * @param index 索引
   * @param id tab id
   */
  onClickTab(index: number, id: number) {
    this.currentIndex.value = index
    this.context.emit('onClick', index, id)
  }

}

export default defineComponent({
  name: 'y-tabs',
  props: {
    options: {
      type: Array as PropType<YTabs.TabItem[]>,
      default: false,
    }
  },
  emits: ['onClick'],
  setup(props: YTabs.YTabsProps, context: SetupContext) {
    const service = new TabsService(props, context)
    return {
      currentIndex: service.currentIndex,
      onClickTab: service.onClickTab.bind(service)
    };
  }
});
