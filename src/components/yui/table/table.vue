<script lang="ts" src='./table.service.ts'></script>
<template>
  <view class="y-table">
    <scroll-view
    class="scroll-box"
    :scrollX="true"
    :scrollY="true"
    @scrolltolower="onScrollToLower"
    >
      <y-table-header
          :columnList="options"
          @onSort="onClickSort"
        ></y-table-header>


      <view class="table-body" :class="{'no-content': !dataList.length}">
        <template v-if="!dataList.length">
          <text>暂无数据</text>
        </template>

        <template v-else>
          <view class="table-row"
                :class="{'table-row-summary': summary === SummaryType.TOP && !idx ||
                      summary === SummaryType.BOTTOM && idx === dataList.length - 1}"
                :id="`table-row-${idx}`"
                v-for="(dataItem, idx) in dataList"
                :key="`table-body-row-${idx}`"
                @tap="onRowClick(idx)">
            <view class="table-column"
                  :class="{'table-column_fixed': item.fixed,  'table-column_default': !item.width}"
                  :style="{ width: item.width,
                        [item.fixed]: item.fixed && `${getFixedDistance(options,item.fixed, index)}px`
                      }"
                  v-for="(item, index) in options"
                  :key="`table-head-column-${index}`">
              <view class="con" :style="{width: useColumnWidth(item)}">
                <slot v-if="slots[item.columnKey] && !summary ||
                  slots[item.columnKey] && summary === SummaryType.TOP && idx ||
                  slots[item.columnKey] && summary === SummaryType.BOTTOM && idx !== dataList.length - 1"
                      :name="item.columnKey"
                      :info="dataItem[item.columnKey]"></slot>
                <block v-else>{{ dataItem[item.columnKey] }}</block>
              </view>
            </view>
          </view>
        </template>
      </view>
    </scroll-view>
  </view>
</template>
