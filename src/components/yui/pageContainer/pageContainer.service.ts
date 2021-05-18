import { defineComponent, ref, Ref, provide, computed, SetupContext, watch } from 'vue'
import { pageContainerKey } from './token'
import { YPageContainer } from './types/pageContainer.d'
import './pageContainer.scss'

/**
 * 页面容器组件
 */
class PageContainerService {

  /**
   * 上下文
   */
  context: SetupContext<YPageContainer.Events>

  /**
   * 页面容器上下文
   */
  pageContainerContext: Ref<YPageContainer.Context> = ref({
    hasFixedButton: false,
    hasSearchBar: false,
    scrollTop: 1
  })

  /**
   * 类选择器
   */
  className = computed(() => {
    const className: string[] = []
    if (this.pageContainerContext.value.hasSearchBar) {
      className.push('search-bar');
    }
    if (this.pageContainerContext.value.hasFixedButton) {
      className.push('fixed-button');
    }
    if (className.length < 1) {
      return '';
    }
    return `y-page-container-${className.join('-')}`
  })

  constructor(context: SetupContext<YPageContainer.Events>) {
    this.context = context;
    provide(pageContainerKey, this.pageContainerContext)

    watch(this.pageContainerContext, (value) => {
      if(value.scrollTop===0){
        setTimeout(() => {
          this.pageContainerContext.value.scrollTop=1
        }, 200);
      }
    }, {
      deep: true
    })
  }

  /**
   * 上拉触底事件
   */
  onScrollToLower() {
    this.context.emit('onScrollToLower');
  }
}

export default defineComponent({
  name: 'y-page-container',
  setup(props, context: SetupContext<YPageContainer.Events>) {
    const service = new PageContainerService(context)
    return {
      className: service.className,
      pageContainerContext: service.pageContainerContext,
      onScrollToLower: service.onScrollToLower.bind(service),
    };
  }
});