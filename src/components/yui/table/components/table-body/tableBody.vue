<script lang="ts" src='./tableBody.service.ts'></script>
<template>
  <view class="table-body">
    <view class="table-row"
            :class="{'table-row-summary': summary === SummaryType.TOP && !idx ||
                      summary === SummaryType.BOTTOM && idx === dataList.length - 1}"
            :id="`table-row-${idx}`"
            v-for="(dataItem, idx) in dataList"
            :key="`table-body-row-${idx}`"
            @tap="onRowClick(idx)">
        <view class="table-column"
              :class="{'table-column_fixed': item.fixed}"
              :style="{ width: item.width,
                        [item.fixed]: item.fixed && `${getFixedDistance(columnList,item.fixed, index)}px`
                      }"
              v-for="(item, index) in columnList"
              :key="`table-head-column-${index}`">
          <view :style="`width: ${useColumnWidth(item)}`">
            <slot v-if="slots[item.columnKey] && !summary ||
                  slots[item.columnKey] && summary === SummaryType.TOP && idx ||
                  slots[item.columnKey] && summary === SummaryType.BOTTOM && idx !== dataList.length - 1"
                  :name="item.columnKey"
                  :info="dataItem[item.columnKey]"></slot>
            <block v-else>{{ dataItem[item.columnKey] }}</block>
            <slot name="body"></slot>
          </view>
        </view>
      </view>
  </view>
</template>
