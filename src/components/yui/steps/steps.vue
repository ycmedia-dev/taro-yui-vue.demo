<script lang="ts" src='./steps.service.ts'></script>
<template>
<view class="step">
  <view class="step-item"
        :class="item.className"
        v-for="(item, index) in options"
        :key="`step-item-${index}`">
    <view class="step-head">
      <view class="step-line">
        <view class="step-line_inner"></view>
      </view>
      <view class="step-icon"></view>
    </view>

    <view class="step-body">
      <view class="step-title">{{ item.label }}</view>
    </view>
  </view>
</view>
</template>
