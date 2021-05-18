<script lang="ts" src='./tabs.service.ts'></script>
<template>
  <view class="tabs">
    <view class="tab-item"
          :class="{'active': currentIndex === index}"
          v-for="(item, index) in options"
          :key="`tab-item-${index}`"
          @tap="onClickTab(index, item.id)">
      {{ item.label }}
      <template v-if="item.badge">
        <view v-if="item.badge.value" class="tab-item-number" :class="item.badge.value > item.badge.max ? 'exceed' : ''">{{ item.badge.value <= item.badge.max ? item.badge.value : `${item.badge.max}+` }}</view>
      </template>
    </view>
  </view>
</template>
