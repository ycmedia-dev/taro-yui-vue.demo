<template>
  <view v-reSize id="container" class="container">
    <y-table :options="options"
             :data="data"
             @onSort="onCatchSort"
             @onRowClick="onCatchRowClick" @onScrollToLower="onCatchScrollToLower">

        <template #name="scope">
          插槽-{{scope.info}}
        </template>

    </y-table>

  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent,ref,Ref } from 'vue'
import './table.scss'
import { YTable, SortType, FixedDirectionEnum } from '@/components/yui/table/types/table.d'

class TableService {

  /**
   * 表头
   * */
  options: Ref<YTable.TableHeadItem[]> = ref([
    {
      width: '100px',
      label: '客户名称',
      columnKey: 'infoName',
      fixed: FixedDirectionEnum.LEFT
    },
    {
      width: '80px',
      label: '订单数',
      columnKey: 'count',
      sort: SortType.NONE
    },
    {
      width: '80px',
      label: '销售额',
      columnKey: 'amount',
      sort: SortType.DESC
    },
    {
      width: '80px',
      label: '已回款额',
      columnKey: 'amountReceived',
      sort: SortType.NONE
    },
    {
      width: '80px',
      label: '待回款额',
      columnKey: 'waitAmountReceive',
      sort: SortType.NONE
    },
    {
      width: '130px',
      label: '未发货商品销售额',
      columnKey: 'waitStockOutMoney',
      sort: SortType.NONE
    },
    {
      width: '130px',
      label: '已发货商品销售额',
      columnKey: 'stockOutMoney',
      sort: SortType.NONE
    },
    {
      width: '120px',
      label: '已发货商品成本',
      columnKey: 'stockOutCost',
      sort: SortType.NONE
    },
    {
      width: '120px',
      label: '已发货商品利润',
      columnKey: 'stockOutProfit',
      sort: SortType.NONE
    },
  ])

  /**
   * 表数据
   * */
  data: YTable.DataType = JSON.parse('[{"infoId":2,"stockOutCost":0.13,"stockOutProfit":119.87,"infoName":"大仙2号公司","count":3,"amount": "gwegewgertertertertgewrtgerteretetete","amountReceived":141,"waitAmountReceive":459,"waitStockOutMoney":480,"stockOutMoney":120},{"infoId":40,"stockOutCost":0,"stockOutProfit":0,"infoName":"测试客户zxt-3","count":1,"amount":120,"amountReceived":108,"waitAmountReceive":12,"waitStockOutMoney":120,"stockOutMoney":0},{"infoId":25,"stockOutCost":0,"stockOutProfit":0,"infoName":"大仙3号公司","count":1,"amount":120,"amountReceived":0,"waitAmountReceive":120,"waitStockOutMoney":120,"stockOutMoney":0},{"infoId":2,"stockOutCost":0.13,"stockOutProfit":119.87,"infoName":"大仙2号公司","count":3,"amount":600,"amountReceived":141,"waitAmountReceive":459,"waitStockOutMoney":480,"stockOutMoney":120},{"infoId":40,"stockOutCost":0,"stockOutProfit":0,"infoName":"测试客户zxt-3","count":1,"amount":120,"amountReceived":108,"waitAmountReceive":12,"waitStockOutMoney":120,"stockOutMoney":0},{"infoId":25,"stockOutCost":0,"stockOutProfit":0,"infoName":"大仙3号公司","count":1,"amount":120,"amountReceived":0,"waitAmountReceive":120,"waitStockOutMoney":120,"stockOutMoney":0},{"infoId":2,"stockOutCost":0.13,"stockOutProfit":119.87,"infoName":"大仙2号公司","count":3,"amount":600,"amountReceived":141,"waitAmountReceive":459,"waitStockOutMoney":480,"stockOutMoney":120},{"infoId":40,"stockOutCost":0,"stockOutProfit":0,"infoName":"测试客户zxt-3","count":1,"amount":120,"amountReceived":108,"waitAmountReceive":12,"waitStockOutMoney":120,"stockOutMoney":0},{"infoId":25,"stockOutCost":0,"stockOutProfit":0,"infoName":"大仙3号公司","count":1,"amount":120,"amountReceived":0,"waitAmountReceive":120,"waitStockOutMoney":120,"stockOutMoney":0},{"infoId":2,"stockOutCost":0.13,"stockOutProfit":119.87,"infoName":"大仙2号公司","count":3,"amount":600,"amountReceived":141,"waitAmountReceive":459,"waitStockOutMoney":480,"stockOutMoney":120},{"infoId":40,"stockOutCost":0,"stockOutProfit":0,"infoName":"测试客户zxt-3","count":1,"amount":120,"amountReceived":108,"waitAmountReceive":12,"waitStockOutMoney":120,"stockOutMoney":0},{"infoId":25,"stockOutCost":0,"stockOutProfit":0,"infoName":"大仙3号公司","count":1,"amount":120,"amountReceived":0,"waitAmountReceive":120,"waitStockOutMoney":120,"stockOutMoney":0},{"infoId":2,"stockOutCost":0.13,"stockOutProfit":119.87,"infoName":"大仙2号公司","count":3,"amount":600,"amountReceived":141,"waitAmountReceive":459,"waitStockOutMoney":480,"stockOutMoney":120},{"infoId":40,"stockOutCost":0,"stockOutProfit":0,"infoName":"测试客户zxt-3","count":1,"amount":120,"amountReceived":108,"waitAmountReceive":12,"waitStockOutMoney":120,"stockOutMoney":0},{"infoId":25,"stockOutCost":0,"stockOutProfit":0,"infoName":"大仙3号公司","count":1,"amount":120,"amountReceived":0,"waitAmountReceive":120,"waitStockOutMoney":120,"stockOutMoney":0}]')

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

  /**
   * 滚动到底部
   */
  onCatchScrollToLower() {
    console.log('到底啦')
  }
}

export default defineComponent({
  components: {
    'y-table': defineAsyncComponent(() => import('@/components/yui/table/table.vue'))
    // 'y-table': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/table/table.vue'))
  },
  setup() {
    const service = new TableService()
    return {
      options: service.options,
      data: service.data,
      onCatchSort: service.onCatchSort.bind(service),
      onCatchRowClick: service.onCatchRowClick.bind(service),
      onCatchScrollToLower: service.onCatchScrollToLower.bind(service)
    };
  }
});
</script>
