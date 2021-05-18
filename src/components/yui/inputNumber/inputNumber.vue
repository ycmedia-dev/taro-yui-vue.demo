<script lang="ts" src='./inputNumber.service.ts'></script>
<template>

<view class="counter">

  <view class="counter-minus"  :class="!!options.disabled ? 'disabled' : ''" @tap="onToggleAction(-1)">
    <image class="img" :src="!!options.disabled ? IconMinusDisabled : IconMinusPrimary"></image>
  </view>

  <view class="counter-input" style="border: #{'1PX'} solid #EBEBEB">
    <input class="iptxt"
           type="number"
           :value="showCount"
           :disabled="!!options.disabled"
           @input="onChangeNumber">
  </view>

  <view class="counter-plus" :class="!!options.disabled ? 'disabled' : ''" @tap="onToggleAction(1)">
      <image class="img" :src="!!options.disabled ? IconPlusDisabled : IconPlusPrimary"></image>
  </view>
</view>
</template>
