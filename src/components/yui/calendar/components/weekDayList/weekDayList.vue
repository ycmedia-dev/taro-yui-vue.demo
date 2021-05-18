<script src='./weekDayList.service.ts' lang='ts'></script>
<template>
  <view class='kalendar-header'>
    <view v-for="(day, index) in weekTextList" :key="`week-day-item-${index}`" class='week-day-item'>{{ day }}</view>
  </view>
</template>
