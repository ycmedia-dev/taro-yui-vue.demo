<template>
  <view v-reSize id="container" class="container">
    <y-table :options="options"
             :data="data"
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
import { YTable, SortType } from '@/components/yui/table/types/table.d'

class TableService {
  /**
   * 表头
   * */
  options: YTable.TableHeadItem[] = [
    {
      width: '30%',
      label: '列名1',
      columnKey: 'name',
      sort: SortType.NONE,
    },
    {
      width: '30%',
      label: '列名2',
      columnKey: 'age',
      sort: SortType.DESC
    },
    {
      width: '40%',
      label: '列名3',
      columnKey: 'desc',
      sort: SortType.ASC
    },
  ]

  /**
   * 表数据
   * */
  data: YTable.DataType = [
    {
      name: 'aa',
      age: 1,
      desc: '描述1'
    },{
      name: 'bb',
      age: 2,
      desc: '描述2'
    },{
      name: 'cc',
      age: 3,
      desc: '描述3'
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
    // 'y-table': defineAsyncComponent(() => import('../../../../taro-yui-vue/src/components/table/table.vue'))
  },
  setup() {
    const service = new TableService()
    return {
      options: service.options,
      data: service.data,
      onCatchSort: service.onCatchSort.bind(service),
      onCatchRowClick: service.onCatchRowClick.bind(service)
    };
  }
});
</script>
