<script src="./fixedButton.service.ts" lang="ts"></script>
<template>
  <block v-if="btnLabelList.length > 0">
    <view class="fixed-gap" :class="[btnDirection, btnDirection === DirectionType.VERTICAL && btnLabelList.length < 2 ? 'single' : '']"></view>
    <view class="fixed-button" :class="[btnDirection, btnDirection === DirectionType.VERTICAL && btnLabelList.length < 2 ? 'single' : '']">
      <view
        v-for="(item, index) in btnLabelList"
        :key="item"
        class="btn"
        :class="btnDirection === DirectionType.VERTICAL ?
          btnVerticalTypeList[index] :
          btnLabelList.length < 2 ? 'primary' : btnHorizontalTypeList[index]"
        @tap="onClick(index)"
      >
        <slot :info="{ idx: index }"></slot>
        <text>{{ item }}</text>
      </view>
      <view v-if="isMobile" className="pd-safe"></view>
    </view>
  </block>
</template>
