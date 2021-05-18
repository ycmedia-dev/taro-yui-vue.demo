<script src='./controller.service.ts' lang='ts'></script>
<template>
  <view class="kalendar-controller">
    <view class="prev-year" @tap="onClick(CalendarControllerBtnType.PREV_YEAR)">
      <image class="arrow-double" :src="IconArrowLeftDouble"></image>
    </view>
    <view
      class="prev-month"
      @tap="onClick(CalendarControllerBtnType.PREV_MONTH)"
    >
      <image class="arrow" :src="IconArrowLeft"></image>
    </view>

    <view class="day">
      <picker mode="date" fields="month" @change="onChangeDate">
        <view class="picker-in">
          {{ date.format('YYYY-MM') }}
        </view>
      </picker>
    </view>

    <view
      class="next-month"
      @tap="onClick(CalendarControllerBtnType.NEXT_MONTH)"
    >
      <image class="arrow" :src="IconArrowRight"></image>
    </view>
    <view class="next-year" @tap="onClick(CalendarControllerBtnType.NEXT_YEAR)">
      <image class="arrow-double" :src="IconArrowRightDouble"></image>
    </view>
  </view>
</template>
