<script lang="ts" src='./dateTimePicker.service.ts'></script>
<template>
  <view class="date-time-picker">
    <view class="btn"
          :class="dateTimeStr ? '' : 'placeholder'"
          @tap="onToggleDialog">
        {{ dateTimeStr ? dateTimeStr : options.placeholder }}

      <template v-if="options.canClear && dateTimeStr.length && pattern !== YFormPattern.VIEW">
        <view class="clear"  @tap.stop="onClearTime">
          <image class="img-clear" :src="IconCloseCircle"></image>
        </view>
      </template>
    </view>
    <view :id="btnElId"></view>

    <template v-if="isShowDialog">
      <view class="date-time-picker-in">
        <view class="arrows_up"></view>
        <view class="date-time-picker-head">
          <view class="text" :class="dateStr ? '' : 'placeholder'">
            {{ dateStr ? dateStr : '选择日期' }}
          </view>
          <view class="text">
            <y-form-item-picker v-model="timeStr" :options="timeOptions"></y-form-item-picker>
          </view>
        </view>

        <y-calendar  v-model="dateStr" :options="options" @onSelectDate="onSelectDate"></y-calendar>

        <view class="date-time-picker-foot">
          <view class="btn primary" @tap="onSubmit">确定</view>
        </view>
      </view>
    </template>

    <template v-if="isShowDialog">
      <view class="mask" @tap="onHideDialog"></view>
    </template>
  </view>
</template>
