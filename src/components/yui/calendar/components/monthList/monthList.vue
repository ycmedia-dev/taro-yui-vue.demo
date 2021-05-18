<script src='./monthList.service.ts' lang='ts'></script>
<template>
  <view class="kalendar-body">
    <view
      class="month-item"
      :class="item.className"
      v-for="(item, index) in monthList"
      :key="`month-item-${index}`" @tap="onClickMonth(item)">
        {{ item.label }}
    </view>
  </view>
</template>
