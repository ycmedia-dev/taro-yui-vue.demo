<script lang="ts" src='./timePicker.service.ts'></script>
<template>
  <view class="time-picker">
    <picker class="time-picker-in" mode="multiSelector" :value="timeIndex" :range="timeList" @change="onChange">
      <view class="picker" :class="modelValue ? '': 'placeholder'">{{ modelValue ? modelValue : '' }}</view>
    </picker>

    <template v-if="timeIndex.length">
      <image class="img-clear" :src="IconCloseCircle"  @tap.stop="onClearTime"></image>
    </template>

  </view>
</template>
