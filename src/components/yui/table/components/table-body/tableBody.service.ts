import './tableBody.scss'
import { PropType, SetupContext, defineComponent, ref, Ref, watch } from 'vue'
import { YTable, SummaryType } from '../../types/table.d'
import { YTableBody } from './types/tableBody.d'
import { PageTableHeadItem } from '../../types/tableHeadItem'
import { useColumnWidth,getFixedDistance } from '../../utils/useTable'

/**
 * 表格组件
 */
class TableBodyService {

  /**
   * 上下文
   * */
  context: SetupContext


  /**
   * 表头
   */
  options: Ref<PageTableHeadItem[]> = ref([])

  /**
   * 数据
   */
  dataList: Ref<any[]> = ref([])

  /**
   * 合计类型
   */
  summary: Ref<string> = ref('')

  constructor(props: YTableBody.Props, context: SetupContext) {
    this.context = context

    watch([() => props.columnList, () => props.data, () => props.summary], ([newOptions, newData, newSummary]) => {
      this.options.value = newOptions
      this.dataList.value = newData
      this.summary.value = newSummary || ''
    }, {
      immediate: true
    })
  }

  /***
   * 点击行
   * @param index 行索引
   */
  onRowClick(index: number) {
    this.context.emit('onRowClick',<YTable.RowClickCallBackResult>{
      index
    })
  }
}

export default defineComponent({
  name: 'y-table-body',
  props: {
    slots: {
      type: Object as PropType<object>,
      default: {},
    },
    columnList: {
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
  emits: ['getBodyHeight'],
  setup(props: YTableBody.Props, context: SetupContext) {
    const service = new TableBodyService(props, context)
    console.log('表单body', Object.keys(props.slots).length)
    return {
      props,
      SummaryType,
      options: service.options,
      summary: service.summary,
      useColumnWidth: useColumnWidth,
      getFixedDistance: getFixedDistance,
      dataList: service.dataList,
      onRowClick: service.onRowClick.bind(service),
    };
  }
});
