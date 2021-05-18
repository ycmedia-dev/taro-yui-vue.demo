import './tableHeader.scss'
import { PropType, SetupContext, defineComponent, ref, Ref, watch, computed } from 'vue'
import { SortType, YTable } from '../../types/table.d'
import { YTableHeader } from './types/tableHeader.d'
import { useColumnWidth, getFixedDistance } from '../../utils/useTable'
import IconAsc from '../../assets/img/icon_asc.svg'
import IconDesc from '../../assets/img/icon_desc.svg'
import IconSort from '../../assets/img/icon_sort.svg'

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
  columnList: Ref<YTable.TableHeadItem[]> = ref([])

  sortImgMap = {
    '': IconSort,
    'desc': IconDesc,
    'asc': IconAsc,
  }

  /**
   * 是否排序
   */
  hasSort = computed(() => {
    return (data: YTable.TableHeadItem) => {
      return typeof (data.sort) !== 'undefined';
    }
  })

  constructor(props: YTableHeader.Props, context: SetupContext) {
    this.context = context
    watch(() => props.columnList, (newColumnList) => {
      this.columnList.value = newColumnList
    }, {
      immediate: true
    })
  }

  /**
   * 点击排序
   * @param columnKey 列名
   * @param column 列
   */
  onClickSort(columnKey: string, column: YTable.TableHeadItem) {
    if (typeof (column.sort) === 'undefined') {
      return
    }
    let sort = column.sort;
    if (sort === SortType.NONE) {
      sort = SortType.DESC;
    } else if (sort === SortType.DESC) {
      sort = SortType.ASC;
    } else if (sort === SortType.ASC) {
      sort = SortType.NONE;
    }

    let tempColumnList = this.columnList.value;
    tempColumnList.forEach((item: YTable.TableHeadItem) => {
      if (columnKey === item.columnKey) {
        item.sort = sort
      } else if (item.sort !== undefined) {
        item.sort = SortType.NONE
      }
    })
    this.columnList.value = tempColumnList
    this.context.emit('onSort', <YTable.SortCallBackResult>{
      columnKey: column.columnKey,
      sort: sort
    })
  }
}

export default defineComponent({
  name: 'y-table-header',
  props: {
    columnList: {
      type: Array as PropType<YTable.TableHeadItem[]>,
      default: [],
    }
  },
  emits: ['onSort'],
  setup(props: YTableHeader.Props, context: SetupContext) {
    const service = new TableBodyService(props, context)
    return {
      useColumnWidth: useColumnWidth,
      getFixedDistance: getFixedDistance,
      columnList: service.columnList,
      sortImgMap: service.sortImgMap,
      hasSort: service.hasSort,
      onClickSort: service.onClickSort.bind(service)
    };
  }
});
