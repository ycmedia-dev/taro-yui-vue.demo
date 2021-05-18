<script lang="ts" src='./empty.service.ts'></script>
<template>
  <view class='y-empty'>
    <image :src="EmptyImg" class="empty-img"></image>
    <view class="empty-tip">{{ tip }}</view>
    <slot></slot>
  </view>
</template>
