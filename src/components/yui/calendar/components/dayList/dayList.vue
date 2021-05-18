<script src='./dayList.service.ts' lang='ts'></script>
<template>
  <view class="kalendar-body">
    <view
      class="date-item date-item_month"
      :class="item.className"
      v-for="(item, index) in dayList"
      :key="`date_${index}`"
    >
      <view class="day"  @tap="onClickDay(item)">
        <text class="day-in">{{ item.day }}</text>
      </view>
    </view>
  </view>
</template>
