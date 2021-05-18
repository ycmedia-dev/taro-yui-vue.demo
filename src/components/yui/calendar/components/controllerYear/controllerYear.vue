<script src='./controllerYear.service.ts' lang='ts'></script>
<template>
  <view class="kalendar-controller">
    <view class="prev-year" @tap="onClick(CalendarControllerBtnType.PREV_YEAR)">
      <image class="arrow-double" :src="IconArrowLeftDouble"></image>
    </view>


    <view class="day">
      <picker mode="selector"
              :value="pickerIndex"
              :range="pickerOption"
              @change="onChangeYear">
        <view class="picker-in">
          {{ pickerOption[pickerIndex] }}
        </view>
      </picker>
    </view>


    <view class="next-year" @tap="onClick(CalendarControllerBtnType.NEXT_YEAR)">
      <image class="arrow-double" :src="IconArrowRightDouble"></image>
    </view>
  </view>
</template>
