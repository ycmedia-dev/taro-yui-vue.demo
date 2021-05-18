<script src='./radio.service.ts' lang='ts'></script>
<template>
  <view class="y-radio" :class="disabled ? 'disabled' : ''" @tap.stop="onChange">
    <image
      class="img"
      :src="disabled ?
            model && model == value ? selectDisabledImg : disabledImg
            : model && model == value ? selectImg : unSelectImg "
    ></image>
    <slot></slot>
  </view>
</template>
