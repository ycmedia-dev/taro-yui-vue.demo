import { PropType, defineComponent, ref, Ref, defineAsyncComponent, SetupContext, watch, computed, inject } from 'vue'
import { YSearchBar, SearchBarElType } from './types/searchBar.d'
import './searchBar.scss'
import IconFilter from './img/icon-filter.svg'
import IconSearch from './img/icon-search.svg'
import IconCalendar from './img/icon-calendar.svg'
import IconDelete from './img/icon-delete.svg'
import { UseSetShortcuts } from '../calendar/hooks/useSetShortcuts'
import { pageContainerKey } from "../pageContainer/token";
import { YPageContainer } from "../pageContainer/types/pageContainer.d";

/**
 * 搜索栏组件
 */
class SearchBarService {
  /**
   * 上下文
   */
  context: SetupContext
  /**
   * 父组件传来的属性
   */
  props: YSearchBar.Props

  /**
   * 筛选弹框是否显示
   */
  isShowFilterModal: Ref<boolean> = ref(false)

  /**
   * 搜索bar需要自动搜索的组件
   */
  needAutoSearchList = [SearchBarElType.DATE_PICKER, SearchBarElType.DATE_TIME_PICKER, SearchBarElType.SELECTOR, SearchBarElType.CUSTOM_SELECTOR]

  /**
   * 页面容器上下文
   */
  private pageContainerContext: Ref<YPageContainer.Context> | undefined

  constructor(props: YSearchBar.Props, context: SetupContext) {
    this.context = context
    this.props = props

    this.pageContainerContext = inject(pageContainerKey);
    if (this.pageContainerContext) {
      this.pageContainerContext.value.hasSearchBar = true
    }

    if (this.needAutoSearchList.includes(props.rowList[0].type)) {
      watch(() => props.modelValue[props.rowList[0].property], (newVal, oldVal) => {
        if (newVal !== oldVal) {
          if (this.pageContainerContext) {
            this.pageContainerContext.value.scrollTop = 0
          }
          context.emit('onSearch', props.modelValue)
        }
      })
    }
  }


  /**
   * 监控搜索框值变化
   * @param val 搜索框值
   */

  /**
   * 点击搜索按钮
   */
  onSearch() {
    this.isShowFilterModal.value = false
    if (this.pageContainerContext) {
      this.pageContainerContext.value.scrollTop = 0
    }
    this.context.emit('onSearch', this.props.modelValue)
  }
  /**
   * 点击筛选
   */
  onFilter() {
    this.isShowFilterModal.value = !this.isShowFilterModal.value
    if (!this.isShowFilterModal.value) {
      if (this.pageContainerContext) {
        this.pageContainerContext.value.scrollTop = 0
      }
      this.context.emit('onSearch', this.props.modelValue)
    }
  }

  /**
   * 重置筛选项
   */
  onReset() {
    this.isShowFilterModal.value = false
    if (this.pageContainerContext) {
      this.pageContainerContext.value.scrollTop = 0
    }
    this.context.emit('onSearch', null)
  }

  /**
   * 关闭弹窗
   */
  onClose() {
    this.isShowFilterModal.value = false
  }

  /**
   * 点击搜索栏
   * @param type
   */
  onCatchClickBar(type: string) {
    if (type !== 'y-custom-selector') {
      return
    }
    this.context.emit('onClickBar')
  }

  /**
   * 清空自定义下拉选择器
   * @param type 组件类型
   * @param property 组件属性名
   */
  onCatchClear(type: string, property: string) {
    if (type !== 'y-custom-selector') {
      return
    }
    this.context.emit('onClear', property)
  }

  /**
   * 点击事件
   * @param index 下标
   */
  onCatchClickRow(index: number) {
    this.context.emit('onClick', index)
  }
}

export default defineComponent({
  name: 'y-search-bar',
  props: {
    type: {
      type: String as PropType<string>,
      default: ''
    },
    rowList: {
      type: Array as PropType<YSearchBar.SearchRowItem[]>,
      default: []
    },
    modelValue: {
      type: Object as PropType<Object>,
      default: {}
    }
  },
  components: {
    'y-input-box': defineAsyncComponent(() => import('./components/inputBox/inputBox.vue')),
    'y-date-picker': defineAsyncComponent(() => import('../datePicker/datePicker.vue')),
    'y-date-time-picker': defineAsyncComponent(() => import('../dateTimePicker/dateTimePicker.vue')),
    'y-custom-selector': defineAsyncComponent(() => import('./components/customSelector/customSelector.vue')),
    'y-form-item-picker': defineAsyncComponent(() => import('../formItemPicker/formItemPicker.vue')),
    'y-form-item-radio-group': defineAsyncComponent(() => import('../form/components/formItemRadioGroup/formItemRadioGroup.vue')),
    'y-form-item-checkbox-group': defineAsyncComponent(() => import('../formItemCheckboxGroup/formItemCheckboxGroup.vue')),
  },
  emits: ['onSearch', 'onClick', 'onClickBar'],
  setup(props: YSearchBar.Props, context: SetupContext) {
    const service = new SearchBarService(props, context)

    const showRowList = computed(() => {
      return props.rowList.map(item => {
        let rowItem = {
          ...item
        }
        if (item.type === SearchBarElType.DATE_PICKER && item.options?.isMultiSelect) {
          // 时间范围选择器默认快捷键
          rowItem = {
            ...item,
            options: {
              shortcuts: UseSetShortcuts(),
              ...item.options
            }
          }
        }
        return rowItem
      })
    })


    return {
      IconFilter,
      IconSearch,
      IconCalendar,
      IconDelete,
      showRowList,
      isShowFilterModal: service.isShowFilterModal,
      onSearch: service.onSearch.bind(service),
      onFilter: service.onFilter.bind(service),
      onReset: service.onReset.bind(service),
      onClose: service.onClose.bind(service),
      onCatchClickBar: service.onCatchClickBar.bind(service),
      onCatchClear: service.onCatchClear.bind(service),
      onCatchClickRow: service.onCatchClickRow.bind(service),

    };
  }
});
