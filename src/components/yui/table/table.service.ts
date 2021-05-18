import { PropType, SetupContext, defineComponent, ref, Ref, watch,defineAsyncComponent } from 'vue'
import { YTable, FixedDirectionEnum, SummaryType } from './types/table.d'
import './table.scss'
import { useColumnWidth,getFixedDistance } from './utils/useTable'

/**
 * 表格组件
 */
class TableService {

  /**
   * 上下文
   * */
  context: SetupContext

  /**
   * 数据
   */
  dataList: Ref<any[]> = ref([])

  /**
   * 合计类型
   */
  summary: Ref<string> = ref('')

  /**
   * 表格内容总宽
   */
  tableWidth = ref(0)

  /**
   * 表格外壳高度
   */
  tableHeight = ref('auto')

  /**
   * 表格头部高度
   */
  tableHeadHeight = ref(0)

  /**
   * 表格body实际高度
   */
  tableBodyHeight = ref(0)

  /**
   * 排序
   */
  sortList: string[] = ['', 'desc', 'asc']

  constructor(props: YTable.YTableProps, context: SetupContext) {
    this.context = context

    watch([() => props.data, () => props.summary], ([newData, newSummary]) => {
      this.dataList.value = newData
      this.summary.value = newSummary || ''
    }, {
      immediate: true
    })
  }

  /**
   * 点击排序
   * @param columnKey 列名
   * @param item 列
   */
  onClickSort(callback:YTable.SortCallBackResult) {
    this.context.emit('onSort',callback)
  }

  /***
   * 点击行
   * @param index 行索引
   */
  onRowClick(index: number) {
    this.context.emit('onRowClick', index)
  }

  /**
   * 滚动到底部
   */
  onScrollToLower() {
    this.context.emit('onScrollToLower')
  }
}

export default defineComponent({
  name: 'y-table',
  components:{
    'y-table-header': defineAsyncComponent(() => import('./components/table-header/tableHeader.vue')),
    // 'y-table-body': defineAsyncComponent(() => import('./components/table-body/tableBody.vue')),
  },
  props: {
    options: {
      type: Array as PropType<YTable.TableHeadItem[]>,
      default: [],
    },
    data: {
      type: Array as PropType<YTable.DataType[]>,
      default: [],
    },
    summary: {
      type: String as PropType<SummaryType>,
      default: '',
    }
  },
  emits: ['onSort', 'onRowClick', 'onScrollToLower'],
  setup(props: YTable.YTableProps, context: SetupContext) {
    const service = new TableService(props, context)
    console.log('table组件', context.slots)
    return {
      FixedDirectionEnum,
      SummaryType,
      slots:context.slots,
      summary: service.summary,
      tableWidth: service.tableWidth,
      tableHeight: service.tableHeight,
      tableHeadHeight: service.tableHeadHeight,
      tableBodyHeight: service.tableBodyHeight,
      dataList: service.dataList,
      useColumnWidth,
      getFixedDistance,
      onClickSort: service.onClickSort.bind(service),
      onRowClick: service.onRowClick.bind(service),
      onScrollToLower: service.onScrollToLower.bind(service),
    };
  }
});
