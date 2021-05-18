<script lang="ts" src='./formItemCustomSelector.service.ts'></script>
<template>
  <view class="y-form-item-custom-selector" @tap="onClick">
    <view class="text" :class="{'placeholder': !modelValue}">{{ modelValue ? modelValue : options.placeholder }}</view>
    <template v-if="options.canClear && modelValue && pattern !== YFormPattern.VIEW">
      <view class="clear" @tap.stop="onClear">
        <image class="img-clear" :src="IconCloseCircle" ></image>
      </view>
    </template>
  </view>
</template>
