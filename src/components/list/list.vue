<script lang="ts" src='./list.service.ts'></script>
<template>
  <view class="y-list">
    <view class="list-item"
          v-for="(item, index) in data"
          :key="`list-item-${index}`">
      <view class="list-item_l">
        <slot name="prepend" :infoL="item"></slot>
      </view>
      <view class="list-item_r">
        <slot name="append" :infoR="item"></slot>
      </view>
    </view>
  </view>
</template>
