<script lang="ts" src='./pageContainer.service.ts'></script>
<template>
  <view class="y-page-container">
    <slot name="header"></slot>
    <scroll-view
      :class="className"
      :scrollY="true"
      :scrollTop="pageContainerContext.scrollTop"
      @scrolltolower="onScrollToLower"
    >
      <view class="container">
        <slot></slot>
      </view>
    </scroll-view>
    <slot name="footer"></slot>
  </view>
</template>