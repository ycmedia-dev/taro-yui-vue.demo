<script src='./controllerYearRange.service.ts' lang='ts'></script>
<template>
  <view class="kalendar-controller">
    <view class="prev-year" @tap="onClick(CalendarControllerBtnType.PREV_YEAR)">
      <image class="arrow-double" :src="IconArrowLeftDouble"></image>
    </view>

    <view class="day">
      {{yearRangeStr}}
    </view>

    <view class="next-year" @tap="onClick(CalendarControllerBtnType.NEXT_YEAR)">
      <image class="arrow-double" :src="IconArrowRightDouble"></image>
    </view>
  </view>
</template>
