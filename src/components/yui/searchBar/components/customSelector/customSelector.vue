<script lang="ts" src='./customSelector.service.ts'></script>
<template>
  <view class="custom-selector" @tap="onClick">
    <view class="text" :class="{'placeholder': !modelValue}">{{ modelValue ? modelValue : options.placeholder }}</view>
    <template v-if="options.canClear && modelValue">
      <view class="clear" @tap.stop="onClear">
        <image class="img-clear" :src="IconCloseCircle" ></image>
      </view>
    </template>
  </view>
</template>
