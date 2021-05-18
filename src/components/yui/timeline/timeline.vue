<script lang="ts" src='./timeline.service.ts'></script>
<template>
  <view class="y-timeline">
    <view class="timeline-item"
          v-for="(item, index) in modelValue"
          :key="`timeline-item-${index}`">
      <view class="timeline-item-head">
        <view v-if="slots.header" class="custom">
          <slot name="header"></slot>
        </view>
        <template v-else>
          <view v-if="dateTimeProperty && item[dateTimeProperty]" class="date">{{ item[dateTimeProperty] }}</view>
          <view v-if="titleProperty && item[titleProperty]" class="title">{{ item[titleProperty] }}</view>
        </template>
        <view class="btn-list" >
          <template v-if="actionList && actionList.length">
            <view class="btn"
                  :class="`btn-${btnItem.className}`"
                  v-for="(btnItem, idx) in actionBtnList"
                  :key="`btn-item-${idx}`"
                  @tap.stop="onAction(btnItem.className, item)">
              {{ btnItem.label }}
            </view>
          </template>
          <slot name="btn" :btn="item"></slot>
        </view>
      </view>

      <view class="timeline-item-body">
        <view v-if="contentProperty" class="con">
          {{ item[contentProperty] }}
        </view>
        <slot v-else name="body" :body="item">
        </slot>
      </view>
    </view>
  </view>
</template>
