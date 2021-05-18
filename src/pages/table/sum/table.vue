<template>
  <view v-reSize id="container" class="container">
    <y-table :options="options"
             :data="data"
             :summary="SummaryType.TOP"
             @onSort="onCatchSort"
             @onRowClick="onCatchRowClick">
      <template #name="scope">
        插槽-{{scope.info}}
      </template>
    </y-table>

  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import './table.scss'
import { YTable, SortType, SummaryType } from '@/components/yui/table/types/table.d'

class TableService {
  /**
   * 表头
   * */
  options: YTable.TableHeadItem[] = [
    {
      width: '200px',
      label: '姓名',
      columnKey: 'name'
    },
    {
      width: '200px',
      label: '年龄',
      columnKey: 'age',
      sort: SortType.DESC
    },
    {
      width: '200px',
      label: '金额',
      columnKey: 'desc',
      sort: SortType.NONE
    }
  ]

  /**
   * 表数据
   * */
  data: YTable.DataType = [
    {
      name: '合计',
      age: 6,
      desc: '描述1',
      money: 58
    },{
      name: 'aa',
      age: 1,
      desc: '描述1描述',
      money: 10
    },{
      name: 'bb',
      age: 2,
      desc: '描述2',
      money: 34
    },{
      name: 'cc',
      age: 3,
      desc: '描述3',
      money: 14
    },{
      name: 'aa',
      age: 1,
      desc: '描述1',
      money: 10
    },{
      name: 'bb',
      age: 2,
      desc: '描述2',
      money: 34
    },{
      name: 'cc',
      age: 3,
      desc: '描述3描述3描述3描述3描述3描述3描述3',
      money: 14
    }
  ]

  constructor() {

  }

  /***
   *获取组件排序：''(不排序) desc(降序)，asc(升序)
   */
  onCatchSort(param: YTable.SortCallBackResult) {
    console.log(`点击的列名是${param.columnKey}，顺序是：${param.sort}`)
  }

  /***
   * 点击行
   * @param index 行索引
   */
  onCatchRowClick(index: number) {
    console.log(`点击的是第${index}行`)
  }
}

export default defineComponent({
  components: {
    'y-table': defineAsyncComponent(() => import('@/components/yui/table/table.vue'))
    // 'y-table': defineAsyncComponent(() => import('@/components/table/table.vue'))
    // 'y-table': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/table/table.vue'))
  },
  setup() {
    const service = new TableService()
    return {
      SummaryType,
      options: service.options,
      data: service.data,
      onCatchSort: service.onCatchSort.bind(service),
      onCatchRowClick: service.onCatchRowClick.bind(service)
    };
  }
});
</script>
