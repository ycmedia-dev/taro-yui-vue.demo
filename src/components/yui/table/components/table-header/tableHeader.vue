<script lang="ts" src='./tableHeader.service.ts'></script>
<template>
  <view class="table-head table-head-scroll">
    <view
      class="table-column"
      @tap="onClickSort(item.columnKey, item)"
      :id="`table-column-${item.columnKey}`"
      :style="{
        width: item.width ? item.width : '',
        [item.fixed]:
          item.fixed && `${getFixedDistance(columnList, item.fixed, index)}px`,
      }"
      v-for="(item, index) in columnList"
      :key="`table-head-column-${item.columnKey}`"
      :class="{ 'table-column_fixed': item.fixed, 'table-column_default': !item.width }"
    >
      <text>{{ item.label }}</text>
      <image
        v-if="hasSort(item)"
        class="img-sort"
        :src="sortImgMap[item.sort]"
      ></image>
    </view>
  </view>
</template>
