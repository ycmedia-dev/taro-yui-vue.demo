<script lang="ts" src='./avatar.service.ts'></script>
<template>
  <view class="y-avatar">
    <image
      class="image"
      :class="{'circle':isCircle}"
      :src="imgSrc"
      @error="onErrorHaddle"
    ></image>
    <slot></slot>
  </view>
</template>