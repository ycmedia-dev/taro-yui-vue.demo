<script src='./quarterList.service.ts' lang='ts'></script>
<template>
  <view class="kalendar-body">
    <view
      class="quarter-item"
      :class="item.className"
      v-for="(item, index) in quarterList"
      :key="`quarter-item-${index}`" @tap="onClickQuarter(item)">
        {{ item.label }}
    </view>
  </view>
</template>
