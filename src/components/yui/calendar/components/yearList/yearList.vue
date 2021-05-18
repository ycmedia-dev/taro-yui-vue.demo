<script src='./yearList.service.ts' lang='ts'></script>
<template>
  <view class="kalendar-body">
    <view
      class="year-item"
      :class="item.className"
      v-for="(item, index) in yearList"
      :key="`year-item-${index}`" @tap="onClickYear(item)">
      {{ item.year }}
    </view>
  </view>
</template>
